import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private status: boolean = false;

  constructor(private client: HttpClient) {
  }

  public onLogin(email: string, password: string) {


    let response = this.client.post<{ token: string }>("http://localhost:8099/authorize",
      {email: email, password: password})
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
