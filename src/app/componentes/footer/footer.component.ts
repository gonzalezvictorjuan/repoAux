import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  autor = 'González, Victor Juan';
  anio: number;

  constructor() {
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
