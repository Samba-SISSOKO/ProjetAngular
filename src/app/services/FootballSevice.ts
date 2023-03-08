import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FootballModel } from "../models/football.model";


@Injectable({
    providedIn: 'root'
})
export class FootballService {

    constructor(private http: HttpClient) { }


    getAllJoueur(): Observable<FootballModel[]> {
        return this.http.get<FootballModel[]>('http://localhost:3000/joueurs');
    }


    addPlayer(formValue: { nom: string, image: string, poste: string, club: string, salaire: number }): Observable<FootballModel> {

        return this.getAllJoueur().pipe(
            map(foot => [...foot].sort((a, b) => a.id - b.id)),
            map(sorteFoot => sorteFoot[sorteFoot.length - 1]),
            map(footPrevious => ({
                ...formValue,
                id: footPrevious.id + 1
            })),

            switchMap(newPlayer => this.http.post<FootballModel>('http://localhost:3000/joueurs', newPlayer)

            )
        );



    }

    getJoueurById(id: number): Observable<FootballModel> {
        return this.http.get<FootballModel>(`http://localhost:3000/joueurs/${id}`);

    }




}