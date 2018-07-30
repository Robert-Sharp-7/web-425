import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";


@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let loggedIn = Math.random() < 0.5;

        if (!loggedIn) {
            alert("you're not logged in and will be directed to Login Page");
            this.router.navigate(["/login"]);
        }

    return loggedIn;
    }
}