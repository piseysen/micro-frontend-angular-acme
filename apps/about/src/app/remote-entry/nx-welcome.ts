import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <style>
      .about-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .hero-section {
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: white;
        padding: 6rem 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 4rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .hero-subtitle {
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 2rem;
        opacity: 0.9;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .story-section, .mission-section, .values-section, .team-section, .contact-section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #2c3e50;
        text-align: center;
      }

      .section-content {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #7f8c8d;
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      .mission-section {
        background: #f8f9fa;
      }

      .mission-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .mission-card {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        text-align: center;
      }

      .mission-card:hover {
        transform: translateY(-5px);
      }

      .mission-icon {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }

      .mission-title {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      .mission-description {
        color: #7f8c8d;
        line-height: 1.6;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .value-item {
        text-align: center;
        padding: 2rem;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        border-radius: 15px;
        transition: all 0.3s ease;
      }

      .value-item:hover {
        background: linear-gradient(135deg, #3498db 0%, #667eea 100%);
        color: white;
        transform: scale(1.05);
      }

      .value-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .value-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      .value-description {
        font-size: 0.9rem;
        opacity: 0.8;
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
      }

      .team-member {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        text-align: center;
      }

      .team-member:hover {
        transform: translateY(-5px);
      }

      .member-image {
        width: 100%;
        height: 250px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: white;
      }

      .member-info {
        padding: 2rem;
      }

      .member-name {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .member-role {
        font-size: 1rem;
        color: #3498db;
        font-weight: 500;
        margin-bottom: 1rem;
      }

      .member-bio {
        font-size: 0.9rem;
        color: #7f8c8d;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }

      .social-link {
        width: 40px;
        height: 40px;
        background: #ecf0f1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        font-size: 1.2rem;
      }

      .social-link:hover {
        background: #3498db;
        color: white;
        transform: scale(1.1);
      }

      .stats-section {
        background: #2c3e50;
        color: white;
        padding: 4rem 2rem;
        text-align: center;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        max-width: 1000px;
        margin: 3rem auto 0;
      }

      .stat-item {
        padding: 2rem;
      }

      .stat-number {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #3498db;
      }

      .stat-label {
        font-size: 1.1rem;
        opacity: 0.9;
      }

      .contact-section {
        background: #f8f9fa;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 3rem;
        margin-top: 3rem;
      }

      .contact-info {
        background: white;
        padding: 2.5rem;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }

      .contact-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .contact-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        padding: 0.5rem 0;
      }

      .contact-icon {
        font-size: 1.2rem;
        color: #3498db;
        width: 24px;
      }

      .contact-text {
        color: #7f8c8d;
      }

      .timeline-section {
        padding: 4rem 2rem;
        max-width: 1000px;
        margin: 0 auto;
      }

      .timeline {
        position: relative;
        padding-left: 2rem;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 1rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #3498db;
      }

      .timeline-item {
        position: relative;
        margin-bottom: 3rem;
        padding-left: 3rem;
      }

      .timeline-dot {
        position: absolute;
        left: -3rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        background: #3498db;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 0 3px #3498db;
      }

      .timeline-year {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .timeline-event {
        font-size: 1rem;
        color: #7f8c8d;
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 3rem;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
        }
        
        .section-title {
          font-size: 2rem;
        }
        
        .mission-cards, .values-grid, .team-grid, .contact-grid {
          grid-template-columns: 1fr;
        }
        
        .timeline {
          padding-left: 1rem;
        }
        
        .timeline-item {
          padding-left: 2rem;
        }
        
        .timeline-dot {
          left: -2rem;
        }
      }
    </style>

    <div class="about-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="hero-title">About ACME Store</h1>
        <p class="hero-subtitle">
          We're more than just an e-commerce platform. We're your trusted partner in finding the perfect products for your lifestyle.
        </p>
      </section>

      <!-- Story Section -->
      <section class="story-section">
        <h2 class="section-title">Our Story</h2>
        <div class="section-content">
          <p>
            Founded in 2020, ACME Store began as a simple idea: to create an online marketplace that puts customers first. 
            What started as a small team with big dreams has grown into a global platform serving millions of customers worldwide.
          </p>
          <br>
          <p>
            Our journey has been one of constant innovation, learning, and growth. We've built not just a store, 
            but a community where quality products meet exceptional service, and where every customer feels valued and heard.
          </p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <h2 class="section-title">Our Mission</h2>
        <div class="section-content">
          <p>
            To democratize commerce by making quality products accessible to everyone, everywhere, 
            while empowering sellers to reach their full potential.
          </p>
        </div>
        <div class="mission-cards">
          <div class="mission-card">
            <div class="mission-icon">🎯</div>
            <h3 class="mission-title">Customer Focus</h3>
            <p class="mission-description">
              Every decision we make starts with our customers. We're committed to providing 
              an exceptional shopping experience that exceeds expectations.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">🌍</div>
            <h3 class="mission-title">Global Reach</h3>
            <p class="mission-description">
              We connect buyers and sellers across the globe, breaking down barriers 
              and creating opportunities for businesses of all sizes.
            </p>
          </div>
          <div class="mission-card">
            <div class="mission-icon">💡</div>
            <h3 class="mission-title">Innovation</h3>
            <p class="mission-description">
              We continuously invest in technology and innovation to improve our platform 
              and create new solutions for our community.
            </p>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">🤝</div>
            <h3 class="value-title">Trust</h3>
            <p class="value-description">Building lasting relationships through transparency and reliability</p>
          </div>
          <div class="value-item">
            <div class="value-icon">⚡</div>
            <h3 class="value-title">Speed</h3>
            <p class="value-description">Moving fast to deliver what our customers need, when they need it</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🎨</div>
            <h3 class="value-title">Excellence</h3>
            <p class="value-description">Striving for perfection in everything we do, from products to service</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🔗</div>
            <h3 class="value-title">Connection</h3>
            <p class="value-description">Bringing people together through commerce and shared experiences</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🌱</div>
            <h3 class="value-title">Growth</h3>
            <p class="value-description">Empowering businesses and individuals to reach their full potential</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🛡️</div>
            <h3 class="value-title">Security</h3>
            <p class="value-description">Protecting our community with robust security and privacy measures</p>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <h2 class="section-title">Our Impact</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10M+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500K+</div>
            <div class="stat-label">Active Sellers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50M+</div>
            <div class="stat-label">Products Sold</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Countries Served</div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2020</div>
            <div class="timeline-event">
              ACME Store founded with a vision to revolutionize online shopping. Launched with 100 products and 3 team members.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2021</div>
            <div class="timeline-event">
              Reached 1 million customers and expanded to 10 countries. Introduced our mobile app and enhanced security features.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2022</div>
            <div class="timeline-event">
              Launched marketplace platform allowing third-party sellers. Implemented AI-powered recommendations and 24/7 customer support.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2023</div>
            <div class="timeline-event">
              Achieved carbon-neutral shipping and introduced our sustainability program. Opened international fulfillment centers.
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2024</div>
            <div class="timeline-event">
              Reached 10 million customers globally and launched ACME Business solutions for enterprise clients.
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <h2 class="section-title">Meet Our Leadership</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">👨‍💼</div>
            <div class="member-info">
              <h3 class="member-name">John Smith</h3>
              <p class="member-role">Chief Executive Officer</p>
              <p class="member-bio">
                With over 15 years in e-commerce, John leads our vision to make quality products accessible worldwide.
              </p>
              <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐦</a>
              </div>
            </div>
          </div>
          <div class="team-member">
            <div class="member-image">👩‍💼</div>
            <div class="member-info">
              <h3 class="member-name">Sarah Johnson</h3>
              <p class="member-role">Chief Technology Officer</p>
              <p class="member-bio">
                Sarah drives our technology innovation, ensuring our platform remains cutting-edge and scalable.
              </p>
              <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐦</a>
              </div>
            </div>
          </div>
          <div class="team-member">
            <div class="member-image">👨‍💻</div>
            <div class="member-info">
              <h3 class="member-name">Michael Chen</h3>
              <p class="member-role">Chief Product Officer</p>
              <p class="member-bio">
                Michael oversees product development, ensuring every feature enhances our customer experience.
              </p>
              <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐦</a>
              </div>
            </div>
          </div>
          <div class="team-member">
            <div class="member-image">👩‍💻</div>
            <div class="member-info">
              <h3 class="member-name">Emily Davis</h3>
              <p class="member-role">Chief Marketing Officer</p>
              <p class="member-bio">
                Emily leads our marketing efforts, connecting with customers and building our global brand presence.
              </p>
              <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <h2 class="section-title">Get in Touch</h2>
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="contact-title">
              <span>🏢</span>
              Headquarters
            </h3>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text">123 Commerce Street, Tech City, TC 12345</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+1 (555) 123-4567</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">hello@acmestore.com</span>
            </div>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">
              <span>🛒</span>
              Customer Support
            </h3>
            <div class="contact-item">
              <span class="contact-icon">💬</span>
              <span class="contact-text">24/7 Live Chat Support</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+1 (555) 987-6543</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">support@acmestore.com</span>
            </div>
          </div>
          <div class="contact-info">
            <h3 class="contact-title">
              <span>🤝</span>
              Business Partnerships
            </h3>
            <div class="contact-item">
              <span class="contact-icon">🏪</span>
              <span class="contact-text">Seller Partnership Program</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+1 (555) 456-7890</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span class="contact-text">partners@acmestore.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}