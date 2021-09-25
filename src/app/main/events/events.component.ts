import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EventService} from "./event.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  addEvent = false;
  avatarImage = '';
  eventList: [] = null;
  constructor(public eventService: EventService,
  private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.eventService.getListEvent().subscribe(list => {
      this.eventList = list;
      debugger
      this._changeDetectorRef.markForCheck()
    })
    console.log(this.eventList)
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addEvents() {
    this.addEvent = true;
  }

}
