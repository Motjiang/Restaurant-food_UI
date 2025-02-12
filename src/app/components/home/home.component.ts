import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="section__container header__container" id="home">
        <div class="header__image">
          <img src="assets/header.png" alt="header" />
        </div>
        <div class="header__content">
          <div class="header__tag">
            More than Faster
            <img src="assets/delivery-bike.png" alt="header tag" />
          </div>
          <h1>Be The Fastest In Delivering Your <span>Food</span></h1>
          <p class="section__description">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery.
          </p>
          <div class="header__btns">
            <button class="btn">Get Started</button>
            <a href="#">
              <span><i class="ri-play-fill"></i></span>
              Watch Video
            </a>
          </div>
        </div>
      </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
