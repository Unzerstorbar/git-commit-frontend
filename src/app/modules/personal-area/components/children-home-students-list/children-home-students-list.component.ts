import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-home-students-list',
  templateUrl: './children-home-students-list.component.html',
  styleUrls: ['./children-home-students-list.component.scss']
})
export class ChildrenHomeStudentsListComponent implements OnInit {

  constructor() { }

  studentsList: any[] = [
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
    { img: '', name: 'Васильев Василий Васильевич', birthday: '04.12.2006', age: '15 лет', login: 'Логин', email: '123@3132.ru'},
  ];

  ngOnInit(): void {
  }

}
