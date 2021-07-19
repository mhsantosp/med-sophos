import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'ver-citas', component: ListadoComponent },
      { path: 'nueva-cita', component: AgregarComponent },
      { path: 'actualizar-cita/:id', component: ActualizarComponent },
      { path: '**', redirectTo: 'ver-citas' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CitasRoutingModule { }
