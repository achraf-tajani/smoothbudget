import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  sysImage = '';
  constructor() {}

  ngOnInit(): void {}
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
}
