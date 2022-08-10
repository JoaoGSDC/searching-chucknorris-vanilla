import home from '../views/home';
import jokes from '../views/jokes';
import search from '../views/search';

export const routes: any = {
  '/': { title: 'Home', render: home },
  '/jokes': { title: 'Chuck Norris', render: jokes },
  '/search': { title: 'Pesquisa', render: search },
};
