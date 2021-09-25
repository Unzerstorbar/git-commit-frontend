import { Component, OnInit } from '@angular/core';
import {HomeChildrenService} from "../../services/home-children.service";
import {ActivatedRoute} from "@angular/router";
import {RegistryRowModel} from "../../common/registry-row.model";
import {FormControl, FormGroup} from "@angular/forms";

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

  isActiveCreateForm = false;
  studentsList: RegistryRowModel[] = [];

  group:FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.homeChildrenService.setCurrentId(+params['id']);
      this.loadData(+params['id']);
    });
    this.initCreateGroup();
  }

  private loadData(id: number) {
    this.homeChildrenService.getRegistry(id)
        .subscribe(data => {
          this.studentsList = data;
        });
  }

  private initCreateGroup() {
    this.group = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),
      password: new FormControl(''),
      c_password: new FormControl(''),
    })
  }

  clear() {
    this.group.setValue({
      name: '',
      email: '',
      birthday: '',
      password: '',
      c_password: '',
    });
  }


  saveChildren(){
    const data = this.group.value;
    this.homeChildrenService.saveChildrenInHomeChildren(
        data,
        this.homeChildrenService.currentId
    ).subscribe(status => {
      this.isActiveCreateForm = false;
      this.clear();
      this.loadData(this.homeChildrenService.currentId);
    });
  }

}
