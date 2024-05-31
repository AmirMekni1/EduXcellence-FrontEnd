import { Component } from '@angular/core';

@Component({
  selector: 'app-ajouter-module',
  templateUrl: './ajouter-module.component.html',
  styleUrls: ['./ajouter-module.component.scss']
})
export class AjouterModuleComponent {
  selectedFiles: any[] = [];

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    console.log('Selected files:', this.selectedFiles); // Débogage
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
    console.log('Files after removal:', this.selectedFiles); // Débogage
  }
}
