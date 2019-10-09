import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule
  ],
  exports: [NbInputModule, NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule]
})
export class SharedModule { }
