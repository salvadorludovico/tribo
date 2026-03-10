import database from "infra/database.js";

const dbName = process.env.POSTGRES_DB;

function extractQueryResult(result) {
  return Object.values(result.rows[0]);
}

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const resultVersion = await database.query("SHOW server_version;");
  const resultVersionInfo = await database.query("SELECT VERSION();");
  const resultMaxConnections = await database.query(
    "SELECT CURRENT_SETTING('max_connections')::int;",
  );
  const resultActiveConnections = await database.query(
    "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1 AND state = $2;",
    [dbName, "active"],
  );
  const resultIdleConnections = await database.query(
    "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1 AND state = $2;",
    [dbName, "idle"],
  );

  const versionInfo = extractQueryResult(resultVersionInfo)[0];
  const versionNumber = parseInt(extractQueryResult(resultVersion));
  const maxConnections = extractQueryResult(resultMaxConnections)[0];
  const activeConnections = extractQueryResult(resultActiveConnections)[0];
  const idleConnections = extractQueryResult(resultIdleConnections)[0];

  response.status(200).json({
    updated_at: updatedAt,
    database: {
      version_info: versionInfo,
      version_number: versionNumber,
      max_connections: maxConnections,
      active_connections: activeConnections,
      idle_connections: idleConnections,
    },
  });
}

export default status;
