import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container4Component } from './lib1-container4.component';

describe('Lib1Container4Component', () => {
  let component: Lib1Container4Component;
  let fixture: ComponentFixture<Lib1Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
