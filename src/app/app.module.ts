import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NuevaTransferenciaComponent } from './pages/nueva-transferencia/nueva-transferencia.component';
@NgModule({
  declarations: [AppComponent, NuevaTransferenciaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSnackBarModule, MatIconModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
