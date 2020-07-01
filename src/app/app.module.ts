import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { TareasListComponent } from './componentes/tareas-list/tareas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent,
    NotasComponent,
    TareasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
