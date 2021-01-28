import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.styl']
})
export class RegisterUserComponent implements OnInit {

  alert = false;
  email: any;
  password: any;
    constructor( private router: Router) { }

    ngOnInit(): void {
    }

  logInUser(){
    if (this.email === 'nawaz.uosl@gmail.com' && this.password === 'nawazrai137'){
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate(['/shows']);
      // console.log('welcom to TvMaze');
    }
    else
    {
      alert('Please Enter Valid Details');
      // console.log('User Unauthorized');
    }
  }

}
