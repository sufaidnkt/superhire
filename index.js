const fs = require('fs').promises;



// Function to filter movies by genre and return the top 3 rated movies
function getTopMovies(moviesData, genre) {
    const movies = moviesData.filter(movie => movie.genres.includes(genre));
    const sorted = movies.sort((a, b) => b.rating - a.rating);
    const topThree = sorted.slice(0, 3);
    return topThree;
}

// Function to print the top movies
function printTopMovies(movies, genre) {

    if(movies.length === 0){
        console.log(`No movies found for ${genre} genre`);
        return;
    } else {
        console.log(`\n-- Movie search --`);
        console.log(`Input genre >> ${genre}`);
        movies.forEach((movie, index) => {
            console.log(`${index + 1}. ${movie.name} (${movie.rating})`);
        });
    }
}

// Program entry point
async function main() {
    console.log(`-- Movie search --`);

    try {
        const dataFilePath = process.argv[2];
        if (!dataFilePath) {
            console.error('Data file path is missing. Please provide the path as a command-line argument.');
            return;
        }

        const data = await fs.readFile(dataFilePath, 'utf8');
        const moviesData = JSON.parse(data).movies;

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Input genre (type q to quit) >> `, async (input) => {
            if (input.toLowerCase() === 'q') {
                readline.close();
                return;
            }

        const genre = input.trim();
        const topMovies = getTopMovies(moviesData, genre);
        printTopMovies(topMovies, genre);

        main();
        });
    } catch (error) {
        console.error('Error running the program:', error);
    }
}

// Start the program
// Run the program if executed directly
if (require.main === module) {
    const dataFilePath = process.argv[2];
    if (!dataFilePath) {
      console.error('Data file path is missing. Please provide the path as a command-line argument.');
      process.exit(1);
    }
    main(dataFilePath);
  }


module.exports = {
    getTopMovies
  };