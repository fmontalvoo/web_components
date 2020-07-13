class ProductoComponent extends HTMLElement {

    constructor() {
        super();

        this._root = this.attachShadow({
            mode: 'closed'
        });

        this.producto = {
            imagen: "",
            nombre: "",
            precio: 0.0
        };

        // this.template = document.getElementById("producto");
        // this.templateContent = document.importNode(this.template.content, true);
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(atributo, viejoValor, nuevoValor) {

        if (atributo === 'imagen')
            this.producto.imagen = nuevoValor;
        if (atributo === 'nombre')
            this.producto.nombre = nuevoValor;
        if (atributo === 'precio')
            this.producto.precio = nuevoValor;

        this.render();

    }

    static get observedAttributes() {
        return ['imagen', 'nombre', 'precio']
    }

    _template() {
        return `
        <style>
        div {
            border: var(--border);
            border-radius: var(--border-radius);
        }
        </style>
        <div>
            <img width="128" src="${this.producto.imagen}" alt="${this.producto.nombre}" />
            <h2>${this.producto.nombre}</h2>
            <h3>$${this.producto.precio}</h3>
        </div>
        `;
    }

    render() {
        // this._root.appendChild(this.templateContent);
        // this._root.getElementById("imagen").src = this.imagen;
        // this._root.getElementById("imagen").alt = this.nombre;
        // this._root.getElementById("nombre").innerHTML = this.nombre;
        // this._root.getElementById("precio").innerHTML = `$ ${this.precio}`;
        this._root.innerHTML = this._template();
    }

}

window.customElements.define('productos-component', ProductoComponent);