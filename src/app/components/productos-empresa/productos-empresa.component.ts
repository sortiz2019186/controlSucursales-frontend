import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ProductoEmpresaService } from '../../services/producto-empresa.service';
import { ProductoEmpresa } from '../../models/productoEmpresa.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos-empresa',
  templateUrl: './productos-empresa.component.html',
  styleUrls: ['./productos-empresa.component.scss'],
  providers: [ProductoEmpresaService, EmpresaService]
})
export class ProductosEmpresaComponent implements OnInit {
  public token: String;
  public productosEmpresaList: any;
  public productosEmpresaModel: ProductoEmpresa;
  public productosEmpresaIDModel: ProductoEmpresa;

  constructor(private productoEmpresaService: ProductoEmpresaService, private empresaService: EmpresaService) {
    this.token = this.empresaService.getToken();
    this.productosEmpresaModel = new ProductoEmpresa('', '', '', 0);
    this.productosEmpresaIDModel = new ProductoEmpresa('', '', '', 0);
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  crearProducto() {
    this.productoEmpresaService.crearProducto(this.productosEmpresaModel, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerProductos();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Producto crearo y guardado con éxito!',
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

  obtenerProductos() {
    this.productoEmpresaService.obtenerProductos(this.token).subscribe(
      response => {
        console.log(response.productosEncontrados);
        this.productosEmpresaList = response.productosEncontrados;
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerProducto(id: String) {
    this.productoEmpresaService.obtenerProducto(id, this.token).subscribe(
      response => {
        console.log(response.productoEncontrado);
        this.productosEmpresaIDModel = response.productoEncontrado;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  modificarProducto() {
    this.productoEmpresaService.modificarProducto(this.productosEmpresaIDModel, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerProductos();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Producto editado y guardado con éxito!',
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

  eliminarProducto(id: String) {
    this.productoEmpresaService.eliminarProducto(id, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerProductos();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Producto eliminado con éxito!',
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
