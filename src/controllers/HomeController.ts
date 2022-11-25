import { IHome } from '../interfaces/IHome';
import api from '../services/api';
import { getRandomInt } from '../utils/getRandomInt';

export class HomeController implements IHome {
  _searchInputValue: string;

  constructor(model: any) {
    this._searchInputValue = model.searchInputValue;

    this._handleButtonsEventClick();
  }

  _handleButtonsEventClick() {
    document.addEventListener('click', () => {
      const searchButton = document.getElementById('searchButton') as HTMLElement;
      searchButton.addEventListener('click', this._handleNavigateToSearchScreen);

      const luckButton = document.getElementById('luck') as HTMLElement;
      luckButton.addEventListener('click', this._handleSearchRandomJoke);
    });
  }

  _handleNavigateToSearchScreen() {
    if (this._searchInputValue === '') {
      return;
    }

    const searchInput = document.getElementsByName('search')[0] as HTMLInputElement;
    this._searchInputValue = searchInput.value;

    const searchButton = document.getElementsByName('searchButton')[0] as any;
    searchButton.href = `/search?q=${this._searchInputValue}`;

    searchInput.value = '';
  }

  _handleSearchRandomJoke() {
    if (this._searchInputValue === '') {
      return;
    }

    const searchInput = document.getElementsByName('search')[0] as HTMLInputElement;
    this._searchInputValue = searchInput.value;

    api(`jokes/search?query=${this._searchInputValue}`).then(({ data }) => {
      const index = getRandomInt(0, data.result.length - 1);
      const item = data.result[index];

      searchInput.value = '';
      window.location.href = `/jokes?q=${item.id}`;
    });
  }
}
