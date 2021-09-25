import { Component, OnInit } from '@angular/core';
import { CarouselImages } from "../carousel/carousel.component";
import {EventPageService} from "./event-page.service";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

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

  constructor(private eventPageService: EventPageService, private route: ActivatedRoute) { }

  data

  ngOnInit(): void {
    this.route.params.pipe(map(params => {
      this.eventPageService.getData(params.id).subscribe(getData => {
        this.data = getData;
      })
    })).subscribe();
  }

}
