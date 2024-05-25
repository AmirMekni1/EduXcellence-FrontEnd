import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { InscriptionAuCoursComponent } from '../inscription-au-cours/inscription-au-cours.component';
import { MesOffresComponent } from '../mes-offres/mes-offres.component';
import { DetaillsDesOffresComponent } from '../mes-offres/detaills-des-offres/detaills-des-offres.component';

const routes: Routes = [
  {path : "Profile" , component : ProfileComponent},
  {path : "Inscription&au&cours" , component : InscriptionAuCoursComponent},
  {path : "MesFormation" , children :[
    {path : "Cartes" , component : MesOffresComponent},
    {path : "Formation" , component : DetaillsDesOffresComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleParticipantRoutingModule { }
