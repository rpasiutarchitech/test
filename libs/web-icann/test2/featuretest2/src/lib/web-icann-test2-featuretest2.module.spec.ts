import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest2Featuretest2Module } from './web-icann-test2-featuretest2.module';

describe('WebIcannTest2Featuretest2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest2Featuretest2Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest2Featuretest2Module).toBeDefined();
  });
});
