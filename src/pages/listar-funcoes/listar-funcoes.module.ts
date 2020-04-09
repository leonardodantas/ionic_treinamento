import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarFuncoesPage } from './listar-funcoes';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarFuncoesPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(ListarFuncoesPage),
  ],
  exports: [
    ListarFuncoesPage
  ],
  providers: [FuncoesProvider]
})
export class ListarFuncoesPageModule {}
