import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class CustomValidator {
  constructor() {}

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pattern = /^[a-zA-Z0-9.,'()\[\]"&_ -]+$/;
      if (control.value && !pattern.test(control.value)) {
        return { invalidName: true };
      }
      return null;
    };
  }

  codeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pattern = /^[a-zA-Z0-9-_]+$/;
      if (control.value && !pattern.test(control.value)) {
        return { invalidCode: true };
      }
      return null;
    };
  }

  descriptionValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pattern = /^[a-zA-Z0-9.,?!:;'()\[\]\"&_ -\/<>]+$/;
      if (control.value && !pattern.test(control.value)) {
        return { invalidDescription: true };
      }
      return null;
    };
  }
}
