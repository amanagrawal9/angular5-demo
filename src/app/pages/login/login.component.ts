import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {InstanceId: 'aaaaa', Email: 'demo@cloudtimer.nl', Password: 'test1234'};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user)
      .subscribe(response => {
        localStorage.setItem('authToken', response.Data.Token);
        this.router.navigateByUrl('/competitions');
      });
  }

}
