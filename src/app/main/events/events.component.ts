import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EventService} from "./event.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from 'rxjs';
import moment from "moment";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  addEvent = false;
  tags: [{}];
  tagsSelect: [];
  contentHeader;
  avatarImage = '';
  eventList: [] = null;
  newEvent: FormGroup;
  constructor(public eventService: EventService,
              private _formBuilder: FormBuilder,
              private modalService: NgbModal,
              ) { }

  ngOnInit(): void {
    this.eventService.getTags().subscribe(tags => {
      this.tags = tags;

      this.newEvent = new FormGroup({
        title: new FormControl('', {
          validators: [Validators.required]
        }),
        date: new FormControl(moment(), {
          validators: [Validators.required]
        }),
        description: new FormControl('', {
          validators: [Validators.required]
        }),
        participants: new FormControl('', {
          validators: [Validators.required]
        }),
        volunteers: new FormControl('', {
          validators: [Validators.required]
        }),
        fundsAmount: new FormControl('', {
          validators: [Validators.required]
        }),
        volunteersNeed: new FormControl('', {
          validators: [Validators.required]
        }),
        fundsAmountNeed: new FormControl('', {
          validators: [Validators.required]
        }),
        tags: new FormControl(tags[0], {
          validators: [Validators.required]
        })
      },
          {
            updateOn: 'change',
          }
      )
    })
    this.eventService.getListEvent().subscribe(list => {
      this.eventList = list;
    })
    console.log(this.eventList)
    this.contentHeader = {
      headerTitle: 'Мероприятия',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Домашняя',
            isLink: true,
            link: '/'
          },
          {
            name: 'Мероприятия',
            isLink: false
          }
        ]
      }
    }
    this.newEvent.valueChanges.subscribe(item => {
      debugger
    })
  }
  modalSelectOpen(modalSelect) {
    this.modalService.open(modalSelect, {
      windowClass: 'modal'
    });
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
  addNewEvent() {
    this.eventService.sendEvent(this.newEvent.value).subscribe(resp => {
      this.addEvent = false;
    })
  }

  addEvents() {
    this.addEvent = true;
  }

}
