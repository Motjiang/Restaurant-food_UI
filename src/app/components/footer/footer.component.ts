import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#" class="logo">
              <!-- <img src="assets/logo.png" alt="logo" /> -->
              <span>The Food |</span>
            </a>
          </div>
          <p class="section__description">
            Our mission is to satisfy your hunger with delicious food, delivered
            quickly and free of charge.
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-twitter-fill"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>About</h4>
          <ul class="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <ul class="footer__links">
            <li><a href="#">Why The Food?</a></li>
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Support</h4>
          <ul class="footer__links">
            <li><a href="#">Account</a></li>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Contact Us</a></li>
            <!-- <li><a href="#">Accessibility</a></li> -->
          </ul>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © {{ currentYear }} Motjiang Brilliant Nhlamolo. All rights
        reserved.
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
