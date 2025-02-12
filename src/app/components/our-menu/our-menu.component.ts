import { Component } from '@angular/core';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  template: `
    <section class="section__container menu__container" id="menu">
      <p class="section__subheader">OUR MENU</p>
      <h2 class="section__header">Menu That Always Makes You Fall In Love</h2>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-1.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Italian Pizza</h4>
                <h5><span>R</span>138.50</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-2.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Burrito Wrap</h4>
                <h5><span>R</span>83.00</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-3.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Red Sauce Pasta</h4>
                <h5><span>R</span>110.50</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-4.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Fresh Pan Pizza</h4>
                <h5><span>R</span>120.00</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-5.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Chicken Nuggets</h4>
                <h5><span>R</span>92.50</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="menu__card">
              <img src="assets/menu-6.jpg" alt="menu" />
              <div class="menu__card__details">
                <h4>Dum Biryani</h4>
                <h5><span>R</span>157.00</h5>
                <a href="#">
                  Order Now
                  <span><i class="ri-arrow-right-line"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './our-menu.component.css',
})
export class OurMenuComponent {}
