package com.ipn.mx.escuela.infraestructura;

import com.ipn.mx.escuela.dominio.entidades.Alumno;
import com.ipn.mx.escuela.servicio.AlumnoService;
import com.ipn.mx.escuela.servicio.impl.AlumnoServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/alumnos")
public class AlumnoController {
  @Autowired
  private AlumnoServiceImpl service;

  @GetMapping("/alumno")
  @ResponseStatus(HttpStatus.OK)
  public List<Alumno> findAll() {
    return service.findAll();
  }


  @GetMapping("/alumno/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Alumno findById(@PathVariable Long id) {
    return service.findById(id);
  }


  @PostMapping("/alumno")
  @ResponseStatus(HttpStatus.CREATED)
  public Alumno save(@RequestBody Alumno alumno) {
    return service.save(alumno);
  }

  @PutMapping("/alumno/{id}")
  @ResponseStatus(HttpStatus.CREATED)
  public Alumno update(@RequestBody @Valid Alumno alumno,
                       @PathVariable Long id) {
    return service.update(id,alumno);
  }

  @DeleteMapping("/alumno/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }

}










