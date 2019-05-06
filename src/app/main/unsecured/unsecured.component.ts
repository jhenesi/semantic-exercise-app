import { DynamicFormComponent } from './../../dynamic-forms/dynamic-form/dynamic-form.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Textfield } from 'src/app/dynamic-forms';

@Component({
  selector: 'app-unsecured',
  templateUrl: './unsecured.component.html',
  styleUrls: ['./unsecured.component.css']
})
export class UnsecuredComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) formComponent: DynamicFormComponent;
  fields = [
    new Textfield({
      key: 'field1',
      label: 'Text',
      value: '',
      type: 'text'
    }),
    new Textfield({
      key: 'field2',
      label: 'Password',
      value: '',
      type: 'password'
    }),
    new Textfield({
      key: 'field3',
      label: 'Number',
      value: '',
      type: 'number'
    })
  ];

  ngAfterViewInit() {
    this.formComponent.addField(new Textfield({
      key: 'fromparent',
      label: 'This field was added from parent',
      value: '',
      type: 'text'
    }));
  }
}
