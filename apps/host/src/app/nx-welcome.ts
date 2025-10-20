import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, RouterModule],
  template: `
    <style>
      .home-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
      }

      .hero-section {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 4rem 2rem;
        text-align: center;
        margin-bottom: 3rem;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      }

      .hero-subtitle {
        font-size: 1.4rem;
        font-weight: 300;
        margin-bottom: 2rem;
        opacity: 0.9;
      }

      .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cta-button {
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }

      .cta-primary {
        background: #ff6b6b;
        color: white;
      }

      .cta-primary:hover {
        background: #ff5252;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
      }

      .cta-secondary {
        background: rgba(255,255,255,0.2);
        color: white;
        border: 2px solid rgba(255,255,255,0.3);
      }

      .cta-secondary:hover {
        background: rgba(255,255,255,0.3);
        transform: translateY(-2px);
      }

      .features-section {
        max-width: 1200px;
        margin: 0 auto;
        padding: 3rem 2rem;
      }

      .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        color: #2c3e50;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
      }

      .feature-card {
        background: white;
        border-radius: 15px;
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid #f0f0f0;
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        text-align: center;
      }

      .feature-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .feature-description {
        color: #7f8c8d;
        line-height: 1.6;
      }

      .trending-section {
        background: #f8f9fa;
        padding: 4rem 2rem;
      }

      .trending-products {
        max-width: 1200px;
        margin: 0 auto;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
      }

      .product-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
      }

      .product-card:hover {
        transform: scale(1.05);
      }

      .product-image {
        width: 100%;
        height: 200px;
        background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: #bbb;
      }

      .product-info {
        padding: 1.5rem;
      }

      .product-name {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #2c3e50;
      }

      .product-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: #e74c3c;
        margin-bottom: 0.5rem;
      }

      .product-rating {
        color: #f39c12;
        margin-bottom: 1rem;
      }

      .add-to-cart {
        width: 100%;
        padding: 0.8rem;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .add-to-cart:hover {
        background: #2980b9;
      }

      .stats-section {
        background: #2c3e50;
        color: white;
        padding: 3rem 2rem;
        text-align: center;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }

      .stat-item {
        padding: 1rem;
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #3498db;
      }

      .stat-label {
        font-size: 1.1rem;
        opacity: 0.9;
      }

      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }
        
        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }
        
        .cta-button {
          width: 100%;
          max-width: 300px;
        }
        
        .features-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>

    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1 class="hero-title">Welcome to ACME Store</h1>
        <p class="hero-subtitle">
          Discover amazing products at unbeatable prices. Your one-stop shop for everything you need!
        </p>
        <div class="cta-buttons">
          <a routerLink="/shop" class="cta-button cta-primary">Start Shopping</a>
          <a routerLink="/about" class="cta-button cta-secondary">Learn More</a>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <h2 class="section-title">Why Choose ACME Store?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚚</div>
            <h3 class="feature-title">Fast Delivery</h3>
            <p class="feature-description">
              Get your orders delivered within 24-48 hours with our express shipping service.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💎</div>
            <h3 class="feature-title">Premium Quality</h3>
            <p class="feature-description">
              All our products are carefully selected and tested to ensure the highest quality standards.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Secure Shopping</h3>
            <p class="feature-description">
              Shop with confidence using our secure payment system and buyer protection guarantee.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">Best Prices</h3>
            <p class="feature-description">
              We offer competitive prices and regular discounts to give you the best value for money.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📞</div>
            <h3 class="feature-title">24/7 Support</h3>
            <p class="feature-description">
              Our customer support team is available around the clock to assist you with any questions.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">↩️</div>
            <h3 class="feature-title">Easy Returns</h3>
            <p class="feature-description">
              Not satisfied? Return your purchase within 30 days for a full refund, no questions asked.
            </p>
          </div>
        </div>
      </section>

      <!-- Trending Products Section -->
      <section class="trending-section">
        <div class="trending-products">
          <h2 class="section-title">Trending Products</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-image">📱</div>
              <div class="product-info">
                <h3 class="product-name">Smartphone Pro Max</h3>
                <div class="product-price">$899.99</div>
                <div class="product-rating">⭐⭐⭐⭐⭐ (4.8)</div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">💻</div>
              <div class="product-info">
                <h3 class="product-name">Ultra Laptop</h3>
                <div class="product-price">$1,299.99</div>
                <div class="product-rating">⭐⭐⭐⭐⭐ (4.9)</div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">🎧</div>
              <div class="product-info">
                <h3 class="product-name">Wireless Headphones</h3>
                <div class="product-price">$199.99</div>
                <div class="product-rating">⭐⭐⭐⭐⭐ (4.7)</div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
            <div class="product-card">
              <div class="product-image">⌚</div>
              <div class="product-info">
                <h3 class="product-name">Smart Watch</h3>
                <div class="product-price">$349.99</div>
                <div class="product-rating">⭐⭐⭐⭐⭐ (4.6)</div>
                <button class="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <h2 class="section-title">Trusted by Millions</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10M+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50K+</div>
            <div class="stat-label">Products</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Countries</div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}