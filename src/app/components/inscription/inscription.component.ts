import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QrcodeComponent } from './qrcode/qrcode.component';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }
  openDialog() {
    const dialogRef = this.dialog.open(QrcodeComponent);
  }
}
