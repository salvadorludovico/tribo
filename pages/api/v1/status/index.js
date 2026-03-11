import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseResultVersionInfo = await database.query("SELECT VERSION();");
  const databaseVersionInfoValue = databaseResultVersionInfo.rows[0].version;

  const databaseResultVersion = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseResultVersion.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query("SHOW max_connections;");
  const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;

  const databaseResultActiveConnections = await database.query(
    "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1 AND state = $2;",
    [databaseName, "active"],
  );
  const databaseActiveConnectionsValue = databaseResultActiveConnections.rows[0].count;

  const databaseResultIdleConnections = await database.query(
    "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1 AND state = $2;",
    [databaseName, "idle"],
  );
  const databaseIdleConnectionsValue = databaseResultIdleConnections.rows[0].count;

  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    database: {
      version_info: databaseVersionInfoValue,
      version_number: databaseVersionValue,
      max_connections: parseInt(databaseMaxConnectionsValue),
      opened_connections: databaseOpenedConnectionsValue,
      active_connections: databaseActiveConnectionsValue,
      idle_connections: databaseIdleConnectionsValue,
    },
  });
}

export default status;
