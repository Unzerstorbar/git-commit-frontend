import {Component, OnInit, ViewChild} from '@angular/core';
import {MapInfoWindow, MapMarker} from "@angular/google-maps";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  sliderItemsList = [
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
    {src: 'assets/images/demo_img.png', alt: 'demo'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
