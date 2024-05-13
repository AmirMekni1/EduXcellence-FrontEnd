import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthentificationService {

  constructor(private http: HttpClient) { }

  Connection (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/login",formdata);
  }

  InscriptionParticipant (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/inscriptionParticipant",formdata);
  }

  ConnectionAdmin(formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/loginAdmin",formdata);
  }

  ConnectionFormateur (formdata:any){
    return this.http.post<String>("http://localhost:8080/ApiAuth/loginFormateur",formdata);
  }

  RecupererToken(){
    if(localStorage.getItem("Token")){
      return "";
    }else{
      return localStorage.getItem("Token");
    }
  }
  
}
