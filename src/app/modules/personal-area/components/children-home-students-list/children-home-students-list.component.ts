import { Component, OnInit } from '@angular/core';
import {HomeChildrenService} from "../../services/home-children.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-children-home-students-list',
  templateUrl: './children-home-students-list.component.html',
  styleUrls: ['./children-home-students-list.component.scss']
})
export class ChildrenHomeStudentsListComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private homeChildrenService: HomeChildrenService
  ) { }

  studentsList: any[] = [
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
  ];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.homeChildrenService.setCurrentId(+params['id']);
    });
    this.homeChildrenService.getRegistry().subscribe(data => {
      console.log(data);
    });
  }

}
