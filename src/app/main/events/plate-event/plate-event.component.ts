import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../event.service";

@Component({
  selector: 'app-plate-event',
  templateUrl: './plate-event.component.html',
  styleUrls: ['./plate-event.component.scss']
})
export class PlateEventComponent implements OnInit {

  constructor(private eventService: EventService) { }

  @Input() eventItem;

  ngOnInit(): void {
    console.log(this.eventItem)
  }

}
