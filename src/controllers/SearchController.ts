import { Loader } from '../components/loader';
import { PageNumbers } from '../components/page-numbers';
import { Paginator } from '../components/paginator';
import { ISearch } from '../interfaces/ISearch';
import api from '../services/api';

export class SearchController implements ISearch {
  _searchInputValue = '';

  constructor(model: any) {
    this._searchInputValue = model.searchInputValue;

    window.addEventListener('load', this._handleSearchItems);

    document.addEventListener('input', this._handleAddValueInStorage);
    document.onkeydown = () => this._handleSearchItem();
  }

  _handleSearchItems() {
    const paginator = new Paginator();
    const loader = new Loader();
    const pageNumbers = new PageNumbers();

    const reasearch = document.getElementById('reasearch') as HTMLElement;
    reasearch.innerHTML = loader.template();

    const { search } = location;
    let query = search.split('=')[1];

    api(`jokes/search?query=${query}`).then(({ data }) => {
      reasearch.innerHTML = pageNumbers.template();

      const listElement = document.getElementById('list') as HTMLElement;
      const paginationElement = document.getElementById('pagination') as HTMLElement;

      paginator.displayList(data.result, listElement);
      paginator.setupPagination(data.result, paginationElement, listElement);
    });
  }

  _handleAddValueInStorage(e: any) {
    this._searchInputValue = e.target.value.replace(/ /g, '+');
  }

  _handleSearchItem() {
    if ((window?.event as any)?.keyCode != '13') {
      return;
    }

    const searchInput = document.getElementsByName('search')[0] as HTMLInputElement;
    this._searchInputValue = searchInput.value;

    window.location.href = `/search?q=${this._searchInputValue}`;
  }
}
