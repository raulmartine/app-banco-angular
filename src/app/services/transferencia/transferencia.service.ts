import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/usuarios-ejemplo';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  urlApi : string = "http://localhost:8080/transferencia"

  constructor(private http: HttpClient) { }

  //traer todas las transferencias
  obtenerTransferencias(){
    return this.http.get(this.urlApi);
  }

  //obtener transferencia por id
  obtenerTransferenciaPorId(id: number){
    return this.http.get(this.urlApi + "/"+ id);
  }

  //obtener transferencias enviadas 
  obtenerTransferenciasPorIdOrdenante(idBeneficiario: number){
    return this.http.get(this.urlApi+"/ordenante/" + idBeneficiario);
  }
  
  //obtener transferencias recibidas
  obtenerTransferenciasPorIdBeneficiario(idBeneficiario: number){
    return this.http.get(this.urlApi+"/beneficiario/" + idBeneficiario);
  }

  //guardar una transferencia
  guardar(transferencia: any){
    return this.http.post(this.urlApi, transferencia);
  }

}
