import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapbox2Component } from './mapbox2.component';

describe('Mapbox2Component', () => {
  let component: Mapbox2Component;
  let fixture: ComponentFixture<Mapbox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mapbox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
