import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  public empresaModel: Empresa;
  public token: any;

  constructor(private authService: AuthService, private router: Router) {
    this.empresaModel = new Empresa('', '', '', '');
  }

  ngOnInit(): void {
  }

  getToken() {
    this.authService.login(this.empresaModel).subscribe(
      response => {
        this.token = response.token;
        localStorage.setItem('token', this.token)
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  login() {
    this.authService.login(this.empresaModel).subscribe(
      response => {
        console.log(response);

        this.getToken();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Has iniciado sesión exitosamente!',
          showConfirmButton: false,
          timer: 3000
        });

        this.router.navigate(['/sucursales']);
      },
      error => {
        console.log(<any>error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      }
    );
  }

}
