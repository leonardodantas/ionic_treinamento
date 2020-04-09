import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirFuncionariosPage } from './inserir-funcionarios';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InserirFuncionariosPage,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    IonicPageModule.forChild(InserirFuncionariosPage),
  ],
  exports: [
    InserirFuncionariosPage
  ]
})
export class InserirFuncionariosPageModule {}
