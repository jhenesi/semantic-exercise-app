import { Injectable } from '@angular/core';
import { BaseField } from './fields/base-field';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(fields: BaseField<any>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });

    return new FormGroup(group);
  }
}
