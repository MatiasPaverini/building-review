import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title:string;

  @Output() menu:any = new EventEmitter();
  
  constructor() { }

  showMenu() {
    this.menu = 'first';
  }

  ngOnInit() {}



}
