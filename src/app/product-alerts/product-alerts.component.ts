import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product11; // 父元件商品列表元件傳入
  @Output() notify = new EventEmitter(); // 當 notify 屬性發生變化時，觸發事件
  constructor() { }

  ngOnInit() {
  }

}