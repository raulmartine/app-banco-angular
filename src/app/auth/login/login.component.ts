import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { clientes } from 'src/app/datos/usuarios-ejemplo';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // para almacenar los campos
  email: string = '';
  password: string = '';

  constructor(private clienteService: ClienteService, private router: Router, private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duración en milisegundos
    });
  }

  validarLogin() {
    console.log('Validando...', this.email, this.password);

    const usuario = this.clienteService.hacerLogin(this.email, this.password);
    // si se ha encontrado un usuario
    if (usuario) {
      console.log(usuario);
      this.router.navigateByUrl('/pages/dashboard');
    } else {
      console.error('Credenciales incorrectas');
      this.openSnackBar("Credenciales incorrectas","OK");
    }
  }

  enviarLogin(){
    this.clienteService.login(this.email,this.password).subscribe(
      (cliente) => {
        console.log({cliente});
        if (cliente) {
          this.clienteService.crearSesion(cliente);
          this.openSnackBar("Login correcto","OK");
          this.router.navigateByUrl('/pages/dashboard');
        }
        else {
          this.openSnackBar("Login incorrecto","OK");
          console.error("Login incorrecto");
        }
      },
      (error) => {
        console.log({error});
      }
    );
  }
}
