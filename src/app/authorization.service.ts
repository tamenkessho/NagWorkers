import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {
  private authStatus: boolean = false;

  constructor(private client: HttpClient,) {}

  onLogin(email: string, password: string) {
    let response = this.client.post<{ token: string }>("http://localhost:8099/authorize",
      {email: email, password: password})
    this.switchStatus();
    if (this.authStatus) {
      this.saveCredentials(email, password)
    } else {localStorage.clear()}
    return response;
  }

  getStatus(): boolean {return this.authStatus;}

  switchStatus() {this.authStatus = !this.authStatus;}

  saveCredentials(email: string, password: string) {
    localStorage.setItem("email", email)
    localStorage.setItem("passwort", password)
    console.log("creds. saved///")
  }
}
