import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ["assets/background.jpg", "assets/logo.png", "assets/car1.jpg", "assets/car2.png",]
  constructor(public config: NgbCarouselConfig) { }
  ngOnInit(): void {
  }
}
