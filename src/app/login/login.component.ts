import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private appService: AppService,
  ) { }

  login(form: NgForm) {
    this.appService.login(form.value).subscribe((response: any) => {
      if(response.error_message) {
        alert(response.error_message);
        return;
      }
      sessionStorage.setItem('token', response.token);
      this.router.navigate(['list']);
    });
  }

}