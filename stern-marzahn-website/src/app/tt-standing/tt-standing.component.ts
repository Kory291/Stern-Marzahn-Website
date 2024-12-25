import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-tt-standing',
  standalone: true,
  imports: [],
  templateUrl: './tt-standing.component.html',
  styleUrl: './tt-standing.component.sass',
})
@Injectable()
export class TtStandingComponent {

  title: string
  url: string

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}