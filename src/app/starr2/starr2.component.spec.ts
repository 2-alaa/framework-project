import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starr2Component } from './starr2.component';

describe('Starr2Component', () => {
  let component: Starr2Component;
  let fixture: ComponentFixture<Starr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starr2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Starr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
