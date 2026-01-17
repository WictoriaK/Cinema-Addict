import {render} from '../render';

import SortView from '../view/sort-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container.js';
import ShowMoreBtnView from '../view/show-more-button-view.js';
import FilmsCardView from '../view/film-card-view.js';
import FilmPopupView from '../view/film-popup-view.js';


export default class BoardPresenter {
  #boardContainer = null;
  #filmsModel = null;

  #boardFilms = [];

  #filmsContainer = new FilmsContainerView(); // section class="films"
  #filmsListComponent = new FilmsListView(); // section class="films-list" внутри  class="films"
  #filmsList = new FilmsListContainerView(); // section class="films-list__container" внутри  class="films-list" где карточки фильмов

  init = (boardContainer, filmsModel) => {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
    this.#boardFilms = [...this.#filmsModel.films];

    render(new SortView(), this.#boardContainer);
    render(this.#filmsContainer, this.#boardContainer);
    render(this.#filmsListComponent, this.#filmsContainer.element);
    render(this.#filmsList, this.#filmsListComponent.element);

    for (let i = 0; i < this.#boardFilms.length; i++) {
      this.#renderFilm(this.#boardFilms[i]);
    }

    // render(new FilmPopupView(this.boardFilms[0]), this.boardContainer);

    render(new ShowMoreBtnView(), this.#boardContainer);

  };



  #renderFilm = (film) => {
    const filmComponent = new FilmsCardView(film);

    render(filmComponent, this.#filmsList.element);
  };

}
