import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BdbNavPanelModule } from './bdb-nav-panel/bdb-nav-panel.module';
@NgModule({
  imports: [CommonModule, BdbNavPanelModule ],
  exports: [BdbNavPanelModule],
  declarations: []
})
export class AngAtomModule {}
