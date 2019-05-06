import { Textfield } from './fields/textfield';
import { Injectable } from '@angular/core';
import { BaseField } from './fields/base-field';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: BaseField<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      const validators: ValidatorFn[] = [];

      if (field.required) {
        validators.push(Validators.required);
      }

      if (field instanceof Textfield) {
        if ((field as Textfield).maxLength) {
          validators.push(Validators.maxLength(field.maxLength));
        }
      }

      group[field.key] = field.required ? new FormControl(field.value || '', validators)
        : new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }
}
