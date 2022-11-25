import { View } from './view';

export class SearchView extends View {
  template(_controller: any): Function {
    return () => `
      <div class="search__header">
        <a href="/">
          <figure>
              <img src="http://www.einsteinlimeira.com.br/portal/public/assets/img/brand/logo.png" alt="logo" />
          </figure>
        </a>

        <input type="text" />
      </div>

      <section id="reasearch" class="content__search"></section>
    `;
  }
}
