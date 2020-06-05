import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest3ShellModule } from './web-icann-test3-shell.module';

describe('WebIcannTest3ShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest3ShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest3ShellModule).toBeDefined();
  });
});
