import {render} from '../src/framework/render.js';

import UserProfileView from './view/header/profile-view.js';
import FilterView from './view/filter-view.js';


import FooterStatisticsView from './view/footer/footer-statistics-view.js';
import BoardPresenter from './presenter/board-presenter.js';

import FilmsModel from './model/films-model.js';

const siteHeader = document.querySelector('.header');
const siteMain = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');
const footerStatisticsContainer = siteFooter.querySelector('.footer__statistics');

const filmsModel = new FilmsModel();
const boardPresenter = new BoardPresenter(siteMain, filmsModel);


render(new UserProfileView(), siteHeader);
render(new FilterView(), siteMain);

render(new FooterStatisticsView(), footerStatisticsContainer);

boardPresenter.init();
