import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface Data {
  key: string;
  name: string;
  code: string;
  description: string;
  created?: string;
}

@Component({
  selector: 'app-model-development',
  templateUrl: './model-development.component.html',
  styleUrls: ['./model-development.component.scss'],
})
export class ModelDevelopmentComponent implements OnInit {
  listOfData: Data[] = [];
  checked = false;
  loading = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Data[] = [];
  setOfCheckedId = new Set<number>();
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.listOfData = new Array(16).fill(0).map((_, index) => ({
      key: `${index}`,
      name: `Project ${index + 1}`,
      code: `PROJECT_${index + 1}`,
      description: `This is project ${index}`,
      created: this.getDate(new Date()),
    }));
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  padTwoDigits(num: number) {
    return num.toString().padStart(2, '0');
  }

  getDate(date: Date, dateDiveder: string = '-') {
    return (
      [
        date.getFullYear(),
        this.padTwoDigits(date.getMonth() + 1),
        this.padTwoDigits(date.getDate()),
      ].join(dateDiveder) +
      ' ' +
      [
        this.padTwoDigits(date.getHours()),
        this.padTwoDigits(date.getMinutes()),
        this.padTwoDigits(date.getSeconds()),
      ].join(':')
    );
  }
}
