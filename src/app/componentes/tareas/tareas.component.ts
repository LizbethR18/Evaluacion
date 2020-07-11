import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas : Array<string>=[];


  constructor(private _builder: FormBuilder) { 
    this.tareasForm=this._builder.group({Tarea:['', Validators.required]})
  }
  tareasForm: FormGroup 
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('arreglo'))){
      this.Mostrar();
    }
  }

  add(values){
    this.tareas.push(values);
    localStorage.setItem('arreglo', JSON.stringify(this.tareas));
    this.tareasForm.reset();
    console.log(this.tareas);
  }
  Eliminar(){
    this.tareas=[];
    localStorage.removeItem('arreglo');
  }

  Mostrar(){
    this.tareas = JSON.parse(localStorage.getItem('arreglo'));
  }

}
