import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { BaseField } from '../fields/base-field';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent {
  @Input() field: BaseField<any>;
  @Input() control: AbstractControl;

  constructor() { }

  get isValid() {
    return this.control.valid;
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
  }

}
