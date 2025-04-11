import { Component, OnInit } from '@angular/core';
import { CountdownComponent } from "./countdown/countdown.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CountdownComponent],
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

}
