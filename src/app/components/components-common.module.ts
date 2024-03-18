import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskNameModalComponent } from './task-name-modal/task-name-modal.component';
import { IonicModule } from '@ionic/angular';

const components = [
  TaskNameModalComponent
]

@NgModule({
  declarations: [TaskNameModalComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class ComponentsCommonModule { }
