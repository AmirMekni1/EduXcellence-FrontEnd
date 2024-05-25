import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'highcharts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService {
 
  
  constructor(private http:HttpClient) { }
  
  InscriptionAuCours(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/InscriptionAuFormation",formdata,{headers});
  }
  
  RecupererId(token: any) {
    let formdata = new FormData();
    formdata.append('token', token);
    return this.http.post("http://localhost:8080/apiParticipant/RecupererId",formdata);
  }
}
