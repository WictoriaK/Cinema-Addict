
import {films} from '../mock/film.js';

export default class FilmsModel {
  films = films;

  getFilms = () => this.films;
}
