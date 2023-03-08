import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FootBallComponent } from './foot-ball/foot-ball.component';
import { DetailJoueurComponent } from './detail-joueur/detail-joueur.component';
import { FootballControllerComponent } from './football-controller/football-controller.component';
import { DetailControllerComponent } from './detail-controller/detail-controller.component';
import { PlayerSingleComponent } from './player-single/player-single.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPlayerComponent } from './new-player/new-player.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailSingleComponent } from './detail-single/detail-single.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    FootBallComponent,
    DetailJoueurComponent,
    FootballControllerComponent,
    DetailControllerComponent,
    PlayerSingleComponent,
    PageAccueilComponent,
    NewPlayerComponent,
    DetailSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

    //httpInterceptorProviders
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
