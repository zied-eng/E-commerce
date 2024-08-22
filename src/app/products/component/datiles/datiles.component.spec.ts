import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatilesComponent } from './datiles.component';

describe('DatilesComponent', () => {
  let component: DatilesComponent;
  let fixture: ComponentFixture<DatilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
