import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Producto } from './productos/Producto';
import { ProductosComponent } from './productos/productos.component';

const URL = 'https://638a71bbc5356b25a21b4ad9.mockapi.io';

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene los productos de la API
   */

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(URL+'/productos')
                                    .pipe(
                                      tap((productos: Producto[]) => {
                                        productos.forEach((producto: Producto) => {
                                          producto.cantidad = 0;
                                        })
                                      }
                                    )
                                  );
  }
}
