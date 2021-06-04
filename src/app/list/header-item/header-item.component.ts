import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'th [app-header-item]',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  @Input() header : string;
  constructor() { }

  ngOnInit(): void {
  }

}
