import { async, TestBed } from '@angular/core/testing';
import { WebIcannDataProtectionShellModule } from './web-icann-data-protection-shell.module';

describe('WebIcannDataProtectionShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannDataProtectionShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannDataProtectionShellModule).toBeDefined();
  });
});
