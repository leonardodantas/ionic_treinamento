import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirFuncoesPage } from './inserir-funcoes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InserirFuncoesPage,
  ],
  imports: [
    ReactiveFormsModule,
    IonicPageModule.forChild(InserirFuncoesPage),
  ],
  exports: [
    InserirFuncoesPage
  ]
})
export class InserirFuncoesPageModule {}
