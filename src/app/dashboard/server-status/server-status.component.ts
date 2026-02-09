import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: { id: 'server-status' },
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
