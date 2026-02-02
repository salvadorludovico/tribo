function Home() {
  const containerStyle = {
    maxWidth: "100vh",
    margin: "0 auto",
  };

  const imageStyle = {
    margin: "0 auto",
    maxWidth: "100%",
    height: "auto",
    display: "block",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/images/logo.png"
        style={imageStyle}
        width={100}
        height={100}
        alt="Logo da Tribo"
      />
      <h1>Bem-vindo à Tribo</h1>
      <p>
        Nesse momento, estamos construindo um novo local na internet pra quem
        busca viver além da rotina tradicional, sem deixar de lado o seu
        desenvolvimento, e quer se conectar com pessoas semelhantes, conhecer
        novos lugares e vivenciar experiências gratificantes. Somos pessoas com
        desejo de viver experiências e criar conexões verdadeiras, muitas delas
        proporcionadas por rolês na trilha, na árvore, na pedra, no silêncio da
        natureza ou num rolê noturno bem vivido.
      </p>
      <img src="/images/chapada-1.jpg" style={imageStyle} />
      <img src="/images/chapada-2.jpg" style={imageStyle} />
      <img src="/images/chapada-3.jpg" style={imageStyle} />
    </div>
  );
}

export default Home;
