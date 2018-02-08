import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user);
    this.router.navigateByUrl('/competitions');
  }

}
