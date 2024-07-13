import { Component, Inject } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { AddFormComponent } from '../add-form/add-form.component';
import { AddDataService } from '../service/add-data.service';
import { Data } from 'src/app/model/data';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-model-validation',
  templateUrl: './model-validation.component.html',
  styleUrls: ['./model-validation.component.scss'],
})
export class ModelValidationComponent {
  selectedMenu: string = 'development';
  listOfData: Data[] = [];
  checked = false;
  loading = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  isVisible = false;

  constructor(
    @Inject(AddDataService) private addService: AddDataService,
    private modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.addService.getListOfData().subscribe((data: Data[]) => {
      console.log(data);
      this.listOfData = data;
    });
  }

  onMenuClick(item: string): void {
    this.selectedMenu = item;
  }

  showModal(): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Add Genesis Project',
      nzContent: AddFormComponent,
      nzFooter: null,
      nzData: {
        projectType: this.selectedMenu,
      },
    });
  }

  editModal(data: Data): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Edit Genesis Project',
      nzContent: EditComponent,
      nzFooter: null,
      nzData: {
        data,
        projectName: 'validation',
      },
    });
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
