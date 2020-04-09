import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListarFuncionariosPage } from '../pages/listar-funcionarios/listar-funcionarios';
import { InserirFuncionariosPage } from '../pages/inserir-funcionarios/inserir-funcionarios';
import { ListarFuncoesPage } from '../pages/listar-funcoes/listar-funcoes';
import { InserirFuncoesPage } from '../pages/inserir-funcoes/inserir-funcoes';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) public nav: Nav;

  public paginas = [
    {titulo: 'Listar Funcionarios' ,component: ListarFuncionariosPage.name ,icon: 'people'},
    {titulo: 'Inserir Funcionario' ,component: InserirFuncionariosPage.name ,icon: 'person-add'},
    {titulo: 'Listar Funções' ,component: ListarFuncoesPage.name ,icon: 'logo-buffer'},
    {titulo: 'Inserir Funções' ,component: InserirFuncoesPage.name ,icon: 'ios-more'}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(page){
    this.nav.push(page)
  }
}

