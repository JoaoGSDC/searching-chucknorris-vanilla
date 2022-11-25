import { View } from './view';
export class JokesView extends View {
  template(_controller: any): Function {
    return () => `
      <section id="joke" class="content__jokes">
        <div class="content__loader">
          <div class="loader"></div>
        </div>
      </section>
    `;
  }
}
