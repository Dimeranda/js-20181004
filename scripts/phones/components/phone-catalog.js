import Component from '../../component.js';

export default class PhoneCatalog extends Component {
  constructor({ element, phones, onPhoneSelected, onAdd }) {
    super({ element });

    this._phones = phones;
    this._onPhoneSelected = onPhoneSelected;
    this._onAdd = onAdd;

    this._render();

    this.on('click', 'add-button', (event) => {
      const phoneElement = event.target.closest('[data-element="phone-item"]');
      this._onAdd(phoneElement.dataset.phoneId);
    });

    this.on('click', 'phone-link', (event) => {
      const phoneElement = event.target.closest('[data-element="phone-item"]');
      this._onPhoneSelected(phoneElement.dataset.phoneId);
    });
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones">
        ${ this._phones.map(phone => `
          <li
            data-element="phone-item"
            class="thumbnail"
            data-phone-id="${ phone.id }"
          >
            <a href="#${ phone.id }" class="thumb" data-element="phone-link">
              <img alt="${ phone.name }" src="${ phone.imageUrl }">
            </a>
  
            <div class="phones__btn-buy-wrapper">
              <a class="btn btn-success" data-element="add-button" >
                Add
              </a>
            </div>
  
            <a href="#${ phone.id }" data-element="phone-link">
              ${ phone.name }
            </a>
            <p>${ phone.snippet }</p>
          </li>
        `).join('') }
      </ul>
    `;
  }
}
