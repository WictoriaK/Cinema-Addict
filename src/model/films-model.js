
import {films} from '../mock/film.js';

export default class FilmsModel {
  #films = films;

  get films () {
    return this.#films;
  }
}
