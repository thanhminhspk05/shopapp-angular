import { Component } from "@angular/core";
import { LoginDTO } from "../dtos/user/login.dto";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  phoneNumber: string;
  password: string;

  constructor(private userService: UserService) {
    this.phoneNumber = "";
    this.password = "";
  }

  login() {
    const loginDTO: LoginDTO = {
      phone_number: this.phoneNumber,
      password: this.password,
    };
    this.userService.login(loginDTO);
  }
}
