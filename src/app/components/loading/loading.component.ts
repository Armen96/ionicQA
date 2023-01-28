import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../../store/AppState";
import {LoadingInterface} from "../../store/loading/loading.interface";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  public loadingState$: Observable<LoadingInterface> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadingState$ = this.store.select('loading');
  }

}
