import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AddTechnologyPage } from '../../pages/add-technology/add-technology';
import { TestPage } from '../../pages/test/test';
import { ListPage } from '../../pages/list/list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items: any = [];
  private baseURI: string = "http://localhost:8080/";
  constructor(public navCtrl: NavController, public http: Http, public platform: Platform) {

  }

  ionViewWillEnter() {
    this.load();
  }

  load() {
    this.http.get('http://localhost:8080/retrieve.php')
      .map(res => res.json())
      .subscribe(data => {
        this.items = data;
      });
  }
  
 
  addEntry() {
    this.navCtrl.push('AddTechnologyPage');
  }

  viewEntry(param) {
    this.navCtrl.push('AddTechnologyPage', param);
  }
}
