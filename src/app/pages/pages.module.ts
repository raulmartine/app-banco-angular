import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { TransferenciasRecibidasComponent } from './transferencias-recibidas/transferencias-recibidas.component';
import { TransferenciasEnviadasComponent } from './transferencias-enviadas/transferencias-enviadas.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { DetalleTransferenciaComponent } from './detalle-transferencia/detalle-transferencia.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TransferenciasRecibidasComponent,
    TransferenciasEnviadasComponent,
    DetalleTransferenciaComponent,
    PerfilComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ComponentesModule],
})
export class PagesModule {}
