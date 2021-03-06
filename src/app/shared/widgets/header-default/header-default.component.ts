import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss'],
})
export class HeaderDefaultComponent implements OnInit {
  @Input() sidenav: any;
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.sidenav.toggle();
  }
}
