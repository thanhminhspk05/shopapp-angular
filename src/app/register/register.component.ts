import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RegisterDTO } from "../dtos/user/register.dto";
import { UserService } from "./../services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  @ViewChild("registerForm") registerForm!: NgForm;

  phoneNumber: string;
  password: string;
  retypePassword: string;
  fullName: string;
  address: string;
  isAccepted: boolean;
  dateOfBirth: Date;

  constructor(private userService: UserService) {
    this.phoneNumber = "";
    this.password = "";
    this.retypePassword = "";
    this.fullName = "";
    this.address = "";
    this.isAccepted = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
  }

  register() {
    const registerData: RegisterDTO = {
      fullname: this.fullName,
      phone_number: this.phoneNumber,
      address: this.address,
      password: this.password,
      retype_password: this.retypePassword,
      date_of_birth: this.dateOfBirth,
      facebook_account_id: 0,
      google_account_id: 0,
      role_id: 1,
    };
    this.userService.register(registerData);
  }

  checkPasswordMatch() {
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls["retypePassword"].setErrors({
        passwordMismatch: true,
      });
    } else {
      this.registerForm.form.controls["retypePassword"].setErrors(null);
    }
  }

  checkAge() {
    if (this.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        this.registerForm.form.controls["dateOfBirth"].setErrors({
          invalidAge: true,
        });
      } else {
        this.registerForm.form.controls["dateOfBirth"].setErrors(null);
      }
    }
  }
}
