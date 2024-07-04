import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit{
onSubmit() {
this.saveUser();
}

user: User = new User();


  constructor(private userServise:UserService, private router:Router){

  }

  
    ngOnInit():void{
      
    }

    saveUser(){
      this.userServise.userSignup(this.user).subscribe( (data: any) =>{
        console.log(data);
        this.goToUserList();
      },
        (      error: any) => console.log(error));
    }

    goToUserList(){
      this.router.navigate(['/users-list']);
    }
}
