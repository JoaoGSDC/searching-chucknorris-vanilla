export default () => {
  let loaded = false;
  window.addEventListener('load', handleSearchItem);

  function handleSearchItem() {
    const { search } = location;
    let query = search.split('=')[1];

    let joke = document.getElementById('joke');

    fetch(`https://api.chucknorris.io/jokes/${query}`).then((resp) =>
      resp.json().then((data) => {
        (joke as HTMLElement).innerHTML = renderJoke(data);
        loaded = true;
      })
    );
  }

  function renderJoke(item: any) {
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
      ${!loaded ? `<div class="content__loader"><div class="loader"></div></div>` : `<></>`}
    </section>
  `;
};
