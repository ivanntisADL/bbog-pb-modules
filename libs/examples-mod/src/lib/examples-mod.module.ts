import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina2ComponentModule } from './module-example/pagina2/pagina2.module';
import { Pagina1ComponentModule } from './module-example/pagina1/pagina1.module';

@NgModule({

  imports: [CommonModule,
    Pagina1ComponentModule,
    Pagina2ComponentModule
  ],
  declarations: [],
  exports: [Pagina1ComponentModule, Pagina2ComponentModule],

})
export class ExamplesModModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExamplesModModule,
      providers: []
    };
  }
}
