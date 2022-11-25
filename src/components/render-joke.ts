import { IChuckNorris } from '../interfaces/IChuckNorris';

export class RenderJoke {
  template(item: IChuckNorris) {
    return `
      <figure>
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="logo_chucknorris" />
      </figure>

      <div class="content__jokes--joke">
        <h3>${item.value}</h3>
      </div>
    `;
  }
}
