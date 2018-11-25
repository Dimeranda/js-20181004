import Component from '../../component.js'

export default class SortBy extends Component {
    constructor({ element, phones }) {
        super({ element });


        this.on('click', 'sort-by', (event) => {
            let value = this._element.value;
            this.sort(value, phones);
        });
    }

    sort(value ,phones){
        if(value === 'age'){
            phones.sort((phone1, phone2) => phone1.age - phone2.age)
        } else if(value === 'age') {
            phones.sort((phone1, phone2) => {
                phone1.toLocaleLowerCase();
                phone2.toLocaleLowerCase();
                if(phone1 < phone2) { return -1; }
                if(phone1 > phone2) { return 1; }
                return 0;})
        }
    }
    add(itemId) {
        if (!this._items[itemId]) {
            this._items[itemId] = 0;
        }

        this._items[itemId] += 1;

        this._render();
    }

    remove(itemId) {
        this._items[itemId] -= 1;

        if (this._items[itemId] === 0) {
            delete this._items[itemId];
        }

        this._render();
    }

    _render() {
        this._element.innerHTML = `
      <section>
        <h3>Shopping Cart</h3>
        <ul>
          ${ Object.entries(this._items).map(([id, quantity]) => `

            <li data-element="item" data-item-id="${ id }">
              ${ id } (${ quantity })
              <button data-element="remove-button">x</button>
            </li>
            
          `).join('')}
        </ul>
      </section>
    `;
    }
}
