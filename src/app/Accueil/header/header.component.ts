import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ServiceAuthentificationService } from '../../Authentification/Service/service-authentification.service';
import { NavigationEnd, Router } from '@angular/router';
import { ServiceParticipantService } from '../../Participant/Service-participant/service-participant.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnChanges, OnDestroy {

  private routerSubscription: Subscription | undefined;

token: any ;
  id: any;
  user: any;
  currentUrl: string | undefined;

constructor(private _service:ServiceAuthentificationService,private router:Router, private _serviceParticipant:ServiceParticipantService){
  this.token = localStorage.getItem('token');
}
  ngOnChanges(token: SimpleChanges): void {
    confirm('ok')
  }

SeDeconnecter(){
localStorage.clear()
const verif = confirm('Are you Sure ?')
if (verif) {
  window.location.reload()
this.router.navigate(["/"])
}
}

SeConnecter() {
  this.router.navigate(["/Authentification/EduXcellence"])
  }
  



ngOnInit() {
  this._serviceParticipant.RecupererId(localStorage.getItem("token")).subscribe((data:any)=>{
    this.id=data.id
    this.user=data.user
  })
console.log(this.user)
  this._service.data$.subscribe((data) => {
    this.token = data;
  });

  
  this.routerSubscription = this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.onRouteChange();
    }
  });

  this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    this.currentUrl = event.urlAfterRedirects;
    console.log('Current URL:', this.currentUrl);
  });
  
}
onRouteChange(): void {
  console.log('Route changed, reload the component logic here.');
  this.reloadComponent();
}

reloadComponent(): void {

if (localStorage.getItem('token') &&   localStorage.getItem('reload') ){
  window.location.reload()
  localStorage.removeItem('reload')
}
}

ngOnDestroy(): void {
  if (this.routerSubscription) {
    this.routerSubscription.unsubscribe();
  }
}



}
