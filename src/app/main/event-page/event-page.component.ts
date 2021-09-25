import { Component, OnInit } from '@angular/core';
import { CarouselImages } from "../carousel/carousel.component";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  public carouselImages = [
    'assets/images/slider/01.jpg',
    'assets/images/slider/02.jpg',
    'assets/images/slider/03.jpg',
    'assets/images/slider/04.jpg',
    'assets/images/slider/05.jpg',
    'assets/images/slider/06.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
