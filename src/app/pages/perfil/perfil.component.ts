import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  cliente: any = null;

  constructor(private clienteService: ClienteService,  private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();  
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Duración en milisegundos
    });
  }

  guardarPassword() {
    this.clienteService.
    cambiarPassword(this.cliente).
    subscribe((clienteGuardado) => {
      this.openSnackBar("Se ha cambiado la contraseña","OK");
    })
  }

}
