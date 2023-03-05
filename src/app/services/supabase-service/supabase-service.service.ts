import { Injectable } from '@angular/core';
import { supabase } from 'src/app/shared/database/supaba.database';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  public supabase: any;
  constructor() {
    console.log('SupabaseService is injected');
    this.supabase = supabase;
  }
  async insert(budget: any) {
    var today = new Date();
    const { data, error } = await this.supabase.from('budget').insert({
      pseudo: budget.name,
      chargesFixe: `${JSON.stringify(budget.chargesFixes)}`,
      chargesVariable: `${JSON.stringify(budget.chargesVariables)}`,
      references: budget.references,
      created_at: today.toJSON(),
    });
    return { data, error };
  }
  async selectReference(table: string, reference: string) {
    const { data, error } = await supabase
      .from(table)
      .select()
      .eq('references', reference);
    return { data, error };
  }
}
