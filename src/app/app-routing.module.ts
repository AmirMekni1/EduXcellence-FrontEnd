import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Accueil/main/main.component';
import { Page404Component } from './Éléments supplémentaires/page-404/page-404.component';

const routes: Routes = [
  { path: "Authentification", loadChildren: () => import("../app/Authentification/module-authentification/module-authentification.module").then((e) => e.ModuleAuthentificationModule) },
  { path: "Administrateur", loadChildren: () => import("../app/Administrateur/module-administrateur/module-administrateur.module").then((e) => e.ModuleAdministrateurModule) },
  { path: "Formateur", loadChildren: () => import("../app/Formateur/module-formateur/module-formateur.module").then((e) => e.ModuleFormateurModule) },
  { path : "Participant", loadChildren : () => import("../app/Participant/module-participant/module-participant.module").then((e)=> e.ModuleParticipantModule)},
  { path : "EduXcellence", loadChildren : () => import("../app/Éléments supplémentaires/elements-supplementaires/elements-supplementaires.module").then((e)=> e.ElementsSupplementairesModule)},
  { path: "", component: MainComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
