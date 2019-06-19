import { async, TestBed } from '@angular/core/testing';
import { AngAtomModule } from './ang-atom.module';

describe('AngAtomModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AngAtomModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AngAtomModule).toBeDefined();
  });
});
