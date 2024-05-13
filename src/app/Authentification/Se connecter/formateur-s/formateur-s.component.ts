import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentificationService } from '../../Service/service-authentification.service';

@Component({
  selector: 'app-formateur-s',
  templateUrl: './formateur-s.component.html',
  styleUrl: './formateur-s.component.css'
})
export class FormateurSComponent {
ConnexionFormateur() {
throw new Error('Method not implemented.');
}
Matricule: any;
motdepasse: any;
messageerror: any;
messagealert: any;
messagesuccess: any;

constructor(private _service:ServiceAuthentificationService,private router:Router){

}

closeAlert() {
  this.messageerror  = false; 
}

isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}



}
