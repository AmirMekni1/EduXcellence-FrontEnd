import { Component, OnInit } from '@angular/core';
import { ServiceParticipantService } from '../Service-participant/service-participant.service';

@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrl: './mes-offres.component.scss'
})
export class MesOffresComponent implements OnInit {

  constructor(private _service : ServiceParticipantService){}

  ngOnInit(): void {
    
    }

}
