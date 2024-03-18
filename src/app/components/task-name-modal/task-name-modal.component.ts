import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-name-modal',
  templateUrl: './task-name-modal.component.html',
  styleUrls: ['./task-name-modal.component.scss'],
})
export class TaskNameModalComponent {
  name: string = "";

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }

}
