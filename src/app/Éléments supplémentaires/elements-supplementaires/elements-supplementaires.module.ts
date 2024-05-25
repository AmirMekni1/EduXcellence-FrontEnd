import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsSupplementairesRoutingModule } from './elements-supplementaires-routing.module';
import { PageHelpComponent } from '../page-help/page-help.component';
import { DetaillsDesOffresComponent } from '../../Accueil/les-offres/detaills-des-offres/detaills-des-offres.component';
import { AProposComponent } from '../a-propos/a-propos.component';
import { ContactComponent } from '../contact/contact.component';
import { PageDErreurDeConnexionComponent } from '../page-d-erreur-de-connexion/page-d-erreur-de-connexion.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    PageHelpComponent,
    DetaillsDesOffresComponent,
    AProposComponent,
    ContactComponent,
    PageDErreurDeConnexionComponent,
  ],
  imports: [
    CommonModule,
    ElementsSupplementairesRoutingModule,
    BrowserModule,
    MatProgressBarModule,
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    HttpClientModule,
    MenubarModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideAnimations()
  ],
})
export class ElementsSupplementairesModule { }
