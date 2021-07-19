import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { MaterialModule } from '../material/material.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { HomeComponent } from './pages/home/home.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    ActualizarComponent,
    HomeComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MaterialModule
  ]
})
export class CitasModule { }
