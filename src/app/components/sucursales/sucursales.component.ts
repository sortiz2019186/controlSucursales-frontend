import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { EmpresaService } from '../../services/empresa.service';
import { Sucursal } from '../../models/sucursal.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss'],
  providers: [SucursalService, EmpresaService]
})
export class SucursalesComponent implements OnInit {
  public token: String;
  public sucursalList: any;
  public sucursalModel: Sucursal;
  public sucursalIDModel: Sucursal;

  constructor(private sucursalService: SucursalService, private empresaService: EmpresaService) {
    this.token = this.empresaService.getToken();
    this.sucursalModel = new Sucursal('', '', '', '');
    this.sucursalIDModel = new Sucursal('', '', '', '');
  }

  ngOnInit(): void {
    this.obtenerSucursales();
  }

  crearSucursal() {
    this.sucursalService.crearSucursal(this.sucursalModel, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerSucursales();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Sucursal creada y guardada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

  obtenerSucursales() {
    this.sucursalService.obtenerSucursales(this.token).subscribe(
      response => {
        console.log(response.sucursalesEncontradas);
        this.sucursalList = response.sucursalesEncontradas;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerSucursal(id: String) {
    this.sucursalService.obtenerSucursal(id, this.token).subscribe(
      response => {
        console.log(response.sucursalEncontrada);
        this.sucursalIDModel = response.sucursalEncontrada;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  modificarSucursal() {
    this.sucursalService.modificarSucursal(this.sucursalIDModel, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerSucursales();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Sucursal editada y guardada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

  eliminarSucursal(id: String) {
    this.sucursalService.eliminarSucursal(id, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerSucursales();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Sucursal eliminada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

}
