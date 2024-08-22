import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliperComponent } from './sliper.component';

describe('SliperComponent', () => {
  let component: SliperComponent;
  let fixture: ComponentFixture<SliperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
