import {render} from '../framework/render.js';

import SortView from '../view/sort-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container.js';
import ShowMoreBtnView from '../view/show-more-button-view.js';
import FilmsCardView from '../view/film-card-view.js';
import FilmPopupView from '../view/film-popup-view.js';
import NoFilmsView from '../view/no-films-view.js';
import {FILMS_COUNT} from '../const.js';


export default class BoardPresenter {
  #boardContainer = null;
  #filmsModel = null;

  #boardFilms = [];
  #renderedFilmsCount = FILMS_COUNT;

  #filmsContainer = new FilmsContainerView(); // section class="films"
  #filmsListComponent = new FilmsListView(); // section class="films-list" внутри  class="films"
  #filmsList = new FilmsListContainerView(); // section class="films-list__container" внутри  class="films-list" где карточки фильмов
  #loadMoreBtn = new ShowMoreBtnView();
  #noFilmsView = new NoFilmsView();

  constructor(boardContainer, filmsModel) {
    this.#boardContainer = boardContainer;
    this.#filmsModel = filmsModel;
  }

  init = () => {
    this.#boardFilms = [...this.#filmsModel.films];

    this.#renderBoard();
  };

  #handleLoadMoreButtonClick = () => {
    this.#boardFilms.slice(this.#renderedFilmsCount, this.#renderedFilmsCount + FILMS_COUNT).forEach((film) => {
      this.#renderFilm(film);
    });

    this.#renderedFilmsCount += FILMS_COUNT;

    if(this.#renderedFilmsCount >= this.#boardFilms.length) {
      this.#loadMoreBtn.element.remove();
      this.#loadMoreBtn.removeElement();
    }
  };

  #renderFilm = (film) => {
    const siteBody = document.querySelector('body');
    const filmComponent = new FilmsCardView(film);
    const filmPopup = new FilmPopupView(film);

    const replaceCardFilmToPopup = () => {
      siteBody.classList.add('hide-overflow');
      siteBody.append(filmPopup.element);
    };

    const replacePopupToCardFilm = () => {
      siteBody.classList.remove('hide-overflow');
      filmPopup.element.remove();
      filmPopup.removeElement();
    };


    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replacePopupToCardFilm();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    filmComponent.setOpenPopupClickHandler(() => {
      replaceCardFilmToPopup();
      document.addEventListener('keydown', onEscKeyDown);
    });

    filmPopup.setClosePopupClickHandler(() => {
      replacePopupToCardFilm();
      document.removeEventListener('keydown', onEscKeyDown);
    });


    render(filmComponent, this.#filmsList.element);
  };

  #renderBoard = () => {

    if (this.#boardFilms.length === 0) {
      render(this.#noFilmsView, this.#filmsListComponent);
    } else {
      render(new SortView(), this.#boardContainer);
      render(this.#filmsContainer, this.#boardContainer);
      render(this.#filmsListComponent, this.#filmsContainer.element);
      render(this.#filmsList, this.#filmsListComponent.element);

      for (let i = 0; i < Math.min(this.#boardFilms.length, FILMS_COUNT); i++) {
        this.#renderFilm(this.#boardFilms[i]);
      }
    }


    if (this.#boardFilms.length > FILMS_COUNT) {
      render(this.#loadMoreBtn, this.#boardContainer);

      this.#loadMoreBtn.setClickHandler(this.#handleLoadMoreButtonClick);
    }
  };
}
