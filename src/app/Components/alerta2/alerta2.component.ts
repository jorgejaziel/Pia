import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta2',
  templateUrl: './alerta2.component.html',
  styleUrls: ['./alerta2.component.scss'],
})
export class Alerta2Component implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Carrito',
      subHeader: '',
      message: 'Deseas agregar este producto al carrito?',
      buttons: ['Cancel','OK']
    });

    await alert.present();
  }
  ngOnInit() {}

}
