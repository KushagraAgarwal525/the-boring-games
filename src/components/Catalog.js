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
    </div>
  );
};

export default Catalog;
