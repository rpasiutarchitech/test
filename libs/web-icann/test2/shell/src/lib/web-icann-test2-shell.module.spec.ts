import { async, TestBed } from '@angular/core/testing';
import { WebIcannTest2ShellModule } from './web-icann-test2-shell.module';

describe('WebIcannTest2ShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebIcannTest2ShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebIcannTest2ShellModule).toBeDefined();
  });
});
