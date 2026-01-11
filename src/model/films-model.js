import {commentsArray} from '../mock/comments.js';
import {generateFilm, getLinkedComments} from '../mock/film.js';

export default class FilmsModel {
  films = Array.from({length: 4}, () => {
    const film = generateFilm();
    return getLinkedComments(film, commentsArray);
  });

  getFilms = () => this.films;
}
