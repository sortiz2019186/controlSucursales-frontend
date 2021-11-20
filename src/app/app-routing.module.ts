import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosSucursalComponent } from './components/productos-sucursal/productos-sucursal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'productosEmpresa', component: ProductosEmpresaComponent },
  { path: 'productosSucursal', component: ProductosSucursalComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
