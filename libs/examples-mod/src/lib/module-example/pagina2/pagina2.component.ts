import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'bdb-mod-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit {

  constructor(private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }

  gotoBV() {
    this.navCtrl.popToRoot()
  }

}
