import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import {hide, show} from "../../store/loading/action";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  signIn() {
    this.store.dispatch(show());

    setTimeout(() => {
      this.store.dispatch(hide());
    }, 1500);
  }

}
