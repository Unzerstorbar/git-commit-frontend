import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.component.html',
  styleUrls: ['./contact-person.component.scss']
})
export class ContactPersonComponent implements OnInit {
  @Input() name: string;
  @Input() phone: string;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
