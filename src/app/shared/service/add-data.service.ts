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
      description: `This is project ${index + 1}`,
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

  updateData(update: Data): void {
    const currentData = this.listOfDataSubject.getValue();
    update.created = this.getDate(new Date());

    console.log('@@@@@@@@@', update);

    const updatedData = currentData.map((item) =>
      item.key === update.key ? update : item
    );
    console.log(updatedData);
    this.listOfDataSubject.next(updatedData);
  }

  private padTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }

  private getDate(date: Date): Date {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
  }
}
