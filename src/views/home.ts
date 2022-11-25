import { IHome } from '../interfaces/IHome';
import { View } from './view';

export class HomeView extends View {
  template(_controller: IHome): Function {
    return () => `
      <section class="content__home">
        <form class="content__home" onSubmit={handleNavigateToSearchScreen}>
          <img src="http://www.einsteinlimeira.com.br/portal/public/assets/img/brand/logo.png" alt="logo" />

          <input type="text" class="search" name="search" value="" />

          <div class="home__container">
              <a name="searchButton" href="" data-link><button id="searchButton" type="button">Pesquisar Chuck Norris</button></a>
              <button id="luck" type="button">Estou com sorte</button>
          </div>
        </form>
      </section>
    `;
  }
}
