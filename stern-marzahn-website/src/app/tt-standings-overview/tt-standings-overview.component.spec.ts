import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtStandingsOverviewComponent } from './tt-standings-overview.component';

describe('TtStandingsOverviewComponent', () => {
  let component: TtStandingsOverviewComponent;
  let fixture: ComponentFixture<TtStandingsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TtStandingsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TtStandingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
