import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pagina2Component } from './pagina2.component';
@NgModule({
    declarations: [
        Pagina2Component
    ],
    imports: [
      IonicPageModule.forChild(Pagina2Component),
    ],
    exports: [
      Pagina2Component
    ]
  
  })
  export class Pagina2ComponentModule {
    
  }