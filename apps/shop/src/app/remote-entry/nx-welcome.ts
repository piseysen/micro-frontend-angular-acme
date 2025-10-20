import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <style>
      .shop-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #333;
        padding: 2rem 1rem;
      }

      .shop-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .shop-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: #2c3e50;
      }

      .shop-subtitle {
        font-size: 1.2rem;
        color: #7f8c8d;
        margin-bottom: 2rem;
      }

      .filter-section {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
        max-width: 1200px;
        margin: 0 auto 2rem auto;
      }

      .filter-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      }

      .filter-group {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .filter-item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .filter-label {
        font-weight: 600;
        color: #2c3e50;
        font-size: 0.9rem;
      }

      .filter-select, .search-input {
        padding: 0.75rem;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        font-size: 0.9rem;
        transition: border-color 0.3s ease;
      }

      .filter-select:focus, .search-input:focus {
        outline: none;
        border-color: #3498db;
      }

      .search-input {
        min-width: 250px;
      }

      .products-section {
        max-width: 1200px;
        margin: 0 auto;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 3rem;
      }

      .product-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        position: relative;
      }

      .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.15);
      }

      .product-image {
        width: 100%;
        height: 220px;
        background: linear-gradient(45deg, #f8f9fa, #e9ecef);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: #bbb;
        position: relative;
        overflow: hidden;
      }

      .product-badge {
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        background: #e74c3c;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
      }

      .product-badge.new {
        background: #27ae60;
      }

      .product-badge.sale {
        background: #f39c12;
      }

      .product-info {
        padding: 1.5rem;
      }

      .product-category {
        font-size: 0.8rem;
        color: #7f8c8d;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.5rem;
      }

      .product-name {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #2c3e50;
        line-height: 1.4;
      }

      .product-description {
        font-size: 0.9rem;
        color: #7f8c8d;
        margin-bottom: 1rem;
        line-height: 1.5;
      }

      .product-price-section {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .product-price {
        font-size: 1.3rem;
        font-weight: 700;
        color: #e74c3c;
      }

      .product-original-price {
        font-size: 1rem;
        color: #95a5a6;
        text-decoration: line-through;
      }

      .product-discount {
        background: #e74c3c;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
      }

      .product-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .rating-stars {
        color: #f39c12;
        font-size: 1rem;
      }

      .rating-text {
        font-size: 0.9rem;
        color: #7f8c8d;
      }

      .product-actions {
        display: flex;
        gap: 0.5rem;
      }

      .add-to-cart {
        flex: 1;
        padding: 0.9rem;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .add-to-cart:hover {
        background: #2980b9;
      }

      .wishlist-btn {
        padding: 0.9rem;
        background: #ecf0f1;
        color: #7f8c8d;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.2rem;
      }

      .wishlist-btn:hover {
        background: #e74c3c;
        color: white;
      }

      .categories-section {
        background: #f8f9fa;
        padding: 3rem 2rem;
        margin-bottom: 3rem;
      }

      .categories-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #2c3e50;
      }

      .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        max-width: 1000px;
        margin: 0 auto;
      }

      .category-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .category-card:hover {
        transform: translateY(-3px);
      }

      .category-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .category-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 0.5rem;
      }

      .category-count {
        font-size: 0.9rem;
        color: #7f8c8d;
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        margin-top: 3rem;
      }

      .pagination-btn {
        padding: 0.75rem 1rem;
        border: 2px solid #e9ecef;
        background: white;
        color: #7f8c8d;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
      }

      .pagination-btn:hover, .pagination-btn.active {
        border-color: #3498db;
        background: #3498db;
        color: white;
      }

      .load-more {
        display: block;
        margin: 3rem auto;
        padding: 1rem 2rem;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s ease;
      }

      .load-more:hover {
        background: #2980b9;
      }

      @media (max-width: 768px) {
        .shop-title {
          font-size: 2.5rem;
        }
        
        .filter-row {
          flex-direction: column;
          align-items: stretch;
        }
        
        .filter-group {
          justify-content: stretch;
        }
        
        .filter-item {
          flex: 1;
        }
        
        .search-input {
          min-width: 100%;
        }
        
        .products-grid {
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }
        
        .product-actions {
          flex-direction: column;
        }
      }
    </style>

    <div class="shop-container">
      <!-- Shop Header -->
      <header class="shop-header">
        <h1 class="shop-title">🛍️ ACME Shop</h1>
        <p class="shop-subtitle">Discover amazing products from trusted sellers worldwide</p>
      </header>

      <!-- Categories Section -->
      <section class="categories-section">
        <h2 class="categories-title">Shop by Category</h2>
        <div class="categories-grid">
          <div class="category-card">
            <div class="category-icon">📱</div>
            <h3 class="category-name">Electronics</h3>
            <p class="category-count">2,847 items</p>
          </div>
          <div class="category-card">
            <div class="category-icon">👕</div>
            <h3 class="category-name">Fashion</h3>
            <p class="category-count">5,621 items</p>
          </div>
          <div class="category-card">
            <div class="category-icon">🏠</div>
            <h3 class="category-name">Home & Garden</h3>
            <p class="category-count">3,492 items</p>
          </div>
          <div class="category-card">
            <div class="category-icon">🎮</div>
            <h3 class="category-name">Gaming</h3>
            <p class="category-count">1,256 items</p>
          </div>
          <div class="category-card">
            <div class="category-icon">📚</div>
            <h3 class="category-name">Books</h3>
            <p class="category-count">8,934 items</p>
          </div>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="filter-section">
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-item">
              <label class="filter-label" for="category-filter">Category</label>
              <select id="category-filter" class="filter-select">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
                <option>Gaming</option>
                <option>Books</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="filter-label" for="price-filter">Price Range</label>
              <select id="price-filter" class="filter-select">
                <option>All Prices</option>
                <option>Under $25</option>
                <option>$25 - $50</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>Over $200</option>
              </select>
            </div>
            <div class="filter-item">
              <label class="filter-label" for="sort-filter">Sort By</label>
              <select id="sort-filter" class="filter-select">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
          <div class="filter-item">
            <label class="filter-label" for="search-input">Search Products</label>
            <input id="search-input" type="text" class="search-input" placeholder="Search for products...">
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section class="products-section">
        <div class="products-grid">
          <!-- Product 1 -->
          <div class="product-card">
            <div class="product-image">
              📱
              <span class="product-badge">Hot</span>
            </div>
            <div class="product-info">
              <div class="product-category">Electronics</div>
              <h3 class="product-name">iPhone 15 Pro Max 256GB</h3>
              <p class="product-description">Latest flagship smartphone with titanium design and advanced camera system</p>
              <div class="product-price-section">
                <span class="product-price">$1,199.99</span>
                <span class="product-original-price">$1,299.99</span>
                <span class="product-discount">-8%</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.8) 2,347 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="product-card">
            <div class="product-image">
              💻
              <span class="product-badge new">New</span>
            </div>
            <div class="product-info">
              <div class="product-category">Electronics</div>
              <h3 class="product-name">MacBook Air M3 13"</h3>
              <p class="product-description">Ultra-thin laptop with M3 chip for exceptional performance and battery life</p>
              <div class="product-price-section">
                <span class="product-price">$1,299.99</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.9) 1,892 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="product-card">
            <div class="product-image">
              🎧
              <span class="product-badge sale">Sale</span>
            </div>
            <div class="product-info">
              <div class="product-category">Electronics</div>
              <h3 class="product-name">Sony WH-1000XM5</h3>
              <p class="product-description">Industry-leading noise canceling wireless headphones with premium sound</p>
              <div class="product-price-section">
                <span class="product-price">$349.99</span>
                <span class="product-original-price">$399.99</span>
                <span class="product-discount">-13%</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.7) 3,156 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 4 -->
          <div class="product-card">
            <div class="product-image">⌚</div>
            <div class="product-info">
              <div class="product-category">Electronics</div>
              <h3 class="product-name">Apple Watch Series 9</h3>
              <p class="product-description">Advanced fitness tracking and health monitoring with elegant design</p>
              <div class="product-price-section">
                <span class="product-price">$399.99</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.6) 1,634 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 5 -->
          <div class="product-card">
            <div class="product-image">👕</div>
            <div class="product-info">
              <div class="product-category">Fashion</div>
              <h3 class="product-name">Premium Cotton T-Shirt</h3>
              <p class="product-description">Soft, comfortable, and stylish t-shirt made from 100% organic cotton</p>
              <div class="product-price-section">
                <span class="product-price">$29.99</span>
                <span class="product-original-price">$39.99</span>
                <span class="product-discount">-25%</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.5) 892 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 6 -->
          <div class="product-card">
            <div class="product-image">🎮</div>
            <div class="product-info">
              <div class="product-category">Gaming</div>
              <h3 class="product-name">PlayStation 5 Console</h3>
              <p class="product-description">Next-gen gaming console with lightning-fast loading and stunning graphics</p>
              <div class="product-price-section">
                <span class="product-price">$499.99</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.8) 5,672 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 7 -->
          <div class="product-card">
            <div class="product-image">📚</div>
            <div class="product-info">
              <div class="product-category">Books</div>
              <h3 class="product-name">JavaScript: The Complete Guide</h3>
              <p class="product-description">Comprehensive guide to modern JavaScript programming with practical examples</p>
              <div class="product-price-section">
                <span class="product-price">$49.99</span>
                <span class="product-original-price">$59.99</span>
                <span class="product-discount">-17%</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.9) 1,245 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>

          <!-- Product 8 -->
          <div class="product-card">
            <div class="product-image">🏠</div>
            <div class="product-info">
              <div class="product-category">Home & Garden</div>
              <h3 class="product-name">Smart Home Security Camera</h3>
              <p class="product-description">WiFi-enabled security camera with night vision and motion detection</p>
              <div class="product-price-section">
                <span class="product-price">$89.99</span>
                <span class="product-original-price">$119.99</span>
                <span class="product-discount">-25%</span>
              </div>
              <div class="product-rating">
                <span class="rating-stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-text">(4.4) 2,189 reviews</span>
              </div>
              <div class="product-actions">
                <button class="add-to-cart">Add to Cart</button>
                <button class="wishlist-btn">♡</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <button class="load-more">Load More Products</button>

        <!-- Pagination -->
        <div class="pagination">
          <button class="pagination-btn">← Previous</button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <button class="pagination-btn">4</button>
          <button class="pagination-btn">5</button>
          <button class="pagination-btn">Next →</button>
        </div>
      </section>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}