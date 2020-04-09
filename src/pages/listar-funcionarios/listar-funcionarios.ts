import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FuncionariosProvider } from '../../providers/funcionarios/funcionarios';
import { FuncionarioDTO } from '../../models/funcionarioDTO';

@IonicPage()
@Component({
  selector: 'page-listar-funcionarios',
  templateUrl: 'listar-funcionarios.html',
})
export class ListarFuncionariosPage {

  funcionarios: FuncionarioDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private funcionariosService: FuncionariosProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

  ionViewDidLoad() {
    
    let loading = this.loadingCtrl.create({
      content: 'Carregando',
    })

    loading.present();

    this.funcionariosService.getFuncionarios()
      .subscribe(
        funcionarios => {
          this.funcionarios = funcionarios;
          loading.dismiss();
        },
        err => {
          loading.dismiss();
          this.toastCtrl.create({
            message: 'Erro ao carregar funcionarios',
            duration: 5000
          }).present();
        }
        );
  }   

}
