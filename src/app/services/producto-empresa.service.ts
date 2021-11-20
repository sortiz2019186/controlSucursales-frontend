import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { ProductoEmpresa } from '../models/productoEmpresa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoEmpresaService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  crearProducto(producto: ProductoEmpresa, token: any): Observable<any> {
    let body = JSON.stringify(producto);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.post(`${ this.ruta }crearProducto`, body, { headers: headersToken });
  }

  obtenerProductos(token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtenerProductos`, { headers: headersToken });
  }

  obtenerProducto(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtenerProducto/${ id }`, { headers: headersToken });
  }

  modificarProducto(producto: ProductoEmpresa, token: any): Observable<any> {
    let body = JSON.stringify(producto);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.put(`${ this.ruta }modificarProducto/${ producto._id }`, body, { headers: headersToken });
  }

  eliminarProducto(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.delete(`${ this.ruta }eliminarProducto/${ id }`, { headers: headersToken });
  }
}
