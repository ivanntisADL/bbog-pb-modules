import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavDecoNewDirective, BdbNavPanelComponent } from './bdb-nav-panel.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [BdbNavPanelComponent, IconNavDecoNewDirective],
  exports:[BdbNavPanelComponent, IconNavDecoNewDirective]
})
export class BdbNavPanelModule { }
