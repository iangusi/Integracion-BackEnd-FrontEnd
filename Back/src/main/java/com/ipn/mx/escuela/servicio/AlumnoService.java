package com.ipn.mx.escuela.servicio;

import com.ipn.mx.escuela.dominio.entidades.Alumno;

import java.util.List;

public interface AlumnoService {
  public List<Alumno> findAll();
  public Alumno findById(Long id);
  public Alumno save(Alumno alumno);
  public void delete(Long id);
}
