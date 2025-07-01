import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoListComponent } from './components/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnoListComponent },
  { path: 'alumnos/new', component: AlumnoFormComponent },
  { path: 'alumnos/edit/:id', component: AlumnoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
