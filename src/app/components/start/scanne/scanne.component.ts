import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  NgxScannerQrcodeComponent,
  ScannerQRCodeConfig,
} from 'ngx-scanner-qrcode';
import { AppService } from 'src/app/services';

@Component({
  selector: 'app-scanne',
  templateUrl: './scanne.component.html',
  styleUrls: ['./scanne.component.scss'],
})
export class ScanneComponent implements OnInit, AfterViewInit {
  @ViewChild('action') action!: NgxScannerQrcodeComponent;
  hideCam: boolean = true;
  config: ScannerQRCodeConfig = {
    // fps: 1000,
    vibrate: 400,
    // isBeep: true,
    // decode: 'macintosh',
    deviceActive: 1,
    constraints: {
      audio: false,
      video: {
        width: window.innerWidth,
      },
    },
  };
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<ScanneComponent>
  ) {}
  ngAfterViewInit(): void {
    this.action.start();
    this.action.data.subscribe((d: any) => {
      if (d && d.length > 0) {
        this.action.stop();
        this.appService.nextLoginQrCode(d[0].value);
        this.dialogRef.close();
      }
    });
    this.dialogRef.afterClosed().subscribe((d) => {
      this.action.stop();
    });
  }

  ngOnInit(): void {}
}
