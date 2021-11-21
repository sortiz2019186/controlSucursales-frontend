import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { ProductoSucursal } from '../models/productoSucursal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'applicarion/json');

  constructor(private http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  crearProductoSucursal(productoSucursal: ProductoSucursal, token: any): Observable<any> {
    let body = JSON.stringify(productoSucursal);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.post(`${ this.ruta }crear/productoSucursal`, body, { headers: headersToken });
  }

  obtenerProductosSucursal(token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtener/productosSucursal`, { headers: headersToken });
  }

  obtenerProductoSucursal(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtener/productoSucursal/${ id }`, { headers: headersToken });
  }

  modificarProductoSursal(productoSucursal: ProductoSucursal, token: any): Observable<any> {
    let body = JSON.stringify(productoSucursal);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.put(`${ this.ruta }modificar/productoSucursal/${ productoSucursal._id }`, body, { headers: headersToken });
  }

  eliminarProductoSucursal(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.delete(`${ this.ruta }eliminar/productoSucursal/${ id }`, { headers: headersToken });
  }
}
