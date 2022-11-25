import { homeRouter } from './home.routes';
import { jokesRouter } from './jokes.routes';
import { searchRouter } from './search.routes';

export const routes: any = {
  '/': homeRouter,
  '/jokes': jokesRouter,
  '/search': searchRouter,
};
