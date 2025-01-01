import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tt-standing',
  standalone: true,
  imports: [],
  templateUrl: './tt-standing.component.html',
  styleUrl: './tt-standing.component.sass',
})
export class TtStandingComponent {

  team_title = input<string>("");
  iframe_url = input<string>("");

  constructor() {
    console.log("team_title: " + this.team_title);
    console.log("iframe_url: " + this.iframe_url);
  }
}