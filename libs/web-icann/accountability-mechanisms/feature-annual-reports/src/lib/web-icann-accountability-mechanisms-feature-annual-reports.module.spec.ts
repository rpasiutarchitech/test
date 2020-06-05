import { async, TestBed } from '@angular/core/testing';
import { WebIcannAccountabilityMechanismsFeatureAnnualReportsModule } from './web-icann-accountability-mechanisms-feature-annual-reports.module';

describe('WebIcannAccountabilityMechanismsFeatureAnnualReportsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannAccountabilityMechanismsFeatureAnnualReportsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(
      WebIcannAccountabilityMechanismsFeatureAnnualReportsModule
    ).toBeDefined();
  });
});
