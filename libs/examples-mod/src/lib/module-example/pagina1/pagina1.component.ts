import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Pagina2Component } from '../pagina2/pagina2.component';


@IonicPage()
@Component({
  selector: 'bdb-mod-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  constructor(private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }

  navTest(){
    this.navCtrl.push(Pagina2Component);
  }

}
