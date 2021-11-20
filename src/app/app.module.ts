import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosEmpresaComponent } from './components/productos-empresa/productos-empresa.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosSucursalComponent } from './components/productos-sucursal/productos-sucursal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SucursalesComponent,
    HomeComponent,
    ProductosEmpresaComponent,
    EmpresasComponent,
    ProductosSucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
