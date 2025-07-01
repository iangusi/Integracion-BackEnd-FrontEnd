package com.ipn.mx.escuela.dominio.repositorios;

import com.ipn.mx.escuela.dominio.entidades.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlumnoRepository extends JpaRepository<Alumno,Long> {
}
