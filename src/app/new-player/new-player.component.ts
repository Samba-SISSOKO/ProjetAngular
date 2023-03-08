import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FootballModel } from '../models/football.model';
import { FootballService } from '../services/FootballSevice';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.scss']
})
export class NewPlayerComponent implements OnInit {

  playerForm!: FormGroup;
  playerFormObservable$!: Observable<FootballModel>;
  urlRegx!: RegExp;

  constructor(private formBuilder: FormBuilder, private footballService: FootballService, private router: Router) { }

  ngOnInit(): void {
    this.urlRegx = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.playerForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      image: [null, [Validators.required, Validators.pattern(this.urlRegx)]],
      poste: [null, [Validators.required]],
      club: [null, [Validators.required]],
      salaire: [null, [Validators.required]]
    }, {
      updateOn: 'blur'
    });

    this.playerFormObservable$ = this.playerForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue
      }))
    );
  }



  onSumitForm() {
    this.footballService.addPlayer(this.playerForm.value).pipe(
      tap(() => this.router.navigateByUrl('/joueur'))
    ).subscribe();

  }




}
