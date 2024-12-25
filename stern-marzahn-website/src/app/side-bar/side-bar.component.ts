import { Component } from '@angular/core';
import { TtStandingsOverviewComponent } from '../tt-standings-overview/tt-standings-overview.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [TtStandingsOverviewComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.sass',
})
export class SideBarComponent {}
