import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  // userEmail!: string;
  constructor(private route: Router) { }

  ngOnInit(): void { }

  /* onSumitForm(form: NgForm) {
     console.log(form.value);
   } */

  onAddNewPlayer(): void {
    this.route.navigateByUrl('/create');

  }

}
