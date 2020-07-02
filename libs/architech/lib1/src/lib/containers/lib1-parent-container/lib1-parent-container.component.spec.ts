import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1ParentContainerComponent } from './lib1-parent-container.component';

describe('Lib1ParentContainerComponent', () => {
  let component: Lib1ParentContainerComponent;
  let fixture: ComponentFixture<Lib1ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib1ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
