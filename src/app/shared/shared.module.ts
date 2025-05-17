import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    CardModule
  ],
  exports:[
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
    CardModule
  ]
})
export class SharedModule { 

}
