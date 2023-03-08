import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailJoueur } from '../models/DetailJoueur';
import { DetailService } from '../services/DetailService';

@Component({
  selector: 'app-detail-controller',
  templateUrl: './detail-controller.component.html',
  styleUrls: ['./detail-controller.component.scss']
})
export class DetailControllerComponent implements OnInit {

  detailFoot$!: Observable<DetailJoueur[]>;

  constructor(private detailService: DetailService, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    this.detailFoot$ = this.detailService.getAllDetailJoueur();

  }


}
