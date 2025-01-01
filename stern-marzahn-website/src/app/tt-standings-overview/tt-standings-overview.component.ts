import { Component } from '@angular/core';
import { TtStandingComponent } from '../tt-standing/tt-standing.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tt-standings-overview',
  standalone: true,
  imports: [NgFor, TtStandingComponent],
  templateUrl: './tt-standings-overview.component.html',
  styleUrl: './tt-standings-overview.component.sass',
})
export class TtStandingsOverviewComponent {
  

  teams: Team[]

  constructor() {
    this.teams = [new Team("Herren 1", "https://bettv.tischtennislive.de/Ajax/Tischtennis/Tabelle_Mini.aspx?WettID=20028")]
  }

}

class Team {
  title: string
  url: string

  constructor(title: string, url: string) {
    this.title = title
    this.url = url
  }
}