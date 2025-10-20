import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <style>
      .cart-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .cart-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .cart-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .cart-subtitle {
        font-size: 1.2rem;
        color: #7f8c8d;
        margin-bottom: 2rem;
      }

      .cart-content {
        display: grid;
        grid-template-columns: 1fr 350px;
        gap: 2rem;
        align-items: start;
      }

      .cart-items {
        background: white;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        overflow: hidden;
      }

      .cart-items-header {
        background: #f8f9fa;
        padding: 1.5rem;
        border-bottom: 1px solid #e9ecef;
      }

      .cart-items-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin: 0;
      }

      .cart-item {
        padding: 1.5rem;
        border-bottom: 1px solid #f1f3f4;
        display: flex;
        gap: 1rem;
        align-items: center;
        transition: background-color 0.3s ease;
      }

      .cart-item:hover {
        background-color: #f8f9fa;
      }

      .cart-item:last-child {
        border-bottom: none;
      }

      .item-image {
        width: 80px;
        height: 80px;
        background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: #bbb;
        flex-shrink: 0;
      }

      .item-details {
        flex: 1;
        min-width: 0;
      }

      .item-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }

      .item-description {
        font-size: 0.9rem;
        color: #7f8c8d;
        margin-bottom: 0.5rem;
        line-height: 1.4;
      }

      .item-seller {
        font-size: 0.8rem;
        color: #95a5a6;
      }

      .item-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: #e74c3c;
        margin-right: 1rem;
        flex-shrink: 0;
      }

      .quantity-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-right: 1rem;
        flex-shrink: 0;
      }

      .quantity-btn {
        width: 32px;
        height: 32px;
        border: 2px solid #e9ecef;
        background: white;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        transition: all 0.3s ease;
      }

      .quantity-btn:hover {
        border-color: #3498db;
        background: #3498db;
        color: white;
      }

      .quantity-input {
        width: 50px;
        text-align: center;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        padding: 0.5rem;
        font-weight: 600;
      }

      .remove-item {
        padding: 0.5rem;
        background: #ecf0f1;
        color: #7f8c8d;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        flex-shrink: 0;
      }

      .remove-item:hover {
        background: #e74c3c;
        color: white;
      }

      .cart-summary {
        background: white;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        padding: 2rem;
        position: sticky;
        top: 2rem;
      }

      .summary-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1.5rem;
      }

      .summary-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #f1f3f4;
      }

      .summary-row:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      .summary-label {
        color: #7f8c8d;
        font-weight: 500;
      }

      .summary-value {
        font-weight: 600;
        color: #2c3e50;
      }

      .total-row {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2c3e50;
        border-top: 2px solid #e9ecef;
        padding-top: 1rem;
        margin-top: 1rem;
      }

      .promo-section {
        margin-bottom: 2rem;
      }

      .promo-input {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .promo-code {
        flex: 1;
        padding: 0.75rem;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 0.9rem;
      }

      .apply-promo {
        padding: 0.75rem 1.5rem;
        background: #27ae60;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .apply-promo:hover {
        background: #229954;
      }

      .checkout-btn {
        width: 100%;
        padding: 1rem;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
        margin-bottom: 1rem;
      }

      .checkout-btn:hover {
        background: #2980b9;
      }

      .continue-shopping {
        width: 100%;
        padding: 1rem;
        background: transparent;
        color: #3498db;
        border: 2px solid #3498db;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .continue-shopping:hover {
        background: #3498db;
        color: white;
      }

      .empty-cart {
        text-align: center;
        padding: 4rem 2rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
      }

      .empty-cart-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        opacity: 0.5;
      }

      .empty-cart-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      .empty-cart-text {
        color: #7f8c8d;
        margin-bottom: 2rem;
      }

      .recommended-section {
        margin-top: 3rem;
        background: #f8f9fa;
        padding: 2rem;
        border-radius: 15px;
      }

      .recommended-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 1.5rem;
        text-align: center;
      }

      .recommended-products {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
      }

      .recommended-item {
        background: white;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .recommended-item:hover {
        transform: translateY(-3px);
      }

      .recommended-image {
        width: 100%;
        height: 120px;
        background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: #bbb;
        margin-bottom: 1rem;
      }

      .recommended-name {
        font-size: 0.9rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
        line-height: 1.3;
      }

      .recommended-price {
        font-size: 1rem;
        font-weight: 700;
        color: #e74c3c;
      }

      .security-badges {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #7f8c8d;
      }

      .security-badge {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      @media (max-width: 768px) {
        .cart-title {
          font-size: 2.5rem;
        }

        .cart-content {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        .cart-summary {
          position: static;
          order: -1;
        }

        .cart-item {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        .item-image {
          align-self: center;
        }

        .quantity-controls {
          margin: 0;
          align-self: center;
        }

        .item-price {
          margin: 0;
          align-self: center;
        }

        .remove-item {
          align-self: center;
        }

        .recommended-products {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
      }
    </style>

    <div class="cart-container">
      <!-- Cart Header -->
      <header class="cart-header">
        <h1 class="cart-title">🛒 Shopping Cart</h1>
        <p class="cart-subtitle">Review your items and checkout when ready</p>
      </header>

      <!-- Cart Content -->
      <div class="cart-content">
        <!-- Cart Items -->
        <div class="cart-items">
          <div class="cart-items-header">
            <h2 class="cart-items-title">Your Items (4)</h2>
          </div>

          <!-- Cart Item 1 -->
          <div class="cart-item">
            <div class="item-image">📱</div>
            <div class="item-details">
              <h3 class="item-name">iPhone 15 Pro Max 256GB</h3>
              <p class="item-description">Latest flagship smartphone with titanium design</p>
              <p class="item-seller">Sold by Apple Store</p>
            </div>
            <div class="item-price">$1,199.99</div>
            <div class="quantity-controls">
              <button class="quantity-btn">−</button>
              <input type="number" class="quantity-input" value="1" min="1">
              <button class="quantity-btn">+</button>
            </div>
            <button class="remove-item">🗑️</button>
          </div>

          <!-- Cart Item 2 -->
          <div class="cart-item">
            <div class="item-image">🎧</div>
            <div class="item-details">
              <h3 class="item-name">Sony WH-1000XM5</h3>
              <p class="item-description">Industry-leading noise canceling wireless headphones</p>
              <p class="item-seller">Sold by Sony Electronics</p>
            </div>
            <div class="item-price">$349.99</div>
            <div class="quantity-controls">
              <button class="quantity-btn">−</button>
              <input type="number" class="quantity-input" value="2" min="1">
              <button class="quantity-btn">+</button>
            </div>
            <button class="remove-item">🗑️</button>
          </div>

          <!-- Cart Item 3 -->
          <div class="cart-item">
            <div class="item-image">⌚</div>
            <div class="item-details">
              <h3 class="item-name">Apple Watch Series 9</h3>
              <p class="item-description">Advanced fitness tracking and health monitoring</p>
              <p class="item-seller">Sold by Apple Store</p>
            </div>
            <div class="item-price">$399.99</div>
            <div class="quantity-controls">
              <button class="quantity-btn">−</button>
              <input type="number" class="quantity-input" value="1" min="1">
              <button class="quantity-btn">+</button>
            </div>
            <button class="remove-item">🗑️</button>
          </div>

          <!-- Cart Item 4 -->
          <div class="cart-item">
            <div class="item-image">👕</div>
            <div class="item-details">
              <h3 class="item-name">Premium Cotton T-Shirt</h3>
              <p class="item-description">Soft, comfortable, and stylish organic cotton t-shirt</p>
              <p class="item-seller">Sold by Fashion Co.</p>
            </div>
            <div class="item-price">$29.99</div>
            <div class="quantity-controls">
              <button class="quantity-btn">−</button>
              <input type="number" class="quantity-input" value="3" min="1">
              <button class="quantity-btn">+</button>
            </div>
            <button class="remove-item">🗑️</button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="cart-summary">
          <h2 class="summary-title">Order Summary</h2>

          <!-- Promo Code Section -->
          <div class="promo-section">
            <div class="promo-input">
              <input type="text" class="promo-code" placeholder="Enter promo code">
              <button class="apply-promo">Apply</button>
            </div>
          </div>

          <!-- Summary Details -->
          <div class="summary-row">
            <span class="summary-label">Subtotal (7 items)</span>
            <span class="summary-value">$2,269.94</span>
          </div>

          <div class="summary-row">
            <span class="summary-label">Shipping</span>
            <span class="summary-value">$15.99</span>
          </div>

          <div class="summary-row">
            <span class="summary-label">Tax</span>
            <span class="summary-value">$181.59</span>
          </div>

          <div class="summary-row">
            <span class="summary-label">Discount</span>
            <span class="summary-value" style="color: #27ae60;">−$50.00</span>
          </div>

          <div class="summary-row total-row">
            <span class="summary-label">Total</span>
            <span class="summary-value">$2,417.52</span>
          </div>

          <!-- Action Buttons -->
          <button class="checkout-btn">Proceed to Checkout</button>
          <button class="continue-shopping">Continue Shopping</button>

          <!-- Security Badges -->
          <div class="security-badges">
            <div class="security-badge">
              <span>🔒</span>
              <span>Secure</span>
            </div>
            <div class="security-badge">
              <span>🚚</span>
              <span>Fast Shipping</span>
            </div>
            <div class="security-badge">
              <span>↩️</span>
              <span>Easy Returns</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommended Products -->
      <div class="recommended-section">
        <h2 class="recommended-title">You Might Also Like</h2>
        <div class="recommended-products">
          <div class="recommended-item">
            <div class="recommended-image">💻</div>
            <div class="recommended-name">MacBook Air M3</div>
            <div class="recommended-price">$1,299.99</div>
          </div>
          <div class="recommended-item">
            <div class="recommended-image">📚</div>
            <div class="recommended-name">JavaScript Guide</div>
            <div class="recommended-price">$49.99</div>
          </div>
          <div class="recommended-item">
            <div class="recommended-image">🎮</div>
            <div class="recommended-name">PlayStation 5</div>
            <div class="recommended-price">$499.99</div>
          </div>
          <div class="recommended-item">
            <div class="recommended-image">🏠</div>
            <div class="recommended-name">Smart Camera</div>
            <div class="recommended-price">$89.99</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}