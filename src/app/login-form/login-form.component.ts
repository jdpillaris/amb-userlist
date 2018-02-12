import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { 

  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(username == 'test@nv.com' && password == 'tested') {
      this.authService.setIsAuthenticated();
      this.router.navigate(['persons']);
    }
  }
}
