const Games = ({ game, setGame }) => {
  const handleGameOpen = () => {
    setGame(game.name);
  };
  const getGameBanner = () => {
    if (game.image) {
      return require(`../gameBanners/${game.image}.jpg`);
    }
    return require(`../gameBanners/${game.name}.jpg`);
  };

  return (
    <div className="game">
      <div>
        <img
          className="game-banner"
          src={getGameBanner()}
          alt={`${game.name} banner`}
          onClick={handleGameOpen}
        />
      </div>
      <div>
        <h2 className="game-title" onClick={handleGameOpen}>
          {game.name}
        </h2>
      </div>
    </div>
  );
};

export default Games;
