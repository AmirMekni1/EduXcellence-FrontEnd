import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceAuthentificationService } from '../../Authentification/Service/service-authentification.service';
import { Router } from '@angular/router';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnChanges {

token: any ;
  id: any;
  user: any;

constructor(private _service:ServiceAuthentificationService,private router:Router, private _serviceParticipant:ServiceParticipantService){
  this.token = localStorage.getItem('token');
}
  ngOnChanges(token: SimpleChanges): void {
    confirm('ok')
  }

SeDeconnecter(){
localStorage.clear()
const verif = confirm('Are you Sure ?')
if (verif) {
  window.location.reload()
this.router.navigate(["/"])
}
}

SeConnecter() {
  this.router.navigate(["/Authentification/EduXcellence"])
  }
  



ngOnInit() {
  this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
    this.id=data.id
    this.user=data.user
  })
console.log(this.user)
  this._service.data$.subscribe((data) => {
    this.token = data;
  });
  
  
}



}
