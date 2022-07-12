import Games from './Games';

const Catalog = ({ setGame }) => {
	const games = [
		{ name: 'leftRight' },
		{ name: 'circleDown' },
		{ name: '1%', image: 'onePercent' },
		{ name: 'leftRight' },
		{ name: 'leftRight' },
		{ name: 'leftRight' },
	];
	return (
		<div>
			<h1 style={{ marginTop: '0px', marginBottom: '24px' }}>Catalog</h1>
			<div className='catalog-container'>
				{games.map((game) => (
					<Games key={game} game={game} setGame={setGame} />
				))}
			</div>
		</div>
	);
};

export default Catalog;
