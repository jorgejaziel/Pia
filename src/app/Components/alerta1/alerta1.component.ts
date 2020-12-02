import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta1',
  templateUrl: './alerta1.component.html',
  styleUrls: ['./alerta1.component.scss'],
})
export class Alerta1Component implements OnInit {

  constructor(public alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Agendar',
      subHeader: '',
      message: 'Quieres Agendar una cita con nosotros?',
      buttons: ['Cancel','OK']
    });

    await alert.present();
  }
  ngOnInit() {}

}
