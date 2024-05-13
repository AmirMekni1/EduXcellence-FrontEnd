import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceAuthentificationService } from './Authentification/Service/service-authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EduXcellence';
Schema: any;
  token: any;

  constructor(private activatedRoute: ActivatedRoute, private _service:ServiceAuthentificationService) {
    this.token = _service.RecupererToken() ;
      this.Schema = this.activatedRoute.snapshot.url[0].path;
      console.log(this.Schema)
    }
  }
  


