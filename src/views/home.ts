import { getRandomInt } from '../utils/getRandomInt';

export const Home = () => {
  let searchInputValue = '';

  document.addEventListener('input', handleAddValueInStorage);
  document.addEventListener('click', () => {
    const searchButton = document.getElementById('searchButton') as HTMLElement;
    searchButton.addEventListener('click', handleNavigateToSearchScreen);

    const luckButton = document.getElementById('luck') as HTMLElement;
    luckButton.addEventListener('click', handleSearchRandomJoke);
  });

  function handleAddValueInStorage(e: any) {
    searchInputValue = e.target.value.replace(/ /g, '+');
  }

  function handleNavigateToSearchScreen() {
    if (searchInputValue === '') {
      return;
    }

    let searchButton = document.getElementsByName('searchButton')[0] as any;
    searchButton.href = `/search?q=${searchInputValue}`;

    let searchInput = document.getElementsByName('search')[0] as HTMLInputElement;
    searchInput.value = '';
  }

  function handleSearchRandomJoke() {
    if (searchInputValue === '') {
      return;
    }

    fetch(`https://api.chucknorris.io/jokes/search?query=${searchInputValue}`).then((resp) =>
      resp.json().then((data) => {
        const index = getRandomInt(0, data.result.length - 1);
        const item = data.result[index];

        let searchInput = document.getElementsByName('search')[0] as HTMLInputElement;
        searchInput.value = '';

        window.location.href = `/jokes?q=${item.id}`;
      })
    );
  }

  return `
    <section class="content__home">
        <img src="https://assets.nuuvem.com/assets/fe/images/nuuvem_name-8c08821d4b5cb727e06cf1a57f782262.svg" alt="logo" />

        <input type="text" class="search" name="search" value="${searchInputValue}" />

        <div class="home__container">
            <a name="searchButton" href="" data-link><button id="searchButton" type="button">Pesquisar Chuck Norris</button></a>
            <button id="luck" type="button">Estou com sorte</button>
        </div>
    </section>
    `;
};
