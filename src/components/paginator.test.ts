/**
 * @jest-environment jsdom
 */

import { Paginator } from './paginator';
import { IChuckNorris } from '../interfaces/IChuckNorris';

describe('Paginator rendering', () => {
  const paginator = new Paginator();

  let items: IChuckNorris[] = [
    {
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      id: 'RDdE9zlOTa-pv-lmapCrdQ',
      url: 'https://api.chucknorris.io/jokes/RDdE9zlOTa-pv-lmapCrdQ',
      value:
        'Chuck Norris was featured in an episode of Deadliest Warrior, winning all 1000 simulated battles. His opponent was the USS Nimitz.',
    },
  ];

  it('should render chuck norris item', () => {
    const element = document.createElement('div');
    element.id = 'list';

    paginator.displayList(items, element);
    expect(element.innerHTML).toContain('h3');
  });

  it('should render a paginator buttons', () => {
    const elementList = document.createElement('div');
    elementList.id = 'list';

    const elementPaginator = document.createElement('div');
    elementPaginator.id = 'pagination';

    paginator.setupPagination(items, elementPaginator, elementList);
    expect(elementPaginator.innerHTML).toContain('button');
  });
});
