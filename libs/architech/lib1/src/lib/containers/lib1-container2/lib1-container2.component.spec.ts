import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container2Component } from './lib1-container2.component';

describe('Lib1Container2Component', () => {
  let component: Lib1Container2Component;
  let fixture: ComponentFixture<Lib1Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
