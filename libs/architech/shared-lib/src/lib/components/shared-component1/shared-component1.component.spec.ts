import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponent1Component } from './shared-component1.component';

describe('SharedComponent1Component', () => {
  let component: SharedComponent1Component;
  let fixture: ComponentFixture<SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedComponent1Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
