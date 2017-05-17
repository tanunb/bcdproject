import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ModalController, Platform } from 'ionic-angular'; 
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  addPage: any = AddPage;
  constructor(public navCtrl: NavController,
  			private modalCtrl: ModalController) {
  }

  showDetail(birthday) {
	    let modal = this.modalCtrl.create(AddPage);
    	modal.present();
	}
}
export class IconsPage { }
