import { Component, OnInit } from '@angular/core';
import { AppService, SupabaseService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: any;
  connected = false;
  constructor(
    private supabaseService: SupabaseService,
    private app: AppService
  ) {}
  ngOnInit(): void {
    this.app.currentUserAsObservable().subscribe((user) => {
      if (Object.keys(user).length > 0) {
        this.user = user;
        this.connected = true;
      }
    });
  }
  title = 'smoothBudget';
}
