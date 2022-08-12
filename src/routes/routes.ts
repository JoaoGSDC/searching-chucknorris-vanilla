import { Home } from '../views/home';
import { Jokes } from '../views/jokes';
import { Search } from '../views/search';

export const routes: any = {
  '/': { title: 'Home', render: Home },
  '/jokes': { title: 'Chuck Norris', render: Jokes },
  '/search': { title: 'Pesquisa', render: Search },
};
