import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbInputModule, NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  exports: [NbInputModule, NbCardModule, NbButtonModule, NbIconModule, NbCheckboxModule, FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
