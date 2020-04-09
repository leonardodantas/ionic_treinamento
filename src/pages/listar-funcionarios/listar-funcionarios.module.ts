import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarFuncionariosPage } from './listar-funcionarios';
import { FuncionariosProvider } from '../../providers/funcionarios/funcionarios';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListarFuncionariosPage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(ListarFuncionariosPage),
  ],
  exports: [
    ListarFuncionariosPage
  ],
  providers: [FuncionariosProvider]
})
export class ListarFuncionariosPageModule {}
