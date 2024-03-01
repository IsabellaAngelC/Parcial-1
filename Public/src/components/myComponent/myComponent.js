export default Products;
class Products extends HTMLElement() {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'description', 'value', 'inStock', 'image'];
	}

	connectedCallback() {}

	render() {
		this.shadowRoot.innerHTML = `{$<h1>'title'</h1>}``{$<h2>'description'</h2>}``{$<h2>'value'</h2>}``{$<h2>'inStock'</h2>}``{$<img>'image'</img>}`;
	}

	attributeChangedCallback(aquivaalgo, oldValue, newValue) {
		this[aquivaalgo] = newValue;
	}

	render() {}
}
customElements.define('my-product', productsData);

const card = [
	{
		title: 'title',
		description: 'description',
		value: 'value',
		inStock: 'true/false',
		img: 'image',
	},
];
