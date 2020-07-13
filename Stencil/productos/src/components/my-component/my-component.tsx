import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {


  productos = [
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
    }
  ];

  @Prop() imagen: string;


  @Prop() nombre: string;


  @Prop() precio: string;


  render() {
    return (
      <div>
          {this.productos.map((producto) =>
          <div key={producto.nombre}>
              <img width="128" src={producto.imagen} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <h3> {producto.precio}</h3>
          </div>
          )}
      </div>
    )
  }
}
