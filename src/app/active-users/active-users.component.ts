import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent implements OnInit{
  users: string[] = [];
  constructor(private readonly userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id)
  }
}
