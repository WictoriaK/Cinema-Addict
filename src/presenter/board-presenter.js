import {render} from '../render';

import SortView from '../view/sort-view.js';
import FilmsContainerView from '../view/films-container-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container.js';
import ShowMoreBtnView from '../view/show-more-button-view.js';
import FilmsCardView from '../view/film-card-view.js';


export default class BoardPresenter {
  filmsContainer = new FilmsContainerView();
  filmsListComponent = new FilmsListView();
  filmsList = new FilmsListContainerView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(new SortView(), this.boardContainer);
    render(this.filmsContainer, this.boardContainer);
    render(this.filmsListComponent, this.filmsContainer.getElement());
    render(this.filmsList, this.filmsListComponent.getElement());

    for (let i = 0; i < 6; i++) {
      render(new FilmsCardView(), this.filmsList.getElement());
    }

    render(new ShowMoreBtnView(), this.boardContainer);

  };

}
