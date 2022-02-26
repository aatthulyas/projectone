import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUsname:any



// sample data giving 



  users:any={
    1000:{usame:"Neil",password:"1000",search:[]},
    1001:{usame:"Ram",password:"1001",search:[]},
    1002:{usame:"Ammu",password:"1002",search:[]}
  }
  constructor(private http:HttpClient) { 
    // this.getDetails()
  }
  
getSearch(usname:any){
  const data={

  }
  return this.http.post('http://localhost:3000/getSearch/'+usname,data,this.getOptions())


  }

  
  
  login(usname:any,password:any){
    const data={
      usname,password
    }
    //async
    return this.http.post('http://localhost:3000/login',data)
  
  }
  

  //add token t0 request header
  getOptions(){
    const token=JSON.parse(localStorage.getItem("token")||'')
    let headers=new HttpHeaders()
    if(token){
    headers=headers.append('x-access-token',token)
    options.headers=headers}
  return options

  }
  

}
