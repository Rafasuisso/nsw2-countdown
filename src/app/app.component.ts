import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  targetDate = new Date('2025-06-05T00:00:00');

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    this.minutes = Math.floor((distance / (1000 * 60)) % 60);
    this.seconds = Math.floor((distance / 1000) % 60);
  }
}
