import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDErreurDeConnexionComponent } from '../page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { DetaillsDesOffresComponent } from '../../Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { AProposComponent } from '../a-propos/a-propos.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
  { path: "404", component: PageDErreurDeConnexionComponent },
  { path: "DetailsOffres", component: DetaillsDesOffresComponent },
  {path:"Propos", component:AProposComponent},
  {path:"Contact", component:ContactComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsSupplementairesRoutingModule { }
