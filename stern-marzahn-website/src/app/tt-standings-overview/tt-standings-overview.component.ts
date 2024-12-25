import { Component } from '@angular/core';
import { TtStandingComponent } from '../tt-standing/tt-standing.component';

@Component({
  selector: 'app-tt-standings-overview',
  standalone: true,
  imports: [],
  templateUrl: './tt-standings-overview.component.html',
  styleUrl: './tt-standings-overview.component.sass',
  providers: [TtStandingComponent]
})
export class TtStandingsOverviewComponent {

  teams: TtStandingComponent[]

  constructor() {
    this.teams = [new TtStandingComponent("Herren 3", "https://bettv.tischtennislive.de/Ajax/Tischtennis/Tabelle_Mini.aspx?WettID=19978")];
  }

}
