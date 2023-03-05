import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SupabaseService } from 'src/app/services';
@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  @ViewChild('step2') step2!: ElementRef;
  @ViewChild('step3') step3!: ElementRef;
  step = 1;
  inputClass =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  budget: any = {};
  charges = [];
  constructor(private supabaseService: SupabaseService) {}

  ngOnInit(): void {}
  start(pseudo: any, charges: any) {
    if (pseudo.length === 0 || charges.length === 0) {
      return;
    }
    this.budget.name = pseudo;
    this.budget.chargesFixes = [];
    this.budget.chargesVariables = [];
    this.step++;
    setTimeout(() => {
      this.createArrayElement(charges);
    }, 300);
  }
  save() {
    document.querySelectorAll('.inputFixValue').forEach((element: any, idx) => {
      this.budget.chargesFixes[idx].somme = +element.value;
    });
    this.step++;
  }

  createArrayElement(charges: string) {
    if (charges[charges.length - 1] == ';') {
      charges = charges.substring(0, charges.length - 1);
    }
    const arr = charges.split(';');
    arr.forEach((element, idx) => {
      let label = document.createElement('LABEL');
      let input = document.createElement('INPUT');
      input.setAttribute('type', 'number');
      label.classList.add(...this.labelClass.split(' '));
      input.classList.add(...this.inputClass.split(' '));
      input.classList.add('inputFixValue');
      label.innerHTML = element + ' :';
      this.step2.nativeElement.appendChild(label);
      this.step2.nativeElement.appendChild(input);
      this.budget.chargesFixes.push({ label: element, somme: 0 });
    });
  }
  createStepe4(chargesVars: any) {
    if (chargesVars[chargesVars.length - 1] == ';') {
      chargesVars = chargesVars.substring(0, chargesVars.length - 1);
    }
    this.step++;
    const arr = chargesVars.split(';');
    arr.forEach((element: any, idx: number) => {
      let label = document.createElement('LABEL');
      let input = document.createElement('INPUT');
      input.setAttribute('type', 'number');
      label.classList.add(...this.labelClass.split(' '));
      input.classList.add(...this.inputClass.split(' '));
      input.classList.add('inputVarValue');
      label.innerHTML = element + ' :';
      setTimeout(() => {
        this.step3.nativeElement.appendChild(label);
        this.step3.nativeElement.appendChild(input);
        this.budget.chargesVariables.push({ label: element, poucentage: 0 });
      }, 300);
    });
  }
  finich() {
    document.querySelectorAll('.inputVarValue').forEach((element: any, idx) => {
      this.budget.chargesVariables[idx].poucentage = +element.value;
    });
    this.budget.references = this.getToken();
    this.supabaseService
      .insert(this.budget)
      .then((d) => {
        this.step++;
      })
      .catch((e) => console.log(e));
  }
  getToken() {
    const rand = () => {
      return Math.random().toString(36).substr(2);
    };

    const token = () => {
      return rand() + rand();
    };

    return token();
  }
}
