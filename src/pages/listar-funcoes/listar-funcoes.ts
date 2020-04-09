import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Funcoes } from '../../models/funcoesDTO';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';

@IonicPage()
@Component({
  selector: 'page-listar-funcoes',
  templateUrl: 'listar-funcoes.html',
})
export class ListarFuncoesPage {

  funcoes: Funcoes[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public funcoesService: FuncoesProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando'
    });

    loading.present();

    this.funcoesService.listarFuncoes()
      .subscribe(
        funcao => {
          this.funcoes = funcao;
          loading.dismiss();
        },
        err => {
          loading.dismiss();
          this.toastCtrl.create({
            message: 'Erro ao carregar funções',
            duration: 3000
          }).present();
        }
      );
  }

}
