import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container3Component } from './lib1-container3.component';

describe('Lib1Container3Component', () => {
  let component: Lib1Container3Component;
  let fixture: ComponentFixture<Lib1Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
