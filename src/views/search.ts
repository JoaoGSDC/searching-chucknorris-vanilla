export default () => {
  let searchInputValue = '';
  let loaded = false;

  window.addEventListener('load', handleSearchItems);

  function handleSearchItems() {
    const { search } = location;
    let query = search.split('=')[1];

    let researches = document.getElementById('researches');

    fetch(`https://api.chucknorris.io/jokes/search?query=${query}`).then((resp) =>
      resp.json().then((data) => {
        (researches as HTMLElement).innerHTML = researchesItems(data.result);
        loaded = true;
      })
    );
  }

  function researchesItems(data: any[]) {
    return `
        <div class="content__search--items">
            ${data.map((item) => {
              return `
                <div>
                    <a href="/jokes?q=${item.id}"><h3>${item.value}</h3></a>
                    <h4>${item.value}</h4>
                </div>
              `;
            })}
        </div>
    `.replace(/,/g, '');
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

        <section id="researches" class="content__search">
          ${!loaded ? `<div class="content__loader"><div class="loader"></div></div>` : `<></>`}
        </section>
    `;
};
