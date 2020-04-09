import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-inserir-funcoes',
  templateUrl: 'inserir-funcoes.html',
})
export class InserirFuncoesPage {

  formFuncao: FormGroup = this.formBuilder.group({
    funcao: ['', Validators.required],
    salario: ['', Validators.required]
  })

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastController: ToastController
    ) {
  }

  novaFuncao(){

    let loading = this.loadingController.create({
      content: 'Carregando'
    });

    loading.present();
    
    setTimeout(() => {
      this.formFuncao.reset();
      loading.dismiss();

      this.toastController.create({
        message: 'Função Criada',
        duration: 3000
      }).present()


    }, 5000);
  }



}
