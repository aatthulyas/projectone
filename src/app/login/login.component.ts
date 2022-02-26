
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variable declaration
  aim="welcome  "
  usname=""
  pswd=""
  loginForm=this.fb.group({
    usname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]] ,
    
  })
  
  

  // DEPENDENCY INJECTION
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder)
   {

    }

  ngOnInit(): void {
  }

login(){
  var usname=this.loginForm.value.usname
  var password = this.loginForm.value.pswd
  let result=this.usname
  if(this.loginForm.valid){
    //async
    this.ds.login(usname,password)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        localStorage.setItem("currentUsname",JSON.stringify(result.currentUsname))
        localStorage.setItem("token",JSON.stringify(result.token))

        
        this.router.navigateByUrl('dashboard')
      }
    },(result)=>{
      alert(result.error.message)
      
    })
  }

else{
  alert("invalid form")
}}



 }
