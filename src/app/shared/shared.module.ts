import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SafeUrlPipe],
  exports: [
    FormsModule,
    CommonModule,
    SafeUrlPipe
  ]
})
export class SharedModule { }
