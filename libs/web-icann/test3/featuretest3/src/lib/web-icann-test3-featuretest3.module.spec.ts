import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest3Featuretest3Module } from './web-icann-test3-featuretest3.module';

describe('WebIcannTest3Featuretest3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest3Featuretest3Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest3Featuretest3Module).toBeDefined();
  });
});
