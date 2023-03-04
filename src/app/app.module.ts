import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { WebcamModule } from 'ngx-webcam';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScanneComponent } from './components/start/scanne/scanne.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeComponent,
    InscriptionComponent,
    HeaderComponent,
    StartComponent,
    HomeComponent,
    ScanneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    WebcamModule,
    BrowserAnimationsModule,
  ],
  providers: [NgxScannerQrcodeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
