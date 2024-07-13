import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { AddDataService } from '../service/add-data.service';
import { Data } from 'src/app/model/data';
import { CustomValidator } from '../add-form/service/custom-validator.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  validateForm: FormGroup<{
    key: FormControl;
    name: FormControl;
    code: FormControl;
    description: FormControl;
  }>;

  listOfData: Data = { name: '', code: '', description: '' };

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
      key: [],
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
    this.listOfData = this.modalRef.getConfig().nzData.data;
    this.selectedProject =
      this.projectType[this.modalRef.getConfig().nzData.projectName];
  }

  getFormControlValidationStatus(controlName: string): string {
    const control = this.validateForm.get(controlName);
    return control?.dirty || control?.touched
      ? control.invalid
        ? 'error'
        : 'success'
      : '';
  }

  updateForm(): void {
    if (this.validateForm.valid) {
      this.addService.updateData({
        key: this.listOfData.key,
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
