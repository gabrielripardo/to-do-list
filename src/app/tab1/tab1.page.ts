import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskNameModalComponent } from '../components/task-name-modal/task-name-modal.component'

interface ToDo{
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {  
  list: ToDo[] = []

  constructor(
    private _modalCtrl: ModalController
  ) {}

  
  async openModal() {
    const modal = await this._modalCtrl.create({
      component: TaskNameModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.list.push(data);
    }
  }

}
