export default () => {
  let searchInputValue = '';

  document.addEventListener('input', handleAddValueInStorage);
  document.addEventListener('click', handleNavigateToSearchScreen);

  function handleAddValueInStorage(e: any) {
    searchInputValue = e.target.value.replace(/ /g, '+');
  }

  function handleNavigateToSearchScreen() {
    let searchButton = document.getElementsByName('searchButton')[0] as any;
    searchButton.href = `/search?q=${searchInputValue}`;
  }

  return `
    <section class="content__home">
        <img src="https://assets.nuuvem.com/assets/fe/images/nuuvem_name-8c08821d4b5cb727e06cf1a57f782262.svg" alt="logo" />

        <input type="text" class="search" name="search" value="${searchInputValue}" />

        <div class="home__container">
            <a name="searchButton" href="" data-link><button type="button">Pesquisar Chuck Norris</button></a>
            <button type="button">Estou com sorte</button>
        </div>
    </section>
    `;
};
