import { Component, Inject } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Data } from 'src/app/model/data';
import { AddFormComponent } from 'src/app/shared/add-form/add-form.component';
import { AddDataService } from 'src/app/shared/service/add-data.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-model-development',
  templateUrl: './model-development.component.html',
  styleUrls: ['./model-development.component.scss'],
})
export class ModelDevelopmentComponent {
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
    });
  }

  editModal(data: Data): void {
    const modalRef: NzModalRef = this.modalService.create({
      nzTitle: 'Edit Genesis Project',
      nzContent: EditComponent,
      nzFooter: null,
      nzData: {
        data,
        projectName: 'development',
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
