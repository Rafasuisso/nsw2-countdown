import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-countdown',
  imports: [LogoComponent],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
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

  openNintendoSite() {
  window.open('https://www.nintendo.com/pt-br/gaming-systems/switch-2/', '_blank');
}

addToCalendar() {
  const title = encodeURIComponent('Lançamento do Nintendo Switch 2');
  const details = encodeURIComponent('Acompanhe o lançamento do novo Nintendo Switch!');
  const location = encodeURIComponent('Online');
  const start = '20250715T100000Z'; // Data/hora do evento no formato UTC (ajuste conforme necessário)
  const end = '20250715T110000Z';

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
  window.open(calendarUrl, '_blank');
}

}
