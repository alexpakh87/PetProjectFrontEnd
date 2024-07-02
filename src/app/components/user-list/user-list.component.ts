import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userServise:UserService, private router:Router){

  }


  private getUser(){
    this.userServise.getUsersList().subscribe(data=>{
      this.users=data;
    })
  }
    ngOnInit():void{
      this.getUser();
    }
  
}
