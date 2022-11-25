export class View {
  _element;

  constructor(element: any) {
    this._element = element;
  }

  template(_controller: any) {
    throw new Error('O método template deve ser implementado nesta classe');
  }

  update(controller: any) {
    this._element.innerHTML = this.template(controller);
  }
}
