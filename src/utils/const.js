const DATE_FORMATS = {
  releaseDate: 'DD MMMM YYYY',
  runtime: 'H[h] m[m]',
  watchingDate: 'DD MMMM YYYY',
  commentDate: 'YYYY/MM/DD HH:mm',
};

const commentsEmojis = ['smile', 'sleeping', 'puke', 'angry'];

const FILMS_COUNT = 5;

const BLANK_FILM = {
  comments: [1, 2, 3],
  filmInfo: {
    title: 'Интерстеллар',
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: 10,
    poster: 'images/posters/popeye-meets-sinbad.png',
    ageRating: '18+',
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano',
      'Takeshi Kitano',
      'Takeshi Kitano'
    ],
    actors: [
      'Morgan Freeman'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: 77,
    genre: [
      'Comedy',
      'Horror'
    ],
    description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
  },
  userDetails: {
    watchlist: Boolean(),
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
};

const FilterType = {
  'ALL': 'all movies',
  'WATCHLIST': 'watchlist',
  'HISTORY': 'history',
  'FAVORITE': 'favorite',
};

export {DATE_FORMATS, commentsEmojis, FILMS_COUNT, BLANK_FILM, FilterType};
