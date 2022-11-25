import { SearchModel } from '../models/SearchModel';
import { SearchController } from '../controllers/SearchController';
import { SearchView } from '../views/search';

const searchModel = new SearchModel();
const searchController = new SearchController(searchModel);
const searchView = new SearchView(searchController);

export const searchRouter = { title: 'Pesquisa', render: searchView.template(searchController) };
