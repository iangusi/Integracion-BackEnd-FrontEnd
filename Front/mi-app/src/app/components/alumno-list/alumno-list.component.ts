import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../../model/alumno.model';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html'
})
export class AlumnoListComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(
    private service: AlumnoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.service.getAll().subscribe(data => this.alumnos = data);
  }

  edit(id: number) {
    this.router.navigate(['alumnos', 'edit', id]);
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => this.loadAll());
  }

  create() {
    this.router.navigate(['alumnos', 'new']);
  }
}
