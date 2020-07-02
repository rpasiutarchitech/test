import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container10Component } from './lib1-container10.component';

describe('Lib1Container10Component', () => {
  let component: Lib1Container10Component;
  let fixture: ComponentFixture<Lib1Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
