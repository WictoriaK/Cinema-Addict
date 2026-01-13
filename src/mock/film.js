import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';
import {commentsById} from './comments.js';


const filmsTile = [
  'Крёстный отец',
  'Интерстеллар',
  'Властелин колец: Братство кольца',
  'Начало',
  'Форрест Гамп',
  'Звёздные войны. Эпизод IV: Новая надежда'
];


const getLinkedComments = (film, commentsArray) => {
  const linkedComments = film.comments.map((comment) => commentsArray.get(comment));

  return {
    ...film,
    comments: linkedComments,
  };
};


const generateFilm = () => ({
  id: getRandomPositiveInteger(1, 5),
  comments: [1, 2, 3],
  filmInfo: {
    title: getRandomArrayElement(filmsTile),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: getRandomPositiveInteger(1, 10),
    poster: 'images/posters/popeye-meets-sinbad.png',
    ageRating: `${getRandomPositiveInteger(1, 21)}+`,
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
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: false
  }
});

const films = Array.from({length: 4}, () => {
  const film = generateFilm();

  return getLinkedComments(film, commentsById);
});


export {films};
