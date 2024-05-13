import { Component } from '@angular/core';
import { ServiceAuthentificationService } from '../../Authentification/Service/service-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

token: any = "";
constructor(private _service:ServiceAuthentificationService,private router:Router){
  this.token=_service.RecupererToken();
}

SeDeconnecter() {
localStorage.clear();
this.router.navigate(["/"])
}


}
