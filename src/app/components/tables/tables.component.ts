import { Component, OnInit, Input } from "@angular/core";
import { Data } from "../../entities/table";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.css"]
})
export class TablesComponent implements OnInit {
  @Input()
  data: Data;

  constructor() {
    this.data = new Data();
  }
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: Data[] = [];
  listOfAllData: Data[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;

  currentPageDataChange($event: Data[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(
      item => this.mapOfCheckedId[item.id]
    );
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfAllData.filter(
      item => this.mapOfCheckedId[item.id]
    ).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(
      item => (this.mapOfCheckedId[item.id] = value)
    );
    this.refreshStatus();
  }

  operateData(): void {
    this.isOperating = true;
    setTimeout(() => {
      this.listOfAllData.forEach(
        item => (this.mapOfCheckedId[item.id] = false)
      );
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfAllData.push(
      {
        id: 1,
        name: `Pavan`,
        age: 23,
        address: `Tirupati`
      },
      {
        id: 2,
        name: `Bhargav`,
        age: 24,
        address: `Hyderabad`
      },
      {
        id: 3,
        name: `Sai`,
        age: 23,
        address: `Landon`
      },
      {
        id: 4,
        name: `sivaji`,
        age: 25,
        address: `ongole`
      },
      {
        id: 5,
        name: `Narendra`,
        age: 65,
        address: `London`
      },
      {
        id: 6,
        name: `King`,
        age: 32,
        address: `Park Lane no. 1`
      },
      {
        id: 7,
        name: `Edward`,
        age: 32,
        address: ` Lane no. 1`
      },
      {
        id: 8,
        name: ` King`,
        age: 32,
        address: `London, Park Lane no. 1`
      },
      {
        id: 9,
        name: `Edward King`,
        age: 32,
        address: `London,`
      },
      {
        id: 10,
        name: `k.Bhargav`,
        age: 32,
        address: `BN kandriga,`
      },
      {
        id: 11,
        name: `Pavan`,
        age: 23,
        address: `Tirupati`
      },
      {
        id: 12,
        name: `Bhargav`,
        age: 24,
        address: `Hyderabad`
      },
      {
        id: 13,
        name: `Sai`,
        age: 23,
        address: `Landon`
      },
      {
        id: 14,
        name: `sivaji`,
        age: 25,
        address: `ongole`
      },
      {
        id: 15,
        name: `Narendra`,
        age: 65,
        address: `London`
      },
      {
        id: 16,
        name: `King`,
        age: 32,
        address: `Park Lane no. 1`
      },
      {
        id: 17,
        name: `Edward`,
        age: 32,
        address: ` Lane no. 1`
      },
      {
        id: 18,
        name: ` King`,
        age: 32,
        address: `London, Park Lane no. 1`
      },
      {
        id: 19,
        name: `Edward King`,
        age: 32,
        address: `London,`
      },
      {
        id: 20,
        name: `k.Bhargav`,
        age: 32,
        address: `BN kandriga,`
      },
      {
        id: 21,
        name: `Pavan`,
        age: 23,
        address: `Tirupati`
      },
      {
        id: 22,
        name: `Bhargav`,
        age: 24,
        address: `Hyderabad`
      },
      {
        id: 23,
        name: `Sai`,
        age: 23,
        address: `Landon`
      },
      {
        id: 24,
        name: `sivaji`,
        age: 25,
        address: `ongole`
      },
      {
        id: 25,
        name: `Narendra`,
        age: 65,
        address: `London`
      },
      {
        id: 26,
        name: `King`,
        age: 32,
        address: `Park Lane no. 1`
      },
      {
        id: 27,
        name: `Edward`,
        age: 32,
        address: ` Lane no. 1`
      },
      {
        id: 28,
        name: ` King`,
        age: 32,
        address: `London, Park Lane no. 1`
      },
      {
        id: 29,
        name: `Edward King`,
        age: 32,
        address: `London,`
      },
      {
        id: 30,
        name: `k.Bhargav`,
        age: 32,
        address: `BN kandriga,`
      },
      {
        id: 31,
        name: `Pavan`,
        age: 23,
        address: `Tirupati`
      },
      {
        id: 32,
        name: `Bhargav`,
        age: 24,
        address: `Hyderabad`
      },
      {
        id: 33,
        name: `Sai`,
        age: 23,
        address: `Landon`
      },
      {
        id: 34,
        name: `sivaji`,
        age: 25,
        address: `ongole`
      },
      {
        id: 35,
        name: `Narendra`,
        age: 65,
        address: `London`
      },
      {
        id: 36,
        name: `King`,
        age: 32,
        address: `Park Lane no. 1`
      },
      {
        id: 37,
        name: `Edward`,
        age: 32,
        address: ` Lane no. 1`
      },
      {
        id: 38,
        name: ` King`,
        age: 32,
        address: `London, Park Lane no. 1`
      },
      {
        id: 39,
        name: `Edward King`,
        age: 32,
        address: `London,`
      },
      {
        id: 40,
        name: `k.Bhargav`,
        age: 32,
        address: `BN kandriga,`
      },
    );
  }
}
