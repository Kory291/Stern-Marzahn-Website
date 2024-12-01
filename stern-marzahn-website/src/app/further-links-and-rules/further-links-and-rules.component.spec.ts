import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherLinksAndRulesComponent } from './further-links-and-rules.component';

describe('FurtherLinksAndRulesComponent', () => {
  let component: FurtherLinksAndRulesComponent;
  let fixture: ComponentFixture<FurtherLinksAndRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurtherLinksAndRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FurtherLinksAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
