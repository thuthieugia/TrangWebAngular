import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
