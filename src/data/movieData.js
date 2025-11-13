export const movieData = {
    inception: {
        title: 'Inception',
        year: '2010',
        rating: '8.8',
        duration: '2h 28m',
        genres: 'Action, Sci-Fi, Thriller',
        languages: 'English, Japanese, French',
        description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        director: 'Christopher Nolan',
        cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
        backdrop: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
    },
    interstellar: {
        title: 'Interstellar',
        year: '2014',
        rating: '8.6',
        duration: '2h 49m',
        genres: 'Adventure, Drama, Sci-Fi',
        languages: 'English',
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: 'Christopher Nolan',
        poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        backdrop: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    'dark-knight': {
        title: 'The Dark Knight',
        year: '2008',
        rating: '9.0',
        duration: '2h 32m',
        genres: 'Action, Crime, Drama',
        languages: 'English',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...',
        director: 'Christopher Nolan',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        backdrop: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
    },
    dune: {
        title: 'Dune',
        year: '2021',
        rating: '8.0',
        duration: '2h 35m',
        genres: 'Adventure, Drama, Sci-Fi',
        languages: 'English',
        description: "Feature adaptation of Frank Herbert's science fiction novel.",
        director: 'Denis Villeneuve',
        poster: 'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg'
    },
    'avatar-2': {
        title: 'Avatar: The Way of Water',
        year: '2022',
        rating: '7.6',
        duration: '3h 12m',
        genres: 'Action, Adventure, Fantasy',
        languages: 'English',
        description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.',
        director: 'James Cameron',
        poster: 'https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg'
    },
    'matrix-4': {
        title: 'The Matrix Resurrections',
        year: '2021',
        rating: '5.7',
        duration: '2h 28m',
        genres: 'Action, Sci-Fi',
        languages: 'English',
        description: "Return to a world of two realities...",
        director: 'Lana Wachowski',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_.jpg'
    },
    conjuring: {
        title: 'The Conjuring: The Last Rites',
        year: '2025',
        rating: '7.8',
        duration: '2h 12m',
        genres: 'Horror, Mystery, Thriller',
        languages: 'English',
        description: 'The Warrens investigate a murder that may be linked to a demonic possession.',
        director: 'Michael Chaves',
        poster: 'https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    }
}

export const movieList = Object.keys(movieData).map(id => ({ id, ...movieData[id] }))
