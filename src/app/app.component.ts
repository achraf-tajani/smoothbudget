import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private supabaseService: SupabaseService) {}
  ngOnInit(): void {
    console.log(this.supabaseService.supabase);
  }
  title = 'smoothBudget';
}
