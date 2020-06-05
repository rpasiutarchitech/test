import { async, TestBed } from '@angular/core/testing';
import { WebIcannDataProtectionFeatureDataProtectionModule } from './web-icann-data-protection-feature-data-protection.module';

describe('WebIcannDataProtectionFeatureDataProtectionModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannDataProtectionFeatureDataProtectionModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannDataProtectionFeatureDataProtectionModule).toBeDefined();
  });
});
