import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest10Featuretest10Module } from './web-icann-test10-featuretest10.module';

describe('WebIcannTest10Featuretest10Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest10Featuretest10Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest10Featuretest10Module).toBeDefined();
  });
});
