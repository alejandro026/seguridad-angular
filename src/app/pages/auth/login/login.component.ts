import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseForm } from 'src/app/shared/utils/base-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm= this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required, Validators.minLength(2)]
  })

  constructor(private fb:FormBuilder,
    public baseForm: BaseForm,
    private router: Router){
  }

  ngOnInit(): void{

  }

  onLogin(){
    console.log("No funciona")
    this.router.navigate(['home']);
  }



}
