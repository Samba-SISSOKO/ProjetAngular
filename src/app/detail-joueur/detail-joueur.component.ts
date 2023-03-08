import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailJoueur } from '../models/DetailJoueur';


@Component({
  selector: 'app-detail-joueur',
  templateUrl: './detail-joueur.component.html',
  styleUrls: ['./detail-joueur.component.scss']
})
export class DetailJoueurComponent implements OnInit {
  @Input() instanceDetail!: DetailJoueur;

  constructor() { }

  ngOnInit(): void {


  }



}
