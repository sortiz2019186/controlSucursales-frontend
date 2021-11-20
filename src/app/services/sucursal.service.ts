import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from './global.service';
import { Sucursal } from '../models/sucursal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  crearSucursal(sucursal: Sucursal, token: any): Observable<any> {
    let body = JSON.stringify(sucursal);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.post(`${ this.ruta }crearSucursal`, body, { headers: headersToken });
  }

  obtenerSucursales(token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtenerSucursales`, { headers: headersToken });
  }

  obtenerSucursal(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.get(`${ this.ruta }obtenerSucursal/${ id }`, { headers: headersToken });
  }

  modificarSucursal(sucursal: Sucursal, token: any): Observable<any> {
    let body = JSON.stringify(sucursal);
    let headersToken = this.headersVariable.set('token', token);

    return this.http.put(`${ this.ruta }modificarSucursal/${ sucursal._id }`, body, { headers: headersToken });
  }

  eliminarSucursal(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('token', token);

    return this.http.delete(`${ this.ruta }eliminarSucursal/${ id }`, { headers: headersToken });
  }
}
