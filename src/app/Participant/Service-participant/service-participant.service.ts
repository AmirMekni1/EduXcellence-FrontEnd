import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'highcharts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceParticipantService implements OnInit {
  
  currentUrl: string | undefined;
  x: any;
 
  
  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
  
  InscriptionAuCours(token:any,formdata:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/InscriptionAuFormation",formdata,{headers});
  }
  
  RecupererId(token: any) {
    let formdata = new FormData();
    formdata.append('token', token);
    return this.http.post("http://localhost:8080/apiParticipant/RecupererId",formdata);
  }
  
  listerLesFormationAffecterAParticipant(token:any,form:any){
    const headers = new HttpHeaders().set('token', `${token}`);
    return this.http.post("http://localhost:8080/apiParticipant/listerLesFormationAffecterAParticipant",form,{headers});
  }

  getIDF(){
    return this.x;
  }
  SetIDF(id:any){
    this.x=id;
  }
}
