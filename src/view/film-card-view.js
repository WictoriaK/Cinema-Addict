import {createElement} from '../render.js';
import {DATE_FORMATS} from '../const.js';
import {humanizeDate} from '../utils.js';

const humanizeFilmDateRelease = (releaseDate) => humanizeDate(releaseDate, DATE_FORMATS.releaseDate);
const humanizeRunTime = (runtime) => humanizeDate(runtime, DATE_FORMATS.runtime);

const createFilmsCardTemplate = (film) =>  {
  const {filmInfo, comments} = film;

  const releaseDate = humanizeFilmDateRelease(filmInfo.release.date);
  const runTime = humanizeRunTime(filmInfo.runtime);

  return (`
<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${filmInfo.title}</h3>
            <p class="film-card__rating">${filmInfo.totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${releaseDate}</span>
              <span class="film-card__duration">${runTime}</span>
              <span class="film-card__genre">${filmInfo.genre}</span>
            </p>
            <img src="${filmInfo.poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${filmInfo.description}</p>
            <span class="film-card__comments">${comments.length}</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
          </div>
        </article>`);
};

export default class FilmsCardView {
  #element = null;
  #film  = null;

  constructor(film) {
    this.#film = film;
  }


  get template() {
    return createFilmsCardTemplate(this.#film);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
