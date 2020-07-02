import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Container9Component } from './lib1-container9.component';

describe('Lib1Container9Component', () => {
  let component: Lib1Container9Component;
  let fixture: ComponentFixture<Lib1Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
