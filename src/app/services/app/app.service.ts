import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  $loginQrcode = new BehaviorSubject<string>('');
  $curentUser = new BehaviorSubject<any>({});
  constructor() {}

  loginQrCodeValues() {
    return this.$loginQrcode.getValue();
  }
  loginQrCodeAsObservable() {
    return this.$loginQrcode.asObservable();
  }
  nextLoginQrCode(val: string) {
    this.$loginQrcode.next(val);
  }

  //

  currentUserValues() {
    return this.$curentUser.getValue();
  }
  currentUserAsObservable() {
    return this.$curentUser.asObservable();
  }
  nextCurrentUser(val: string) {
    this.$curentUser.next(val);
  }
}
