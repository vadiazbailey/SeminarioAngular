import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { ProductosDataService } from '../productos-data.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  //Creo un array de objetos de productoss
  productos: Producto[] = [];
  // productos: Producto[] = [
  //   {
  //     nombre: "Camiseta Argentina",
  //     precio: 1000,
  //     imagen: "https://www.mundialistas.com.ar/wp-content/uploads/2018/06/camiseta-argentina-2018-1.jpg",
  //     descripcion: "Camiseta de la selección Argentina",
  //     stock: 0,
  //     cantidad: 0
  //   },
  //   {
  //     nombre: "Camiseta Brasil",
  //     precio: 1000,
  //     imagen: "https://www.mundialistas.com.ar/wp-content/uploads/2018/06/camiseta-brasil-2018-1.jpg",
  //     descripcion: "Camiseta de la selección Brasil",
  //     stock: 10,
  //     cantidad: 0
  //   },
  // ]

  title: string = 'Productos';

  //Cuando coloco el private me lo declara afuera
  constructor(private carrito: CarritoService,
              private productosDataService: ProductosDataService) 
  {
  }

  ngOnInit(): void {
    this.productosDataService.getProductos()
    .subscribe((productos) => this.productos = productos);
  }

  addToCart(producto: Producto): void {
    //Agrego el producto al carrito si la cantidad es distinta a cero
    if(producto.cantidad != 0) {
      //Agrego el producto al carrito si la cantidad es menor o igual al stock
      if(producto.cantidad <= producto.stock) {
        this.carrito.addToCart(producto);
        producto.stock -= producto.cantidad;
        producto.cantidad = 0;
      }
    }
  }

}
