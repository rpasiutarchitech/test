import { async, TestBed } from '@angular/core/testing';
import { WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule } from './web-icann-accountability-mechanisms-feature-accountability-index.module';

describe('WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule,
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(
      WebIcannAccountabilityMechanismsFeatureAccountabilityIndexModule
    ).toBeDefined();
  });
});
