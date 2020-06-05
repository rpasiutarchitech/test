import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest4ShellModule } from './web-icann-test4-shell.module';

describe('WebIcannTest4ShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest4ShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest4ShellModule).toBeDefined();
  });
});
