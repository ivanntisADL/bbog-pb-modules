import { Component, Input, Output, EventEmitter, Directive } from '@angular/core';

@Directive({
  selector: '[left], [right]',
  host: { 'class': 'nav-options__deco' }
})
export class IconNavDecoNewDirective { }

@Component({
  selector: 'bdb-nav-panel',
  templateUrl: './bdb-nav-panel.component.html',
  styleUrls: ['./bdb-nav-panel.component.scss']
})
export class BdbNavPanelComponent {
  @Input() lOption = '';
  @Input() rOption = '';
  @Output() onLeftClicked = new EventEmitter();
  @Output() onRightClicked = new EventEmitter();

  constructor() { }

  leftClicked() {
    this.onLeftClicked.emit();
  }

  rightClicked() {
    this.onRightClicked.emit();
  }
}
