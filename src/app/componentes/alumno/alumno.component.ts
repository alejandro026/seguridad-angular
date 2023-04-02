import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumnos: Alumno[];

  constructor(
    private alumnoService:AlumnoService
  ){

  }

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(){
    this.alumnoService.getAlumnos().subscribe(data=>{
      this.alumnos = data;
      console.log(this.alumnos);
    });
  }

}
