import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest4Featuretest4Module } from './web-icann-test4-featuretest4.module';

describe('WebIcannTest4Featuretest4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest4Featuretest4Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest4Featuretest4Module).toBeDefined();
  });
});
