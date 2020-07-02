import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container5Component } from './lib1-container5.component';

describe('Lib1Container5Component', () => {
  let component: Lib1Container5Component;
  let fixture: ComponentFixture<Lib1Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
