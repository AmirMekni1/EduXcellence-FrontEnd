import { Component } from '@angular/core';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';
import { ServiceParticipantService } from '../../Service-participant/service-participant.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detaills-des-offres',
  templateUrl: './detaills-des-offres.component.html',
  styleUrl: './detaills-des-offres.component.scss'
})
export class DetaillsDesOffresComponent {
  token: string | null | undefined;
  id: any;
  user: any;


  constructor(private _service:ServiceAdministrateurService,private _serviceParticipant:ServiceParticipantService,public dialogRef: MatDialogRef<DetaillsDesOffresComponent> , private router:Router){}


  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this._service.ListerUnSeulFormation(this._service.getIDF(),localStorage.getItem("token")).subscribe((response:any)=>{
      console.log(response)
      this.DD=this.formatDate(new Date(response.Formation.datedebut));
      this.DF=this.formatDate(new Date(response.Formation.datefin));
      this.UneFormation=response.Formation
    })

    this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
      this.id=data.id
      this.user=data.user
    })

  }
  UneFormation:any
  DD:any
  DF:any

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  }

 
}
