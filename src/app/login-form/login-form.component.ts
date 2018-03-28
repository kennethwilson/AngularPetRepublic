import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model: any = {};
  constructor(private auth-service:AuthService) {
  }
  ngOnInit() {
  }
  doLogin(){

  }
}
