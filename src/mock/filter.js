import {filter} from '../utils/filter.js';


export const generateFilter = (films) => Object.entries(filter).map(
  ([filterName, filteredFilms]) => ({
    name: filterName,
    count: filteredFilms(films).length,
  }),
);
