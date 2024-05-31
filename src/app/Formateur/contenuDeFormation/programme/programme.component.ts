import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LienEvaluationComponent } from '../lien-evaluation/lien-evaluation.component';
import { AjouterModuleComponent } from '../../ajouter-module/ajouter-module.component';
import { ServiceFormateurService } from '../../Service-formateur/service-formateur.service';
import { ServiceAdministrateurService } from '../../../Administrateur/Service-administrateur/service-administrateur.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrl: './programme.component.scss'
})
export class ProgrammeComponent implements OnInit {
  formation: any;
  themedeformation: any;
  Description: any;
  Prix: any;
  datedebut: any;
  datefin: any;
  evaluation: any;
  url: any;
  dateEvaluation: any;

  constructor(public dialog: MatDialog,private _service:ServiceFormateurService,private _serviceAdmin:ServiceAdministrateurService) {

  }

  ngOnInit(): void {
    let formdata = new FormData()
    formdata.append('id', this._service.getX())
    this._service.detailsFormationFormateur(formdata,localStorage.getItem('token')).subscribe((response:any)=>{
      if (response.Formation){
        this.themedeformation=response.Formation.themeFormation
        this.Description=response.Formation.desciption
        this.Prix=response.Formation.prix
        this.datedebut=this.formatDate(new Date(response.Formation.datedebut))
        this.datefin=this.formatDate(new Date(response.Formation.datefin))
      console.log(response.Formation)
    }})

    let formdata1 = new FormData()
    formdata1.append('formationId', this._service.getX())
    this._service.listerUneEvaluation(localStorage.getItem("token"),formdata1).subscribe((data:any)=>{
      this.evaluation=data.Evaluation
    })
  }

ajouterEvaluation() {
    const dialogRef = this.dialog.open(LienEvaluationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
     
    });
}
ajouterChapitre() {
  const dialogRef = this.dialog.open(AjouterModuleComponent);
  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);

  });
}

formatDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}



}
