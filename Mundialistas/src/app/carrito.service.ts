import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './productos/Producto';

/**Maneja la logica de carrito */
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  /**
   * 1. Me sucribo al carro
   * 2. Cuando el carro cambia, me devuelve el carro
   * 3. Creo la variable _carro privada por standar para ultizarla en el observable
   */
  private _carro: Producto[] = [];
  carro: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>(this._carro);
  total: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalCarrito());

  addToCart(producto: Producto) {
    let compra =this._carro.find(p => p.nombre === producto.nombre);
    //No encontro al producto entonces lo agrego
    if(!compra) {
      //Agrego el producto al carro Clonando el objeto
      this._carro.push({...producto});
      //Sumo al total
      this.total.next(this.totalCarrito());
    }else{
      //Le muestro un mensaje al usuario de que el producto ya esta en el carrito
      compra.cantidad += producto.cantidad;
    }
    //Notifico al carro que cambio
    this.carro.next(this._carro);
    console.log(this._carro);
  }

  totalCarrito(): number {
    let total = 0;
    this._carro.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }

  constructor() { }
}
