import { Component, OnInit } from '@angular/core';
import { SaveDataInfo } from './student.interface';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  sum = 0;
  result: any;
  constructor(public studentService: StudentService) {}

  ngOnInit(): void {}

  calculate(num1: number, nu2: number): number {
    return num1 + nu2;
  }

  saveData() {
    let info: SaveDataInfo = {
      sumVal: this.calculate(5, 5),
      name: 'Save Data Info object',
    };
    this.printInConsole(info);
    this.studentService.saveDetails(info).subscribe((res) => {
      this.result = res;
    });
  }

  printInConsole(info: SaveDataInfo): void {
    console.info(info);
  }

  studentResult(): string {
    return this.calculate(10, 20) >= 40 ? 'pass' : 'fail';
  }
}
