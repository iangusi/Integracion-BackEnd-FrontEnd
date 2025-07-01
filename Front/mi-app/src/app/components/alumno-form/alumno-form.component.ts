import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../model/alumno.model';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html'
})
export class AlumnoFormComponent implements OnInit {
  form: FormGroup;
  id?: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private service: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombreAlumno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      paternoAlumno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      maternoAlumno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      correoAlumno: ['', [Validators.required, Validators.email, Validators.minLength(4), Validators.maxLength(150)]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isEdit = !!this.id;
    if (this.isEdit) {
      this.service.get(this.id!).subscribe((a: Alumno) => this.form.patchValue(a));
    }
  }

  submit() {
    const alumno: Alumno = this.form.value;
    if (this.isEdit) {
      this.service.update(this.id!, alumno).subscribe(() => this.router.navigate(['/alumnos']));
    } else {
      this.service.create(alumno).subscribe(() => this.router.navigate(['/alumnos']));
    }
  }

  // Nuevo método para navegaión en plantilla
  cancel(): void {
    this.router.navigate(['/alumnos']);
  }
}
