import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresaService]
})
export class EmpresasComponent implements OnInit {
  public empresasList: any;
  public empresaModel: Empresa;
  public empresaIDModel: Empresa;

  constructor(private empresaService: EmpresaService) {
    this.empresaModel = new Empresa('', '', '', '');
    this.empresaIDModel = new Empresa('', '', '', '');
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  crearEmpresa() {
    this.empresaService.crearEmpresa(this.empresaModel).subscribe(
      response => {
        console.log(response);

        this.obtenerEmpresas();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Empresa creada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        this.obtenerEmpresas();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

  obtenerEmpresas() {
    this.empresaService.obtenerEmpresas().subscribe(
      response => {
        console.log(response.empresasEncontradas);
        this.empresasList = response.empresasEncontradas;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  modificarEmpresa() {
    this.empresaService.modificarEmpresa(this.empresaIDModel).subscribe(
      response => {
        console.log(response);

        this.obtenerEmpresas();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Empresa editada y guardada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        this.obtenerEmpresas();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

  eliminarEmpresa(id: any) {
    this.empresaService.eliminarEmpresa(id).subscribe(
      response => {
        console.log(response);

        this.obtenerEmpresas();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Empresa eliminada con éxito!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        console.log(<any>error);

        this.obtenerEmpresas();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message
        });
      }
    );
  }

}
