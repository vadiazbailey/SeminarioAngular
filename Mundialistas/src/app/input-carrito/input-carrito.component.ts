import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../productos/Producto';

@Component({
  selector: 'app-input-carrito',
  templateUrl: './input-carrito.component.html',
  styleUrls: ['./input-carrito.component.scss']
})
export class InputCarritoComponent implements OnInit {

  constructor() { }

  @Input()
  //Parametro de entrada, el nombre de la variable es la que le pongo entre corchetes
  cantidad!: number;

  @Input() stock!: number;

  //LOS OUTPUT SON LOS [] DEL TEMPLATE
  @Output () cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  agregarAlCarrito() {
    if (this.cantidad < this.stock) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  quitarDelCarrito() {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiarCantidad(event: any) {
    console.log(event.target);
    //Cambia stock de productos
    if (event.target.value <= this.stock) {
      this.stock = this.stock - event.target.value;
      this.cantidadChange.emit(this.cantidad);
    } 
  }
}
