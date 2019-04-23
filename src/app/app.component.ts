import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private fromDate: Date;

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  private weeks = [
    'SUN',
    'MON',
    'TUE',
    'WEB',
    'THU',
    'FRI',
    'SAT'
  ];

  private month;
  private weekDay;
  private year;
  private inFirstDay: Date;
  private allDays: any[];
  private days = [];

  constructor() {
    this.fromDate = new Date();
    this.month = this.fromDate.getMonth();
    this.weekDay = this.fromDate.getDay();
    this.year = this.fromDate.getFullYear();
    this.inFirstDay = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), 1);
    this.allDays = this.getDaysInMonth(this.fromDate.getMonth(), this.fromDate.getFullYear());
    this.push();
  }


  push() {
    this.days = [];
    for (const weekDay of this.weeks) {
      if (weekDay === this.weeks[this.inFirstDay.getDay()]) {
        for (const day  of this.allDays) {
          this.days.push(day);
        }
      } else {
        this.days.push(null);
      }
    }
  }

  getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);

    }
    return days;
  }

  firstMouth() {
    this.month--;
    if (this.month < 0) {
      this.year = 11;
      this.month--;
    }
    this.inFirstDay = new Date(this.year, this.month, 1);
    this.allDays = this.getDaysInMonth(this.month, this.year);
    this.push();
  }

  secondMouth() {
    this.month++;
    if (this.month > 11) {
      this.year++;
      this.month = 0;
    }
    this.inFirstDay = new Date(this.year, this.month, 1);
    this.allDays = this.getDaysInMonth(this.month, this.year);
    this.push();
  }

  click(wfm: HTMLDivElement) {
    if (wfm.style.backgroundColor === 'red') {
      wfm.style.backgroundColor = '';
    } else {
      wfm.style.backgroundColor = 'red';
    }
  }

}
