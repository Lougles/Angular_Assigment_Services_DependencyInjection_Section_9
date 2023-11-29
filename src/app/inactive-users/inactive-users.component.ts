import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent implements OnInit {
  users: string[] = [];
  constructor(private readonly userService: UsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
