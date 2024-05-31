import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceFormateurService {
 
  id: any;

  constructor(private http:HttpClient) { }

  listerMesFormationFormateur(token: any, formdata: any) {
    const headers = new HttpHeaders().set('token', `${token}`);
  return this.http.post("http://localhost:8080/apiFormateur/listerMesFormationFormateur",formdata,{headers}); 
  }
  
  setX(x:any){
    this.id=x;
  }

  getX(){
    return this.id;
  }

  detailsFormationFormateur(formdata:any,token:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiFormateur/detailsFormationFormateur",formdata,{headers});
  }

   ajouterEvaluation(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiFormateur/ajouterEvaluation",formdata,{headers});
  }

  listerUneEvaluation(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiFormateur/listerUneEvaluation",formdata,{headers});
  }
  
}
