import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  public ruta: String;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;

  constructor(private http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  getToken() {
    var token2 = localStorage.getItem('token');

    if (token2 != 'undefined') {
      this.token = token2;
    } else {
      this.token = null;
    }

    return this.token;
  }

  crearEmpresa(empresa: Empresa): Observable<any> {
    let body = JSON.stringify(empresa);
    let headersToken = this.headersVariable.set('token', this.getToken());

    return this.http.post(`${ this.ruta }crearEmpresa`, body, { headers: headersToken });
  }

  obtenerEmpresas(): Observable<any> {
    let headersToken = this.headersVariable.set('token', this.getToken());

    return this.http.get(`${ this.ruta }obtenerEmpresas`, { headers: headersToken });
  }

  modificarEmpresa(empresa: Empresa): Observable<any> {
    let body = JSON.stringify(empresa);
    let headersToken = this.headersVariable.set('token', this.getToken());

    return this.http.put(`${ this.ruta }modificarEmpresa/${ empresa._id }`, body, { headers: headersToken });
  }

  eliminarEmpresa(id: String): Observable<any> {
    let headersToken = this.headersVariable.set('token', this.getToken());

    return this.http.delete(`${ this.ruta }eliminarEmpresa/${ id }`, { headers: headersToken });
  }
}
