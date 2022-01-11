import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {
  images = ["assets/background.jpg", "assets/logo.png", "assets/car1.jpg", "assets/car2.png",]
  language = 1;

  constructor() { }

  ngOnInit(): void {
  }

  receiver(event : any) {
    this.language = event;
    console.log(this.language);
  } 
}
