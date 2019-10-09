import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbInputModule, NbCardModule, NbButtonModule, NbIconModule,
  NbCheckboxModule, NbProgressBarModule
} from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NbProgressBarModule
  ],
  exports: [NbInputModule,
    NbCardModule, NbButtonModule, NbIconModule,
    NbCheckboxModule,
    NbProgressBarModule]
})
export class SharedModule { }
