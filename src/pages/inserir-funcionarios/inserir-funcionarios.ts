import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcoes } from '../../models/funcoesDTO';
import { FuncoesProvider } from '../../providers/funcoes/funcoes';
import { FuncionarioDTO } from '../../models/funcionarioDTO';
import { FuncionariosProvider } from '../../providers/funcionarios/funcionarios';

/**
 * Generated class for the InserirFuncionariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inserir-funcionarios',
  templateUrl: 'inserir-funcionarios.html',
  providers: [FuncoesProvider, FuncionariosProvider]
})
export class InserirFuncionariosPage {

  funcoes: Funcoes[];

  funcionarioInserir: FormGroup =  this.formBuilde.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    idFuncao: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilde: FormBuilder,
    private funcaoService: FuncoesProvider,
    private funcionarioService: FuncionariosProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) {
  }

  ionViewDidLoad() {
    this.funcaoService.listarFuncoes()
      .subscribe(
        funcoes => this.funcoes = funcoes
      ) 
  }

  novoFuncionario(){

    let loading = this.loadingCtrl.create({
      content: 'Inserindo Funcionario'
    })

    loading.present();

    let funcionario = this.funcionarioInserir.getRawValue() as FuncionarioDTO; 
    this.funcionarioService.inserir(funcionario)
      .subscribe(
        ()=>{
          this.funcionarioInserir.reset();
          loading.dismiss();
          this.toastCtrl.create({
            message: 'Funcionario Inserido',
            duration: 3000
          }).present();
        },
        err => {
          loading.dismiss();
          this.toastCtrl.create({
            message: 'Erro ao inserir funcionario',
            duration: 3000
          }).present();
        }
      )    
  }

}
