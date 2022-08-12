import { IChuckNorris } from '../interfaces/IChuckNorris';

export const Jokes = () => {
  window.addEventListener('load', handleSearchItem);

  function handleSearchItem() {
    const { search } = location;
    let query = search.split('=')[1];

    let joke = document.getElementById('joke') as HTMLElement;

    fetch(`https://api.chucknorris.io/jokes/${query}`).then((resp) =>
      resp.json().then((data) => (joke.innerHTML = renderJoke(data)))
    );
  }

  function renderJoke(item: IChuckNorris) {
    return `
      <figure>
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="logo_chucknorris" />
      </figure>

      <div class="content__jokes--joke">
        <h3>${item.value}</h3>
      </div>
    `;
  }

  return `
    <section id="joke" class="content__jokes">
      <div class="content__loader">
        <div class="loader"></div>
      </div>
    </section>
  `;
};
