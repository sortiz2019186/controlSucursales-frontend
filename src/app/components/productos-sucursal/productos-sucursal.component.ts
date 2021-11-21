import { Component, OnInit } from '@angular/core';
import { ProductoSucursalService } from '../../services/producto-sucursal.service';
import { EmpresaService } from '../../services/empresa.service';
import { ProductoSucursal } from '../../models/productoSucursal.model';

@Component({
  selector: 'app-productos-sucursal',
  templateUrl: './productos-sucursal.component.html',
  styleUrls: ['./productos-sucursal.component.scss'],
  providers: [ProductoSucursalService, EmpresaService]
})
export class ProductosSucursalComponent implements OnInit {
  public token: String;
  public productosList: any;
  public productoModel: ProductoSucursal;
  public productoIDModel: ProductoSucursal;

  constructor(private productoSucursalService: ProductoSucursalService, private empresaService: EmpresaService) {
    this.token = this.empresaService.getToken();
    this.productoModel = new ProductoSucursal('', '', 0, 0, '');
    this.productoIDModel = new ProductoSucursal('', '', 0, 0, '');
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  crearProducto() {
    this.productoSucursalService.crearProductoSucursal(this.productoModel, this.token).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerProductos() {
    this.productoSucursalService.obtenerProductosSucursal(this.token).subscribe(
      response => {
        console.log(response.productosEncontrados);
        this.productosList = response.productosEncontrados;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerProducto(id: String) {
    this.productoSucursalService.obtenerProductoSucursal(id, this.token).subscribe(
      response => {
        console.log(response.productoEncontrado);
        this.productoIDModel = response.productoEncontrado;
      }
    );
  }

  modificarProducto() {
    this.productoSucursalService.modificarProductoSursal(this.productoIDModel, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerProductos();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  eliminarProducto(id: String) {
    this.productoSucursalService.eliminarProductoSucursal(id, this.token).subscribe(
      response => {
        console.log(response);

        this.obtenerProductos();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
