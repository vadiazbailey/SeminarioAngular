import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  //Creo un array de objetos de productoss
  productos: Producto[] = [
    {
      nombre: "Camiseta Argentina",
      precio: 1000,
      imagen: "https://www.mundialistas.com.ar/wp-content/uploads/2018/06/camiseta-argentina-2018-1.jpg",
      descripcion: "Camiseta de la selección Argentina",
      stock: 0,
      cantidad: 0
    },
    {
      nombre: "Camiseta Brasil",
      precio: 1000,
      imagen: "https://www.mundialistas.com.ar/wp-content/uploads/2018/06/camiseta-brasil-2018-1.jpg",
      descripcion: "Camiseta de la selección Brasil",
      stock: 10,
      cantidad: 0
    },
  ]
  title: string = 'Productos';
  constructor() {

  }

  ngOnInit(): void {
  }

  agregarAlCarrito(producto: Producto) {
    console.log(producto);
    if (producto.cantidad < producto.stock) {
      producto.cantidad++;
    }
  }

  quitarDelCarrito(producto: Producto) {
    console.log(producto);
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }

  cambiarCantidad(event: any, producto: Producto) {
    console.log(event.target);
    //Cambia stock de productos
    if (event.target.value < producto.stock) {
      producto.stock = producto.stock - event.target.value;
    } 
    console.log(producto.stock);
  }
}
