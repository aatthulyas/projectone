import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

user=""
usname=""


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    if(localStorage.getItem("currentUsname")) 

    {this.user=JSON.parse(localStorage.getItem("currentUsname")|| "")
  }}

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      // alert("please log in")
      // this.router.navigateByUrl("")

    }
  }

  logout(){
    localStorage.removeItem("currentUsname")

    localStorage.removeItem("token")


    this.router.navigateByUrl("")
  }




}




