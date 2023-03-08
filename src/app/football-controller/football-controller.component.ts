import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { DetailJoueur } from '../models/DetailJoueur';
import { FootballModel } from '../models/football.model';
import { FootballService } from '../services/FootballSevice';

@Component({
  selector: 'app-football-controller',
  templateUrl: './football-controller.component.html',
  styleUrls: ['./football-controller.component.scss']
})
export class FootballControllerComponent implements OnInit {

  //footModel!: FootballModel[];

  // Créer un Obsevable qui émet des tableaux des Joueurs
  footModel$!: Observable<FootballModel[]>;


  constructor(private serviceModel: FootballService, private route: Router) {

  }

  ngOnInit(): void {

    this.footModel$ = this.serviceModel.getAllJoueur();
  }
  /*

  playerById(): void{
    const PlayerById = this.route.snapshot.params['id'];
    this.footModel$ = this.serviceModel.getJoueurById(this.playerById);


  }
  */


}
