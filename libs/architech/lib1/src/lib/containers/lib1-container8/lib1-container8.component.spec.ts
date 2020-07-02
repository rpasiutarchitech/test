import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container8Component } from './lib1-container8.component';

describe('Lib1Container8Component', () => {
  let component: Lib1Container8Component;
  let fixture: ComponentFixture<Lib1Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
