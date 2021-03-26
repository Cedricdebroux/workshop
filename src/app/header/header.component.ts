import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  salutationSub: Subscription = new Subscription;
  secondesSub: Subscription = new Subscription;
  secondes!: number;
  constructor() { }

  ngOnInit(): void {
    const salutation = new Observable((observer) => {// creation de l'observable
      observer.next("Hello");
      observer.next("world");
      observer.complete();//Obligatoire afin de spécifier que l'action est terminer
    });
    const secondesObs = interval(1000);

    this.secondesSub = secondesObs.subscribe(
      (value: any) => {
        this.secondes = value;
        console.log(value);
      }
    );
  }
  ngOnDestroy() {
    this.secondesSub.unsubscribe();
  }
}
