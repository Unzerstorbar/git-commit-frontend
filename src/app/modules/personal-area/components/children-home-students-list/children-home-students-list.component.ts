import { Component, OnInit } from '@angular/core';
import {HomeChildrenService} from "../../services/home-children.service";
import {ActivatedRoute} from "@angular/router";
import {RegistryRowModel} from "../../common/registry-row.model";
import {FormControl, FormGroup} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-children-home-students-list',
  templateUrl: './children-home-students-list.component.html',
  styleUrls: ['./children-home-students-list.component.scss']
})
export class ChildrenHomeStudentsListComponent implements OnInit {

  constructor(
      private modalService: NgbModal,
      private route: ActivatedRoute,
      private homeChildrenService: HomeChildrenService
  ) { }

  isActiveCreateForm = false;
  studentsList: RegistryRowModel[] = [];

  selectedStudent: RegistryRowModel = null;
  changePasswordForm: FormGroup;
  changePasswordFormOptions = {
    isPasswordType: false,
    isCPasswordType: false,
  };

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

  modalOpenChangePassword(modalSuccess, student) {
    this.selectedStudent = student;
    this.initChangePasswordGroup();
    this.modalService.open(modalSuccess, {
      windowClass: 'modal modal-primary',
      injector: student
    });
  }

  private initChangePasswordGroup() {
    this.changePasswordForm = new FormGroup({
      password: new FormControl(''),
      c_password: new FormControl(''),
    })
  }

  changePassword(modal){
    modal.close('Accept click');
    const data = this.changePasswordForm.value;
    this.homeChildrenService.changePasswordForPupil(this.selectedStudent.id, data)
        .subscribe();
  }

}
