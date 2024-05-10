import { Component } from '@angular/core';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-participant-s',
  templateUrl: './participant-s.component.html',
  styleUrl: './participant-s.component.css'
})
export class ParticipantSComponent {

  constructor( private _service:ServiceAuthentificationService,private router:Router){

  }
motdepasse: any;
email: any;

connexion() {
   let formdata = new FormData();
   formdata.append("email",this.email);
   formdata.append("motDePasse",this.motdepasse);
 this._service.Connection(formdata).subscribe((response:any)=>{
    localStorage.setItem("token", response.Token);
    this.router.navigate(['/']);
  },(error:any)=>{
    alert(error)
  })}
}
