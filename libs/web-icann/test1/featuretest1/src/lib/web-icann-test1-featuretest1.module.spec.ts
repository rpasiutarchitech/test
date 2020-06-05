import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest1Featuretest1Module } from './web-icann-test1-featuretest1.module';

describe('WebIcannTest1Featuretest1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest1Featuretest1Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest1Featuretest1Module).toBeDefined();
  });
});
