import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent {

ID: any;
motdepasse: any;

essagesuccess: any;
messagealert: any;
messageerror: any;
messagesuccess: any;

constructor(private _service:ServiceAuthentificationService,private router:Router){

}

closeAlert() {
  this.messageerror  = false; 
}

isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

ConnexionAdministrateur() {
let formdata = new FormData();
formdata.append('ID', this.ID);
formdata.append("MotDePasse",this.motdepasse)
this._service.ConnectionAdmin(formdata).subscribe((response:any)=>{
  if(response.Message == "Invalid email or password"){
    setTimeout(() => {
     this.messageerror = response.Message; 
    }, 2500);
    
  }else{
    setTimeout(() => {
      this.messagesuccess = response.Message;
    }, 2500);
    this.router.navigate(["/Administrateur/Dashboard"])
  }
})
}
}
