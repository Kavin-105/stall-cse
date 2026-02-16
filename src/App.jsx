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
          <a href="tel:+918270274586" className="contact-link">+91 82702 74586</a>
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
            <div className="items-list">
              {selectedCategory.items.map((item) => (
                <div key={item.id} className="menu-item fade-in">
                  {item.preOrder && <div className="pre-order-badge">Pre-order</div>}
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <div className="item-header">
                      <h4>{item.name}</h4>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer fade-in">
        <div className="footer-content">
          <p className="copyright">&copy; 2026 Savory Delights. All rights reserved.</p>
          <div className="member-list">
            <span>Managed by:</span>
            <p>Kavin R • Manojh B • Manedeep M • Jayaraj M</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
