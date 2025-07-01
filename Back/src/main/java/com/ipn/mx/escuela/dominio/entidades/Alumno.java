package com.ipn.mx.escuela.dominio.entidades;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="Alumno")
public class Alumno {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idAlumno;

  @Getter
  @NotBlank(message = "Debe contener un valor")
  @Size(min = 4, max = 50, message = "El valor debe estar entre 4 y 50")
  @Column(name="nombre", nullable=false, length = 50)
  private String nombreAlumno;

  @Size(min = 4, max = 50, message = "El valor debe estar entre 4 y 50")
  @Column(name="paterno", nullable=false, length = 50)
  private String paternoAlumno;

  @Size(min = 4, max = 50, message = "El valor debe estar entre 4 y 50")
  @Column(name="materno", nullable=false, length = 50)
  private String maternoAlumno;

  @Email(message = "Escriba un correo válido")
  @Size(min = 4, max = 150, message = "El valor debe estar entre 4 y 150")
  @Column(name="correo", nullable=false, length = 150)
  private String correoAlumno;

}
