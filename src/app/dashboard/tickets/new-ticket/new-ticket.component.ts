import { Component, ElementRef, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  add = output<{ title: string; request: string }>();

  onSubmit(titleInput: string, requestInput: string) {
    console.log('Submitted:', titleInput, requestInput);
    this.add.emit({ title: titleInput, request: requestInput });
    this.form?.nativeElement.reset();
  }
}
