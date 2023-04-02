import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public alumno: Alumno= new Alumno();
  public errores: string[];

  constructor(
    private alumnoService:AlumnoService,
    private router:Router
  ){

  }

  ngOnInit(): void {

  }

  guardar(): void {
    console.log(this.alumno)
    this.alumnoService.guardarAlumno(this.alumno).subscribe({
      next: alumnos =>{
        this.router.navigate(["/alumnos"]);
        Swal.fire("Alumno nuevo", `El alumno: ${alumnos.nombre} se guardo con exito`, "success")
      }, error:e=>{
        this.errores= e.error.errors as string[];
        console.log(this.errores);
      }
    })
  }

}
