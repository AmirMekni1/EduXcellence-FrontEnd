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
}
