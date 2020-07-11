import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas: Array<string>=[];
  fecha: Date;
  constructor(private _builder : FormBuilder) {
    this.NotasForm=this._builder.group({
      titulo: ['', Validators.required],
      descripcion:['', Validators.required]
    })
   }
  NotasForm:FormGroup
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('arreglo'))){
      this.MostrarN();
    }
  }
  agregarnotas(values){
    this.fecha=new Date;
    this.notas.push(values);
    localStorage.setItem('arreglo', JSON.stringify(this.notas));
    this.NotasForm.reset();
    console.log(this.notas);
  }

  MostrarN(){
    this.notas = JSON.parse(localStorage.getItem('arreglo'));
  }

}
