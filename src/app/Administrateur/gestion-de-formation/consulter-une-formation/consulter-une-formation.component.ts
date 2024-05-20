import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AjouterUneFormationComponent } from '../ajouter-une-formation/ajouter-une-formation.component';
import { ModifierUneFormationComponent } from '../modifier-une-formation/modifier-une-formation.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { ServiceAdministrateurService } from '../../Service-administrateur/service-administrateur.service';

export interface UserData {
  idformation:any
  themeFormation: any;
  prix: any;
  datededebut: any;
  datedefin : any;
  affiche : any
}

@Component({
  selector: 'app-consulter-une-formation',
  templateUrl: './consulter-une-formation.component.html',
  styleUrl: './consulter-une-formation.component.css'
})
export class ConsulterUneFormationComponent  implements AfterViewInit {
  
  displayedColumns: string[] = ['themeFormation', 'prix', 'datededebut', 'datedefin','optiondeformation'];
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
messagesuccess: any=""
messageerror: any=""

  constructor(public dialog: MatDialog, private _service: ServiceAdministrateurService) {
    this.loadFormateurs();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(AjouterUneFormationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(x:any) {
    this._service.SetIDF(x)
    const dialogRef = this.dialog.open(ModifierUneFormationComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  loadFormateurs() {
    this._service.ConsulterLesFormation(localStorage.getItem('token')).subscribe((response: any) => {
      if (response.TableFormation) {
        this.dataSource.data = response.TableFormation.map((formation: any) => ({
          idformation:formation.idformation,
          themeFormation:formation.themeFormation,
          prix:formation.prix,
          datededebut:formation.datedebut,
          datedefin :formation.datefin,
          affiche : formation.affiche
        }));
      } else {
        this.dataSource.data = [];
        
      }
      console.log(this.dataSource.data)
    });
  }

  ActiverFormation(id:any){
    let formdata = new FormData()
    formdata.append('id',id)
    this._service.ActiverFormation(localStorage.getItem('token'),formdata).subscribe((response: any) => {
      if(response.Message=="Formation Activer"){
        this.messagesuccess=response.Message
        setTimeout(() => {
          this.messagesuccess=""
          window.location.reload();
        }, 2500);
  }else{
    this.messageerror=response.Message
    setTimeout(() => {
      this.messageerror=""
      }, 2500);
  }
})}


DesactiverFormation(id:any){
  let formdata = new FormData()
  formdata.append('id',id)
  this._service.DesactiverFormation(localStorage.getItem('token'),formdata).subscribe((response: any) => {
    if(response.Message=="Formation Desactiver"){
      this.messagesuccess=response.Message
      setTimeout(() => {
        this.messagesuccess=""
        window.location.reload();
      }, 2500);
}else{
  this.messageerror=response.Message
  setTimeout(() => {
    this.messageerror=""
    }, 2500);
}})}

}