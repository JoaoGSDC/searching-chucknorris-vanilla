import { RenderJoke } from '../components/render-joke';
import { IJokes } from '../interfaces/IJokes';
import api from '../services/api';

export class JokesController implements IJokes {
  constructor(_model: any) {
    window.addEventListener('load', this._handleSearchItem);
  }

  _handleSearchItem() {
    const { search } = location;

    const renderJoke = new RenderJoke();

    const query = search.split('=')[1];
    const joke = document.getElementById('joke') as HTMLElement;

    api(`jokes/${query}`).then(({ data }) => (joke.innerHTML = renderJoke.template(data)));
  }
}
