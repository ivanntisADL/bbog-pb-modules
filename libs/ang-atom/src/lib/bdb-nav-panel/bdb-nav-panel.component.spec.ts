import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdbNavPanelComponent } from './bdb-nav-panel.component';

describe('BdbNavPanelComponent', () => {
  let component: BdbNavPanelComponent;
  let fixture: ComponentFixture<BdbNavPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdbNavPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdbNavPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
