import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtStandingComponent } from './tt-standing.component';

describe('TtStandingComponent', () => {
  let component: TtStandingComponent;
  let fixture: ComponentFixture<TtStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TtStandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
