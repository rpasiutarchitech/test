import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container6Component } from './lib1-container6.component';

describe('Lib1Container6Component', () => {
  let component: Lib1Container6Component;
  let fixture: ComponentFixture<Lib1Container6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
