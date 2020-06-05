import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest1ShellModule } from './web-icann-test1-shell.module';

describe('WebIcannTest1ShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest1ShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest1ShellModule).toBeDefined();
  });
});
