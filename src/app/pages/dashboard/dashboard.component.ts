import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  
  cliente: any = null;
  
  constructor(private clienteService: ClienteService, private location: Location){}

  ngOnInit(): void {
    this.cliente = this.clienteService.leerSesion();  
    console.log('Logueado: ' , this.cliente);

  }
}
