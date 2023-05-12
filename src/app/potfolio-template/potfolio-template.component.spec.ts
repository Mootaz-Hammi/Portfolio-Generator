import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotfolioTemplateComponent } from './potfolio-template.component';

describe('PotfolioTemplateComponent', () => {
  let component: PotfolioTemplateComponent;
  let fixture: ComponentFixture<PotfolioTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotfolioTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotfolioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
