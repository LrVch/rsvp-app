import 'rxjs/add/operator/filter';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('navToggled') navToggled = new EventEmitter();
  navOpen = false;
  state$ = new BehaviorSubject<boolean>(this.navOpen);

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    // If nav is open after routing, close it
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
    this.state$.next(this.navOpen);
  }
}
