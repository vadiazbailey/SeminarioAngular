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
      stock: 0
    },
    {
      nombre: "Camiseta Brasil",
      precio: 1000,
      imagen: "https://www.mundialistas.com.ar/wp-content/uploads/2018/06/camiseta-brasil-2018-1.jpg",
      descripcion: "Camiseta de la selección Brasil",
      stock: 10
    },
  ]
  title: string = 'Productos';
  constructor() {

  }

  ngOnInit(): void {
  }

}
