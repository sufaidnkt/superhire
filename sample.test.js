const { getTopMovies } = require('./index');
const fs = require('fs').promises;

describe('getTopMovies', () => {
  	const moviesData = [
		{
			name: 'Inception',
			rating: 8.8,
			genres: ['Action', 'Adventure', 'Sci-Fi']
		},
		{
			name: 'Godfather',
			rating: 9.2,
			genres: ['Crime', 'Drama']
		},
		{
			name: 'The Pink Panther',
			rating: 5.3,
			genres: ['Adventure', 'Comedy', 'Crime']
		},
		{
			name: '12 Angry Men',
			rating: 8.9,
			genres: ['Drama']
		},
		{
			name: 'Citizen Kane',
			rating: 8.5,
			genres: ['Drama', 'Mystery']
		},
		{
			name: 'Remember the Titans',
			rating: 7.6,
			genres: ['Biography', 'Drama', 'Sport']
		}
  	];

  	it('should return the top 3 movies in the given genre sortd by number of genres and rating', () => {
    	const topMovies = getTopMovies(moviesData, 'Drama');
    	expect(topMovies.length).toBe(3);
    	expect(topMovies[0].name).toBe('Godfather');
    	expect(topMovies[1].name).toBe('12 Angry Men');
    	expect(topMovies[2].name).toBe('Citizen Kane');
  	});

  	it('should return an empty array if no movies match the given genre', () => {
		const topMovies = getTopMovies(moviesData, 'Horror');
		expect(topMovies.length).toBe(0);
	});
});