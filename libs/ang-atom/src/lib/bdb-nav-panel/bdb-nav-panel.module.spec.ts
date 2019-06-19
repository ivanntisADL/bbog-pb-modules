import { BdbNavPanelModule } from './bdb-nav-panel.module';

describe('BdbNavPanelModule', () => {
  let bdbNavPanelModule: BdbNavPanelModule;

  beforeEach(() => {
    bdbNavPanelModule = new BdbNavPanelModule();
  });

  it('should create an instance', () => {
    expect(bdbNavPanelModule).toBeTruthy();
  });
});
