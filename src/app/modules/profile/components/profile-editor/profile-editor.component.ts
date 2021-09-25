import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {FlatpickrOptions} from "ng2-flatpickr";
import {UserService} from "../../services/user.service";
import {ProfileSetting} from "../../common/profile-setting.model";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  public data: ProfileSetting;
  private id: number;
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;

  private passwordForm: FormGroup;

  private _unsubscribeAll: Subject<any>;


  constructor(
      private userService: UserService,
      private router: ActivatedRoute
  ) {
    this._unsubscribeAll = new Subject();
  }

  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
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


  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = +params['id'];
      this.id = id;
      this.userService.get(id).subscribe(data => {
        this.data = data
      });
    });
    this.initPasswordForm();
  }

  initPasswordForm() {
    this.passwordForm = new FormGroup({
      old_password: new FormControl(),
      password: new FormControl(),
      c_password: new FormControl()
    })
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  updatePartData(dataType: 'general' | 'about') {
    const data = {...this.data[dataType]};
    this.userService.updatePartData(data, this.id).subscribe(data => {
      console.log(data);
    });
  }

  updatePassword(event){
    const data = this.passwordForm.value;
    this.userService.updatePassword(data, this.id).subscribe();
  }

}
