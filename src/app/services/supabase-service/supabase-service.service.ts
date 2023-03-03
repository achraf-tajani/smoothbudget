import { Injectable } from '@angular/core';
import { supabase } from 'src/app/shared/database/supaba.database';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  public supabase:any;
  constructor() { 
    console.log('SupabaseService is injected')
    this.supabase = supabase;
  }
}
