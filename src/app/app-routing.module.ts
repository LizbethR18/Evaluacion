import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotasComponent } from './componentes/notas/notas.component';
import { TareasComponent } from './componentes/tareas/tareas.component';

const routes: Routes = [
  {path:'tareas', component:TareasComponent},
  {path: 'notas', component:NotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
