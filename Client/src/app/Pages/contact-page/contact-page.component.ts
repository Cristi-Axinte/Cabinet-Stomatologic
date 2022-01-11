import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  language = 1;
  constructor() { }

  ngOnInit(): void {
  }

  receiver(event : any) {
    this.language = event;
    console.log(this.language);
  } 
}
