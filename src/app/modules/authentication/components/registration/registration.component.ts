import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {CoreConfigService} from "../../../../../@core/services/config.service";
import {takeUntil} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  public coreConfig: any;
  public passwordTextType: boolean;
  public cPasswordTextType: boolean;
  public registerForm: FormGroup;
  public submitted = false;

  roleList = [
    {id: 1, name: 'Воспитаник'},
    {id: 2, name: 'Волонтер'},
    {id: 3, name: 'Спонсор'},
  ]

  isRequestFail = false;

  private _unsubscribeAll: Subject<any>;


  constructor(
      private _coreConfigService: CoreConfigService,
      private _formBuilder: FormBuilder,
      private _router: Router,
      private auth: AuthenticationService
  ) {
    this._unsubscribeAll = new Subject();

    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        menu: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        customizer: false,
        enableLocalStorage: false
      }
    };
  }

  get f() {
    return this.registerForm.controls;
  }

  getDropDownPlaceholder(){
    const roleID = this.registerForm.get('role').value;
    if (!roleID) {
      return 'Выберите роль';
    }

    return this.roleList.find(role => role.id === roleID).name;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const userData = this.registerForm.value;
    this.auth.registration(userData).subscribe(({success}) => {
      if (success) {
        this._router.navigate(['/authentication/sign_in']);
      } else {
        this.isRequestFail = true;
      }
    });
  }

  ngOnInit(): void {

    this.initFormRegister();
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
      this.coreConfig = config;
    });
  }

  private initFormRegister() {
    this.registerForm = this._formBuilder.group({
      role: ['', Validators.required],
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
      document_series: [''],
      document_number: [''],
      document_issued: [''],
      document_issued_date: [''],
      document_department_code: [''],
    }, {updateOn: 'blur'});
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
