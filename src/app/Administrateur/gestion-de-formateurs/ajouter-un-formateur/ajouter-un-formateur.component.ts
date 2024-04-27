import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../modifier-formateur/modifier-formateur.component';
import { strongPasswordValidator } from '../modifier-formateur/strongPasswordValidator';

@Component({
  selector: 'app-ajouter-un-formateur',
  templateUrl: './ajouter-un-formateur.component.html',
  styleUrl: './ajouter-un-formateur.component.css'
})
export class AjouterUnFormateurComponent {
  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  motdepasseFormControl = new FormControl('',[Validators.required, Validators.minLength(10) ,strongPasswordValidator()]);
  telephoneFormControl = new FormControl('', [Validators.required, strongPasswordValidator(),Validators.minLength(8)]);
  photoFormControl = new FormControl('', [Validators.required, Validators.email]);
  cvFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  prenomFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();


}
