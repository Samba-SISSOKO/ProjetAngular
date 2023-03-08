import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailJoueur } from '../models/DetailJoueur';
import { FootballModel } from '../models/football.model';
import { PlayerSingleComponent } from '../player-single/player-single.component';
import { DetailService } from '../services/DetailService';
import { FootballService } from '../services/FootballSevice';


@Component({
  selector: 'app-foot-ball',
  templateUrl: './foot-ball.component.html',
  styleUrls: ['./foot-ball.component.scss']
})
export class FootBallComponent implements OnInit {

  @Input() instanceModel!: FootballModel;


  constructor(private router: Router, footService: FootballService) {

  }

  ngOnInit(): void { }

  playerById(): void {
    this.router.navigateByUrl(`detail/${this.instanceModel.id}`)
  }


}
