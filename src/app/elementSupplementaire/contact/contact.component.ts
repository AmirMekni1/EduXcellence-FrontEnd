import { Component, OnInit } from '@angular/core';
import { ErviceelementsupplementaireService } from '../serviceelementsupplementaire/erviceelementsupplementaire.service';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

Contenu: any;
Sujet: any;
Email: any;
  token: any;


constructor(private _service:ErviceelementsupplementaireService,private _serviceparticipant:ServiceParticipantService){}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ;
      this._serviceparticipant.RecupererId(this.token).subscribe((data:any)=>{
  this.Email=data.email
  console.log(this.Email)
})

  }

Envoyer() {
  if (this.token){
    if (!this.Sujet){
      alert("Veuillez remplir le champ de sujet");
    }else if(!this.Contenu){
      alert("Veuillez remplir le champ de contenu");
    }else{
      let formdata = new FormData()
      formdata.append('Contenu', this.Contenu);
      formdata.append('Sujet', this.Sujet);
      formdata.append('from', this.Email);
      this._service.contactAdmin(formdata).subscribe(()=>{
        alert("Message envoyé avec succès");
      })
    }
  }else{
    if (!this.Email){
      alert("Veuillez remplir le champ de sujet");
    }else if(!this.Sujet){
      alert("Veuillez remplir le champ de contenu");
    }else if(!this.Contenu){

    }else{
      let formdata = new FormData()
      formdata.append('Contenu', this.Contenu);
      formdata.append('Sujet', this.Sujet);
      formdata.append('from', this.Email);
      this._service.contactAdmin(formdata).subscribe(()=>{
        alert("Message envoyé avec succès");
      })
    }

  }
    
}


}
