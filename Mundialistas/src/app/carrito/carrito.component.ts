import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { Producto } from '../productos/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carro$!: Observable<Producto[]>;
  total$!: Observable<number>;

  constructor(private carrito: CarritoService ) {
    //this.carrito.carro.subscribe((observable) => this.carro = observable); SI LO HAGO DE ESTA MANERA ME TENGO QUE ACORDAR DE DESUSCRIBIRME
    this.carro$ = this.carrito.carro.asObservable();
    this.total$ = this.carrito.total.asObservable();
   }

  ngOnInit(): void {
  }

}
