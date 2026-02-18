import React, { useState } from 'react';
import { menuData } from './categories/menuData';
import banner from './assets/banner.jpg';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const openCategory = (category) => {
    setSelectedCategory(category);
    document.body.style.overflow = 'hidden';
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <img
          src={banner}
          alt="Hero Food"
          className="hero-image"
        />
        <div className="hero-content fade-in">
          {/* <h1>Savory Delights</h1> */}
          {/* <p>Experience the finest selection of authentic dishes, crafted with passion and fresh ingredients.</p> */}
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-strip fade-in">
        <div className="contact-info">
          <span className="contact-label">Contact for Orders:</span>
          <div className="contact-links">
            <a href="tel:+918270274586" className="contact-link">+91 82702 74586</a>
            <span className="separator">|</span>
            <a href="tel:+919876543210" className="contact-link">+91 63836 48034</a>
            <span className="separator">|</span>
            <a href="tel:+919876543210" className="contact-link">+91 97906 55699</a>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-container">
        <div className="grid">
          {menuData.map((category) => (
            <div
              key={category.id}
              className="category-card fade-in"
              onClick={() => openCategory(category)}
            >
              {category.preOrder && <div className="pre-order-badge">Pre-orders</div>}
              <img src={category.image} alt={category.name} />
              <div className="card-overlay">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Modal Overlay */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={closeCategory}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeCategory}>&times;</button>
            <div className="modal-header">
              <h2>{selectedCategory.name}</h2>
              <p>{selectedCategory.description}</p>
            </div>
            <div className={`items-list ${selectedCategory.id === 'combos' ? 'combos-only' : ''}`}>
              {selectedCategory.items.map((item) => (
                <div key={item.id} className={`menu-item fade-in ${selectedCategory.id === 'combos' ? 'no-image' : ''}`}>
                  {item.preOrder && <div className="pre-order-badge">Pre-orders</div>}
                  {selectedCategory.id !== 'combos' && (
                    <div className="item-image-container">
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                  <div className="item-details">
                    <div className="item-main-content">
                      <h4>{item.name}</h4>
                      {selectedCategory.id !== 'combos' && <p className="item-description">{item.description}</p>}
                    </div>
                    <div className="item-footer">
                      <div className="price-container">
                        {item.old && item.new ? (
                          <>
                            <span className="old-price">{item.old}</span>
                            <span className="new-price">{item.new}</span>
                          </>
                        ) : (
                          <span className="price">{item.price || item.old || item.new}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pre-order Information */}
      <section className="pre-order-info fade-in">
        <div className="info-content">
          <h3>Pre-orders</h3>
          <p>
            To ensure the highest quality and freshness, certain specialty items marked as
            <strong> Pre-orders</strong> require advance booking. Please place your orders
            at least <strong>2-4 hours</strong> in advance for these delicacies.
          </p>
        </div>
      </section>

      {/* Parcel Charge Tag */}
      <div className="parcel-charge-tag fade-in">
        <span className="parcel-icon">📦</span>
        <span className="parcel-text">Parcel charge 10/- <sub>(for all the items)</sub></span>
      </div>

      {/* Footer */}
      <footer className="site-footer fade-in">

        <div className="member-list">
          <span>Managed by:</span>
          <p>CSE - B Boyss</p>
        </div>

      </footer>
    </div>
  );
};

export default App;
