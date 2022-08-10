import { routes } from './routes';

function router() {
  let view = !location.pathname.includes('?') ? routes[location.pathname] : routes[location.pathname.split('?')[0]];

  if (!view) {
    history.replaceState('', '', '/');
    router();
    return;
  }

  document.title = view.title;
  let app = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement;
  app.innerHTML = view.render();
}

window.addEventListener('click', (e) => {
  if ((e.target as any).matches('[data-link]')) {
    e.preventDefault();
    history.pushState('', '', (e.target as any).href);
    router();
  }
});

window.addEventListener('popstate', router);
window.addEventListener('DOMContentLoaded', router);
