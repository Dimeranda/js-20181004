import Component from '../../component.js'
import PhonesPage from "../phones-page.js";

export default class SortBy extends Component {
    constructor({ element, phones }) {
        super({ element });


        this.on('click', 'sort-by', (event) => {
            let value = this._element.value;
            this.sort(value, phones);
        });

        this._sortValue = document.querySelector('[data-element="sort-value"]').value();
        this._sort(this._sortValue, phones);
        this._render();
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
    };

    _render() {
        new PhonesPage({element: document.querySelector('[data-page-container]'),});
    }
 }
