import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container1Component } from './lib1-container1.component';

describe('Lib1Container1Component', () => {
  let component: Lib1Container1Component;
  let fixture: ComponentFixture<Lib1Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
