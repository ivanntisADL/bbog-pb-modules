import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ExamplesModModule } from '@bbog-pb-modules/examples-mod';
import { AngAtomModule } from '@bbog-pb-modules/ang-atom';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), AngAtomModule, ExamplesModModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
