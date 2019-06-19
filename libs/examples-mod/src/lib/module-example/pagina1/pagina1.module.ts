import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina1Component } from './pagina1.component';
import { Pagina2Component } from '../pagina2/pagina2.component';
import { AngAtomModule } from 'ang-atom';

@NgModule({
    declarations: [
        Pagina1Component
    ],
    imports: [
      IonicPageModule.forChild(Pagina1Component),
      AngAtomModule
    ],
    entryComponents: [
      Pagina2Component
    ],
    exports: [
      Pagina1Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

  })
  export class Pagina1ComponentModule {
    
  }