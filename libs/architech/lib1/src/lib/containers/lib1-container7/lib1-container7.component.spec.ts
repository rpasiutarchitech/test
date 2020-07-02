import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container7Component } from './lib1-container7.component';

describe('Lib1Container7Component', () => {
  let component: Lib1Container7Component;
  let fixture: ComponentFixture<Lib1Container7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
