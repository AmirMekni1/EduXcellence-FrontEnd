import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFormateurRoutingModule } from './module-formateur-routing.module';
import { MesModulesComponent } from '../mes-modules/mes-modules.component';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { FileUploadModule } from 'primeng/fileupload';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from '../profile/profile.component';
import { ModifierProfileComponent } from '../profile/modifier-profile/modifier-profile.component';
import { ProgrammeComponent } from '../contenuDeFormation/programme/programme.component';
import { LienEvaluationComponent } from '../contenuDeFormation/lien-evaluation/lien-evaluation.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    MesModulesComponent,
    AjouterModuleComponent,
    ProfileComponent,
    ModifierProfileComponent,
    ProgrammeComponent,
    LienEvaluationComponent,
  ],
  imports: [
    CommonModule,
    ModuleFormateurRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FileUploadModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatDialogModule,
    ReactiveFormsModule,
    FileUploadModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class ModuleFormateurModule { }
