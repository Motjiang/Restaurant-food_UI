import { Component } from '@angular/core';
import { GetAppComponent } from "../get-app/get-app.component";

@Component({
  selector: 'app-customer-feedback',
  standalone: true,
  imports: [GetAppComponent],
  template: `
  <section class="section__container client__container" id="client">
  <div class="client__image">
    <img src="assets/client.png" alt="client" />
  </div>
  <div class="client__content">
    <p class="section__subheader">WHAT THEY SAY</p>
    <h2 class="section__header">What Our Customers Say About Us</h2>
    <p class="section__description">
      "The Food is absolutely remarkable! Their menu offers an incredible variety of delicious dishes, catering to all tastes. What truly makes The Food stand out is their top-notch service. Their delivery is exceptionally quick, ensuring your meal arrives fresh and piping hot."
    </p>
    <div class="client__details">
      <img src="assets/user.jpg" alt="client" />
      <div>
        <h4>Brilliant Walker</h4>
        <h5>Food Enthusiast</h5>
      </div>
    </div>
    <div class="client__rating">
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-fill"></i></span>
      <span><i class="ri-star-line"></i></span>
      <span>4.8</span>
    </div>
  </div>
</section>

    <app-get-app/>
  `,
  styleUrl: './customer-feedback.component.css'
})
export class CustomerFeedbackComponent {

}
