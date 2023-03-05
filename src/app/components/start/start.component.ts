import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, SupabaseService } from 'src/app/services';
import { ScanneComponent } from './scanne/scanne.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  sysImage = '';
  connected: boolean = false;
  constructor(
    public dialog: MatDialog,
    private appService: AppService,
    private supabase: SupabaseService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.appService.loginQrCodeAsObservable().subscribe((tokenString) => {
      if (tokenString.length > 0) {
        this.connected = true;
        this.supabase
          .selectReference('budget', tokenString)
          .then((budget: any) => {
            this.appService.$curentUser.next(budget.data[0]);
            this.route.navigate(['/home']);
          })
          .catch((e) => console.log(e));
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ScanneComponent);
  }
}
