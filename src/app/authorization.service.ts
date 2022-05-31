import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
// class Token{
//   public token: string | undefined;
// }
export class AuthorizationService {

  private status: boolean = false;
  constructor(private client: HttpClient) {
  }
  public onLogin(email: string, password: string) {
    console.log(password)
    console.log(email);

    let response = this.client.post("http://localhost:8099/authorize",
      {email: email, password: password, responseType: 'text'})
    this.switchStatus();
    return response;
  }

  getStatus(): boolean {
    return this.status;
  }

  switchStatus(): void {
    this.status = !this.status;
  }
}
