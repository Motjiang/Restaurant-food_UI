import { Component } from '@angular/core';
import { GetAppComponent } from "../get-app/get-app.component";

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [GetAppComponent],
  template: `
    <app-get-app/>
  `,
  styleUrl: './customer-feedback.component.css'
})
export class CustomerFeedbackComponent {

}
