import {render} from './render.js';

import UserProfileView from './view/header/profile-view.js';
import FilterView from './view/filter-view.js';

import FooterStatisticsView from './view/footer/footer-statistics-view.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteHeader = document.querySelector('.header');
const siteMain = document.querySelector('.main');

const siteFooter = document.querySelector('.footer');
const footerStatisticsContainer = siteFooter.querySelector('.footer__statistics');

const boardPresenter = new BoardPresenter();

render(new UserProfileView(), siteHeader);
render(new FilterView(), siteMain);
render(new FooterStatisticsView(), footerStatisticsContainer);

boardPresenter.init(siteMain);
