import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailJoueur } from '../models/DetailJoueur';
import { FootballModel } from '../models/football.model';
import { FootballService } from '../services/FootballSevice';

@Component({
  selector: 'app-player-single',
  templateUrl: './player-single.component.html',
  styleUrls: ['./player-single.component.scss']
})
export class PlayerSingleComponent implements OnInit {


  instanceModel$!: Observable<FootballModel>;


  constructor(private footballService: FootballService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const joueurId = +this.route.snapshot.params['id'];
    this.instanceModel$ = this.footballService.getJoueurById(joueurId);


  }

}
