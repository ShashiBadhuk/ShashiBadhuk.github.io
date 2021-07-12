import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss'],
})
export class FooterDefaultComponent implements OnInit {
  currentYear: number;
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
