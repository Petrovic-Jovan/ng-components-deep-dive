import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: { id: 'app-tickets' },
})
export class TicketsComponent {
  private tickets: Ticket[] = [];

  get ticketsList() {
    return this.tickets;
  }

  onAddTicket(ticketData: { title: string; request: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }
}
