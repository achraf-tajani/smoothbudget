import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QrcodeComponent } from './components/inscription/qrcode/qrcode.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScanneComponent } from './components/start/scanne/scanne.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
import { MaterialModule } from './material.module';

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
    BrowserAnimationsModule,
    NgxScannerQrcodeModule,
    QRCodeModule,
    MaterialModule,
  ],
  providers: [NgxScannerQrcodeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
