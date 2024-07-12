import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from 'src/app/model/data';

@Injectable()
export class AddDataService {
  private listOfData: Data[] = [];
  private listOfDataSubject = new BehaviorSubject<Data[]>([]);

  constructor() {
    this.listOfDataSubject.next(
      new Array(16).fill(0).map((_, index) => ({
        key: `${index}`,
        name: `Project ${index + 1}`,
        code: `PROJECT_${index + 1}`,
        description: `This is project ${index}`,
        created: this.getDate(new Date()),
      }))
    );
  }

  generatedListOfData(): Data[] {
    return (this.listOfData = new Array(16).fill(0).map((_, index) => ({
      key: `${index}`,
      name: `Project ${index + 1}`,
      code: `PROJECT_${index + 1}`,
      description: `This is project ${index}`,
      created: this.getDate(new Date()),
    })));
  }

  getListOfData(): Observable<Data[]> {
    return this.listOfDataSubject.asObservable();
  }

  addToData(newData: Data): void {
    const currentData = this.listOfDataSubject.getValue();
    newData.created = this.getDate(new Date());
    const updatedData = [...currentData, newData];
    this.listOfDataSubject.next(updatedData);
  }

  private padTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  private getDate(date: Date, dateDiveder: string = '-'): string {
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
