import { FieldControlService } from './../field-control.service';
import { FormGroup } from '@angular/forms';
import { BaseField } from './../fields/base-field';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: BaseField<any>[];
  @Input() submitButtonText: string;
  @Output() submitted = new EventEmitter<any>();
  form: FormGroup;

  constructor(
    private fieldControlService: FieldControlService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.form = this.fieldControlService.toFormGroup(this.fields);
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }

  addField(field: BaseField<any>) {
    this.fields.push(field);
    this.form = this.fieldControlService.toFormGroup(this.fields);
    this.cd.detectChanges();
  }
}
