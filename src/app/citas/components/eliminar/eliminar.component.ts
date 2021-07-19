import { Component, Inject, OnInit } from '@angular/core';
import { CitasResponse } from '../../interface/citas.interface';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.scss']
})
export class EliminarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CitasResponse
  ) { }

  ngOnInit(): void {
  }

}
