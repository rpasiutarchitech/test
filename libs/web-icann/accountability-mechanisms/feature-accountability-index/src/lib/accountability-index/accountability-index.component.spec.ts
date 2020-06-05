import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountabilityIndexComponent } from './accountability-index.component';

describe('AccountabilityIndexComponent', () => {
  let component: AccountabilityIndexComponent;
  let fixture: ComponentFixture<AccountabilityIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountabilityIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountabilityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
