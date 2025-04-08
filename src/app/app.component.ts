import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Nintendo switch 2 contagem regressiva';
  description = 'A countdown to the Nintendo Switch 2 release date.';
  imageUrl = 'https://cdn.mos.cms.futurecdn.net/2k4v3Y5c7i6x8a9g3j7z4C.jpg';
  countdownUrl = 'https://www.nintendo.com/switch/';
  countdownText = 'Nintendo Switch 2 Countdown';

 
  countdown: string = '';

  private targetDate = new Date('2025-06-05T00:00:00');

  ngOnInit(): void {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const diff = this.targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      this.countdown = 'Chegou!';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
