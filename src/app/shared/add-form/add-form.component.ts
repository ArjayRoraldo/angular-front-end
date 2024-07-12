import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidator } from './service/custom-validator.service';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AddDataService } from '../service/add-data.service';
import { Data } from 'src/app/model/data';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  validateForm: FormGroup<{
    name: FormControl;
    code: FormControl;
    description: FormControl;
  }>;

  projectType: { [key: string]: string } = {
    development: 'Model Development',
    validation: 'Model Validation',
  };

  selectedProject = 'Model Development';

  constructor(
    @Inject(CustomValidator) private customValidatorService: CustomValidator,
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private addService: AddDataService
  ) {
    this.validateForm = this.fb.group({
      name: [
        '',
        [Validators.required, this.customValidatorService.nameValidator()],
      ],
      code: [
        '',
        [Validators.required, this.customValidatorService.codeValidator()],
      ],
      description: ['', this.customValidatorService.descriptionValidator()],
    });
  }

  ngOnInit(): void {
    const receiveProjectType: string =
      this.modalRef.getConfig().nzData.projectType;

    this.selectedProject = this.projectType[receiveProjectType];
  }

  getFormControlValidationStatus(controlName: string): string {
    const control = this.validateForm.get(controlName);
    return control?.dirty || control?.touched
      ? control.invalid
        ? 'error'
        : 'success'
      : '';
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.addService.addToData({
        name: this.validateForm.value.name,
        code: this.validateForm.value.code,
        description: this.validateForm.value.description,
      } as Data);
      this.modalRef.close();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
