favoriteMovie = {
    title: 'The Empire Strikes Back',
    duration: 124,
    stars: ['Mark Hamill', 'Harisson Ford', 'Carrie Fisher', 'Billy Dee Williams']
};

movieOutput = () => {
    console.log(favoriteMovie.title + " lasts for " + favoriteMovie.duration + ". Stars: " + favoriteMovie.stars[0] + ", " + favoriteMovie.stars[1] + ", " + favoriteMovie.stars[2] + " and " + favoriteMovie.stars[3]);
}

movieOutput();