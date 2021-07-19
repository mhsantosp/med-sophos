import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { CitasResponse } from '../../interface/citas.interface';
import { MatDialog } from '@angular/material/dialog';
import { EliminarComponent } from '../../components/eliminar/eliminar.component';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['idcita', 'fecha', 'hora', 'idprueba', 'idafiliado', 'opciones'];
  dataSource: CitasResponse[] = [];

  constructor(
    private citasServicio: ServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.citasServicio.verCitas().subscribe(
      (citas) => this.dataSource = citas,
      (err) => console.log(err)
    );
  }

  openDialog() {
    this.dialog.open(EliminarComponent, {
      data: {
        idcita: '',
        fecha: '',
        hora: '',
        idprueba: '',
        idafiliado: ''
      }
    });
  }



}
