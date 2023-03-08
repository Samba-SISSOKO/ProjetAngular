import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailControllerComponent } from "./detail-controller/detail-controller.component";
import { DetailSingleComponent } from "./detail-single/detail-single.component";
import { FootballControllerComponent } from "./football-controller/football-controller.component";
import { NewPlayerComponent } from "./new-player/new-player.component";
import { PageAccueilComponent } from "./page-accueil/page-accueil.component";
import { PlayerSingleComponent } from "./player-single/player-single.component";



const routes: Routes = [
    { path: 'joueur/:id', component: PlayerSingleComponent },
    { path: 'joueur', component: FootballControllerComponent },
    { path: 'detail/:id', component: DetailSingleComponent },
    { path: 'create', component: NewPlayerComponent },
    { path: '', component: PageAccueilComponent }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {


}