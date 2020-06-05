import { async, TestBed } from '@angular/core/testing';
import { WebIcannAccountabilityMechanismsShellModule } from './web-icann-accountability-mechanisms-shell.module';

describe('WebIcannAccountabilityMechanismsShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannAccountabilityMechanismsShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannAccountabilityMechanismsShellModule).toBeDefined();
  });
});
