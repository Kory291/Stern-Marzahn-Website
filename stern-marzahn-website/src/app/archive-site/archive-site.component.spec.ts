import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveSiteComponent } from './archive-site.component';

describe('ArchiveSiteComponent', () => {
  let component: ArchiveSiteComponent;
  let fixture: ComponentFixture<ArchiveSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveSiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchiveSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
