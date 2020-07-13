Vue.component('productos-component', {
    props: ['imagen', 'nombre', 'precio'],
    template: `
    <div class="border">
        <img width="128" :src="imagen" :alt="nombre" />
        <h2>{{nombre}}</h2>
        <h3>$ {{precio}}</h3>
    </div>
    `,
    // template: '#producto',
});

const app = new Vue({
    el: '#productos',
    data: {
        productos: [
            {
                imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Intel_core_i7_940_top_R7309478_wp.jpg/800px-Intel_core_i7_940_top_R7309478_wp.jpg',
                nombre: 'Procesador Intel Core i7',
                precio: 149.99
            },
            {
                imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg',
                nombre: 'Arduino Uno',
                precio: 35.0
            },
            {
                imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/APK_format_icon.png',
                nombre: 'Aplicación Movil',
                precio: 299.99
            },
        ]
    }
});