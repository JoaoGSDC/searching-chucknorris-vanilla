import { Paginator } from '../components/paginator';

export const Search = () => {
  const paginator = Paginator();

  let searchInputValue = '';

  window.addEventListener('load', handleSearchItems);

  function handleSearchItems() {
    const reasearch = document.getElementById('reasearch') as HTMLElement;
    reasearch.innerHTML = `
    <div class="content__loader">
      <div class="loader"></div>
    </div>
    <div id="list" class="content__search--items"></div>`;

    const { search } = location;
    let query = search.split('=')[1];

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then((resp) =>
      resp.json().then((data) => {
        reasearch.innerHTML = `
        <div id="list" class="content__search--items"></div>
        <div id="pagination" class="content__search--pagenumbers"></div>`;

        const listElement = document.getElementById('list') as HTMLElement;
        const paginationElement = document.getElementById('pagination') as HTMLElement;

        paginator.displayList(data.result, listElement);
        paginator.setupPagination(data.result, paginationElement, listElement);
      })
    );
  }

  document.addEventListener('input', handleAddValueInStorage);
  document.onkeydown = () => handleSearchItem();

  function handleAddValueInStorage(e: any) {
    searchInputValue = e.target.value.replace(/ /g, '+');
  }

  function handleSearchItem() {
    if ((window?.event as any)?.keyCode != '13') {
      return;
    }

    window.location.href = `/search?q=${searchInputValue}`;
  }

  return `
        <div class="search__header">
          <a href="/">
            <figure>
                <img src="https://assets.nuuvem.com/assets/fe/images/nuuvem_name-8c08821d4b5cb727e06cf1a57f782262.svg" alt="logo" />
            </figure>
          </a>

          <input type="text" />
        </div>

        <section id="reasearch" class="content__search"></section>
    `;
};
