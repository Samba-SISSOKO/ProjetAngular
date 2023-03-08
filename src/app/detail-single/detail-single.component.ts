import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailJoueur } from '../models/DetailJoueur';
import { DetailService } from '../services/DetailService';

@Component({
  selector: 'app-detail-single',
  templateUrl: './detail-single.component.html',
  styleUrls: ['./detail-single.component.scss']
})
export class DetailSingleComponent implements OnInit {

  detailFoot$!: Observable<DetailJoueur>;
  constructor(private detailService: DetailService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const joueurId = +this.route.snapshot.params['id'];
    this.detailFoot$ = this.detailService.getJoueurById(joueurId);

  }

}
