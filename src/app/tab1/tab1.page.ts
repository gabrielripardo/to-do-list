import { Component } from '@angular/core';
import { CheckboxChangeEventDetail, ModalController } from '@ionic/angular';
import { TaskNameModalComponent } from '../components/task-name-modal/task-name-modal.component'
import { ItemReorderEventDetail } from '@ionic/angular';

interface ToDo{
  id: number;
  description: string;
  done: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list: ToDo[] = [
    {id: 1, description: "criar app", done: false},
    {id: 2, description: "criar app 2", done: false}
  ]

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
      this.add(data);
    }
  }

  add(description: string){
    this.list.push({
      id: this.list.length+1,
      description,
      done: false
    })
  }

  changeItem(event: any){
    this.list = this.list.map((task: ToDo ) => {
      if(task.id == event.target.id)
        return ({...task, done: event.target.checked})

      return task;
      }
    )
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
}
