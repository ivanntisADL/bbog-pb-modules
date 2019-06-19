import { async, TestBed } from '@angular/core/testing';
import { ExamplesModModule } from './examples-mod.module';

describe('ExamplesModModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ExamplesModModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ExamplesModModule).toBeDefined();
  });
});
