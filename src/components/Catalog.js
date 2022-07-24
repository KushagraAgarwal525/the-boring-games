import Games from "./Games";

const Catalog = ({ setGame }) => {
  const games = [
    { name: "leftRight" },
    { name: "circleDown" },
    { name: "1%", image: "onePercent" },
  ];
  return (
    <div>
      <h1 style={{ marginTop: "0px", marginBottom: "32px" }}>Catalog</h1>
      <div className="catalog-container">
        {games.map((game) => (
          <Games key={game.name} game={game} setGame={setGame} />
        ))}
      </div>
      <div className="ad-banner mobileHide">
        <iframe
          title="Advertisement"
          src="//moonveto.com/watchnew?key=e0b9b2cc4b14f5a0702ed9aa7b4373d6"
          width="468"
          height="60"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className="ad-banner mobileShow">
        <iframe
          title="Advertisement"
          src="//moonveto.com/watchnew?key=2ba9d7d3aa8d9b9af7524592367246f1"
          width="320"
          height="50"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default Catalog;
