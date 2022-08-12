import { IChuckNorris } from '../interfaces/IChuckNorris';

export const Paginator = () => {
  let currentPage = 1;
  let rowsPerPage = 20;

  function displayList(items: IChuckNorris[], wrapper: HTMLElement): void {
    wrapper.innerHTML = '';
    currentPage--;

    let start = rowsPerPage * currentPage;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);

    let itemsToCurrentPage = [];

    for (let i = 0; i < paginatedItems.length; i++) {
      itemsToCurrentPage.push(paginatedItems[i]);
    }

    wrapper.innerHTML = handleRenderResearchesItem(itemsToCurrentPage);
  }

  function setupPagination(items: IChuckNorris[], wrapperPagination: HTMLElement, wrapperList: HTMLElement): void {
    wrapperPagination.innerHTML = '';

    let startPageCount = [0, 1].includes(currentPage) ? 1 : currentPage - 1;
    let pageCount = Math.ceil(items.length / rowsPerPage);
    let endPageCount = [0, 1].includes(currentPage) ? 6 : currentPage + 4;
    let limitPageCount = pageCount < endPageCount + 1 ? pageCount + 1 : endPageCount;

    for (let i = startPageCount; i < limitPageCount; i++) {
      let btn = handleRenderPaginationButton(i, items, wrapperList, wrapperPagination);
      wrapperPagination.appendChild(btn);
    }
  }

  function handleRenderPaginationButton(
    page: number,
    items: IChuckNorris[],
    wrapperList: HTMLElement,
    wrapperPagination: HTMLElement
  ): HTMLButtonElement {
    let button = document.createElement('button');
    button.innerText = String(page);

    if (currentPage + 1 === page) button.classList.add('active');

    button.addEventListener('click', function () {
      currentPage = page;
      displayList(items, wrapperList);
      setupPagination(items, wrapperPagination, wrapperList);

      let current_btn = document.querySelector('.pagenumbers button.active') as Element;
      current_btn.classList.remove('active');

      button.classList.add('active');

      window.scrollTo(0, 0);
    });

    return button;
  }

  function handleRenderResearchesItem(data: IChuckNorris[]): string {
    return `
      ${data.map((item) => {
        return `
          <div>
              <a href="/jokes?q=${item.id}"><h3>${item.value}</h3></a>
              <h4>${item.value}</h4>
          </div>
        `;
      })}
    `.replace(/,/g, '');
  }

  return { displayList, setupPagination };
};
