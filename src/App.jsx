import { useState, useEffect, useRef } from 'react';
import { menuData } from './categories/menuData';
import banner from './assets/banner.jpg';

/* ── Font injection ── */
(() => {
  if (typeof document === 'undefined' || document.getElementById('mn-fonts')) return;
  const l = document.createElement('link');
  l.id = 'mn-fonts';
  l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=DM+Mono&display=swap';
  document.head.appendChild(l);
})();

/* ── Styles ── */
const CSS = `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --ink:    #0f0d0b;
    --ink2:   #1a1713;
    --ink3:   #252018;
    --cream:  #f5f0e8;
    --warm:   #ede5d0;
    --gold:   #c8922a;
    --gold2:  #e8a83a;
    --red:    #b83232;
    --muted:  rgba(245,240,232,0.45);
    --muted2: rgba(245,240,232,0.22);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--ink);
    color: var(--cream);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--ink); }
  ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

  /* ── Nav ── */
  .mn-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    padding: 0 6vw;
    display: flex; align-items: center; justify-content: space-between;
    height: 64px;
    background: rgba(15,13,11,0.88);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(200,146,42,0.15);
  }
  .mn-logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 900;
    letter-spacing: 0.5px;
    color: var(--cream);
  }
  .mn-logo em { color: var(--gold); font-style: italic; }
  .mn-nav-tag {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ── Marquee ── */
  .mn-marquee {
    position: fixed; top: 64px; left: 0; right: 0; z-index: 199;
    height: 32px; overflow: hidden;
    background: var(--gold);
    display: flex; align-items: center;
  }
  .mn-marquee-inner {
    display: flex; align-items: center;
    white-space: nowrap;
    animation: mnScroll 18s linear infinite;
  }
  @keyframes mnScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .mn-marquee-item {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--ink);
    padding: 0 36px;
    display: flex; align-items: center; gap: 8px;
  }
  .mn-marquee-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: var(--ink);
    opacity: 0.4;
  }

  /* ── Hero ── */
  .mn-hero {
    margin-top: 96px;
    position: relative;
    height: 70vh; min-height: 480px; max-height: 800px;
    overflow: hidden;
    display: flex; align-items: flex-end;
  }
  .mn-hero-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center center;
    filter: brightness(0.38) saturate(0.8);
    transform: scale(1.04);
    transition: transform 8s ease;
  }
  .mn-hero:hover .mn-hero-img { transform: scale(1); }
  .mn-hero-fog {
    position: absolute; inset: 0;
    background:
      linear-gradient(to top, var(--ink) 0%, transparent 50%),
      linear-gradient(to right, rgba(15,13,11,0.6) 0%, transparent 60%);
  }
  .mn-hero-grain {
    position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    opacity: 0.35;
    pointer-events: none;
  }
  .mn-hero-content {
    position: relative; z-index: 2;
    padding: 0 6vw 52px;
    max-width: 700px;
  }
  .mn-hero-tag {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
  }
  .mn-hero-tag-line {
    width: 28px; height: 1px; background: var(--gold);
  }
  .mn-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 7.5vw, 108px);
    font-weight: 900;
    line-height: 0.92;
    letter-spacing: -1px;
    color: var(--cream);
    animation: mnFadeUp 1s ease both;
  }
  .mn-hero-title i {
    color: var(--gold);
    font-style: italic;
  }
  @keyframes mnFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Contact ── */
  .mn-contact {
    background: var(--ink2);
    border-top: 1px solid rgba(200,146,42,0.18);
    border-bottom: 1px solid rgba(200,146,42,0.18);
    padding: 18px 6vw;
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; flex-wrap: wrap;
  }
  .mn-contact-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--gold);
  }
  .mn-contact-links {
    display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
  }
  .mn-contact-link {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500; font-size: 14px;
    color: var(--cream); text-decoration: none;
    transition: color 0.2s;
  }
  .mn-contact-link:hover { color: var(--gold2); }
  .mn-contact-sep { color: var(--muted2); }

  /* ── Menu section ── */
  .mn-menu {
    padding: 72px 6vw 80px;
    position: relative;
    min-height: 400px;
  }
  .mn-menu-header {
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 48px;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--muted2);
  }
  .mn-menu-eyebrow {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px;
  }
  .mn-menu-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 56px);
    font-weight: 900; line-height: 1;
    color: var(--cream);
  }
  .mn-menu-count {
    font-family: 'DM Mono', monospace;
    font-size: 11px; letter-spacing: 2px;
    color: var(--muted);
    text-transform: uppercase;
  }

  /* ── Grid ── */
  .mn-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }

  /* ── Card ── */
  .mn-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--ink2) 0%, var(--ink3) 100%);
    border: 1px solid var(--muted2);
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s, transform 0.35s, box-shadow 0.3s;
    transform-origin: bottom center;
    display: flex;
    flex-direction: column;
  }
  .mn-card:hover {
    border-color: rgba(200,146,42,0.6);
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,146,42,0.2);
  }
  .mn-card-img-wrap {
    position: relative;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: var(--ink);
  }
  .mn-card-img-wrap::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,13,11,0.7) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .mn-card:hover .mn-card-img-wrap::after { opacity: 1; }
  .mn-card-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    filter: brightness(0.75) saturate(0.95) contrast(1.05);
    transition: transform 0.6s ease, filter 0.4s;
  }
  .mn-card:hover .mn-card-img-wrap img {
    transform: scale(1.1);
    filter: brightness(0.6) saturate(1.1) contrast(1.1);
  }
  .mn-card-preorder {
    position: absolute; top: 14px; left: 14px;
    font-family: 'DM Mono', monospace;
    font-size: 9px; letter-spacing: 2.5px; text-transform: uppercase;
    background: var(--gold);
    color: var(--ink);
    padding: 6px 12px;
    font-weight: 700;
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  .mn-card-num {
    position: absolute; bottom: 12px; right: 16px;
    font-family: 'Playfair Display', serif;
    font-size: 56px; font-weight: 900;
    color: rgba(255,255,255,0.12);
    line-height: 1;
    z-index: 1;
    transition: color 0.3s;
  }
  .mn-card:hover .mn-card-num { color: rgba(200,146,42,0.15); }
  .mn-card-body {
    padding: 24px 24px 26px;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .mn-card-name {
    font-family: 'Playfair Display', serif;
    font-size: 21px; font-weight: 700;
    color: var(--cream);
    margin-bottom: 8px;
    transition: color 0.2s;
    line-height: 1.2;
  }
  .mn-card:hover .mn-card-name { color: var(--gold2); }
  .mn-card-desc {
    font-size: 13px; line-height: 1.7;
    color: var(--muted);
    flex: 1;
    margin-bottom: 4px;
  }
  .mn-card-arrow {
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 16px;
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--gold);
    opacity: 0;
    transform: translateX(-8px);
    transition: opacity 0.3s, transform 0.3s;
  }
  .mn-card:hover .mn-card-arrow { opacity: 1; transform: translateX(0); }
  .mn-card-underline {
    position: absolute; bottom: 0; left: 0;
    height: 3px; width: 0;
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold2) 100%);
    transition: width 0.5s ease;
  }
  .mn-card:hover .mn-card-underline { width: 100%; }

  /* ── Modal ── */
  .mn-overlay {
    position: fixed; inset: 0; z-index: 400;
    background: rgba(10,9,7,0.92);
    backdrop-filter: blur(12px);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    animation: mnFadeIn 0.25s ease;
    overflow-y: auto;
  }
  @keyframes mnFadeIn { from { opacity: 0; } to { opacity: 1; } }

  .mn-modal {
    background: var(--ink2);
    border: 1px solid rgba(200,146,42,0.25);
    border-radius: 6px;
    width: 100%; max-width: 720px;
    max-height: 90vh;
    overflow-y: auto;
    animation: mnSlideUp 0.3s ease;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }
  @keyframes mnSlideUp {
    from { transform: translateY(30px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
  .mn-modal::-webkit-scrollbar { width: 4px; }
  .mn-modal::-webkit-scrollbar-track { background: var(--ink); }
  .mn-modal::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

  .mn-modal-header {
    position: sticky; top: 0; z-index: 5;
    background: linear-gradient(135deg, var(--ink2) 0%, var(--ink3) 100%);
    padding: 32px 36px 24px;
    border-bottom: 1px solid rgba(200,146,42,0.2);
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 20px;
  }
  .mn-modal-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 4vw, 42px);
    font-weight: 900; line-height: 1.1;
    color: var(--cream);
    margin-bottom: 10px;
  }
  .mn-modal-sub {
    font-size: 13.5px; color: var(--muted);
    line-height: 1.7;
  }
  .mn-modal-close {
    background: rgba(200,146,42,0.08);
    border: 1px solid rgba(200,146,42,0.25);
    color: var(--cream);
    width: 40px; height: 40px; flex-shrink: 0;
    border-radius: 4px;
    font-size: 20px; line-height: 1;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }
  .mn-modal-close:hover {
    border-color: var(--gold);
    background: rgba(200,146,42,0.18);
    color: var(--gold);
    transform: rotate(90deg);
  }

  .mn-items { padding: 12px 36px 36px; }

  .mn-item {
    display: flex; gap: 20px;
    padding: 24px 0;
    border-bottom: 1px solid rgba(200,146,42,0.12);
    position: relative;
    transition: padding-left 0.3s, background 0.3s;
    border-radius: 4px;
  }
  .mn-item:last-child { border-bottom: none; }
  .mn-item:hover { 
    padding-left: 8px;
    background: rgba(200,146,42,0.03);
  }
  .mn-item-accent {
    position: absolute; left: 0; top: 0;
    width: 3px; height: 0;
    background: linear-gradient(180deg, var(--gold) 0%, var(--gold2) 100%);
    transition: height 0.35s ease;
    border-radius: 0 2px 2px 0;
  }
  .mn-item:hover .mn-item-accent { height: 100%; }

  .mn-item-img {
    width: 96px; height: 96px;
    flex-shrink: 0; overflow: hidden;
    border: 1px solid rgba(200,146,42,0.2);
    border-radius: 4px;
    background: var(--ink);
  }
  .mn-item-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.4s, filter 0.3s;
    filter: brightness(0.85) saturate(0.95);
  }
  .mn-item:hover .mn-item-img img { 
    transform: scale(1.15);
    filter: brightness(1) saturate(1.1);
  }

  .mn-item-info { flex: 1; }
  .mn-item-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700;
    color: var(--cream); margin-bottom: 6px;
    line-height: 1.3;
    transition: color 0.2s;
  }
  .mn-item:hover .mn-item-name { color: var(--gold2); }
  .mn-item-desc {
    font-size: 13px; line-height: 1.7;
    color: var(--muted);
  }
  .mn-item-footer {
    margin-top: 14px;
    display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  }
  .mn-price {
    font-family: 'DM Mono', monospace;
    font-size: 16px; font-weight: 700;
    color: var(--gold2);
  }
  .mn-old-price {
    font-family: 'DM Mono', monospace;
    font-size: 13px;
    color: var(--muted);
    text-decoration: line-through;
  }
  .mn-preorder-pill {
    font-family: 'DM Mono', monospace;
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    background: rgba(200,146,42,0.12);
    border: 1px solid rgba(200,146,42,0.4);
    color: var(--gold2); padding: 4px 10px;
    border-radius: 3px;
  }

  /* combo style */
  .mn-combo-row {
    display: flex; align-items: center;
    justify-content: space-between;
    width: 100%; gap: 16px; flex-wrap: wrap;
  }
  .mn-item.combo { padding: 20px 0; }
  .mn-item.combo .mn-item-name { font-size: 15px; }

  /* ── Info / Parcel blocks ── */
  .mn-info-section {
    padding: 0 6vw 64px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    align-items: stretch;
  }
  .mn-info-block {
    background: var(--ink2);
    border: 1px solid var(--muted2);
    padding: 28px 30px;
    position: relative; overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .mn-info-block::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 3px; height: 100%;
    background: var(--gold);
  }
  .mn-info-icon {
    font-size: 24px; margin-bottom: 12px;
    display: block;
  }
  .mn-info-title {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700;
    color: var(--cream); margin-bottom: 10px;
  }
  .mn-info-text {
    font-size: 13px; line-height: 1.8;
    color: var(--muted);
  }
  .mn-info-text strong { color: var(--cream); }

  /* ── Footer ── */
  .mn-footer {
    background: var(--ink2);
    border-top: 1px solid var(--muted2);
    padding: 28px 6vw;
    display: flex; align-items: center;
    justify-content: space-between; gap: 16px;
    flex-wrap: wrap;
  }
  .mn-footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 900;
    color: var(--cream);
  }
  .mn-footer-logo em { color: var(--gold); font-style: italic; }
  .mn-footer-copy {
    font-family: 'DM Mono', monospace;
    font-size: 10px; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--muted);
    text-align: right;
  }

  /* ── Reveal ── */
  .mn-reveal {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .mn-reveal.in { opacity: 1; transform: translateY(0); }

  /* ── Responsive ── */
  @media (max-width: 680px) {
    .mn-hero {
      height: 60vh; min-height: 400px;
    }
    .mn-hero-img {
      object-position: center center;
    }
    .mn-hero-content {
      padding: 0 5vw 40px;
    }
    .mn-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .mn-info-section { 
      grid-template-columns: 1fr;
      padding: 0 6vw 48px;
    }
    .mn-menu-header { flex-direction: column; align-items: flex-start; gap: 8px; }
    .mn-contact { flex-direction: column; align-items: flex-start; }
    .mn-footer { flex-direction: column; text-align: center; }
    .mn-footer-copy { text-align: center; }
    .mn-items { padding: 8px 20px 24px; }
    .mn-modal-header { padding: 20px; }
    .mn-item-img { width: 68px; height: 68px; }
  }
  @media (max-width: 420px) {
    .mn-hero {
      height: 50vh; min-height: 360px;
      width:50vw;
    }
    .mn-hero-content {
      padding: 0 5vw 32px;
    }
    .mn-grid { grid-template-columns: 1fr; }
    .mn-contact-links {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .mn-contact-sep { display: none; }
    .mn-hero-img{
      width:50%;
      height:30%;
    }
  }
  @media (min-width: 1400px) {
    .mn-hero-img {
      object-position: center 40%;
    }
  }
`;

function injectStyles() {
  if (typeof document === 'undefined' || document.getElementById('mn-styles')) return;
  const s = document.createElement('style');
  s.id = 'mn-styles';
  s.textContent = CSS;
  document.head.appendChild(s);
}

/* ── Scroll reveal hook ── */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.mn-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── Marquee items ── */
const MARQUEE = ['Fresh Daily', 'Pre-order Available', 'Authentic Flavours', 'Hot & Ready', 'Parcel 10/-', 'CSE-B Boyss'];

/* ── App ── */
const App = () => {
  injectStyles();
  useReveal();

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
    <div>
      {/* ── NAV ── */}
      <nav className="mn-nav">
        <span className="mn-logo">Savory <em>Delights</em></span>
        <span className="mn-nav-tag">CSE — B Boyss</span>
      </nav>

      {/* ── MARQUEE ── */}
      <div className="mn-marquee">
        <div className="mn-marquee-inner">
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span className="mn-marquee-item" key={i}>
              <span className="mn-marquee-dot" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="mn-hero">
        <img src={banner} alt="Food" className="mn-hero-img" />
        <div className="mn-hero-fog" />
        <div className="mn-hero-grain" />
        <div className="mn-hero-content">
          <div className="mn-hero-tag">
            <span className="mn-hero-tag-line" />
            Fresh &amp; Authentic
          </div>
          <h1 className="mn-hero-title">
            Savory<br />
            <i>Delights.</i>
          </h1>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="mn-contact mn-reveal">
        <span className="mn-contact-label">Order Now</span>
        <div className="mn-contact-links">
          <a href="tel:+918270274586" className="mn-contact-link">+91 82702 74586</a>
          <span className="mn-contact-sep">·</span>
          <a href="tel:+916383648034" className="mn-contact-link">+91 63836 48034</a>
          <span className="mn-contact-sep">·</span>
          <a href="tel:+919790655699" className="mn-contact-link">+91 97906 55699</a>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="mn-menu">
        <div className="mn-menu-header mn-reveal">
          <div>
            <div className="mn-menu-eyebrow">Our Menu</div>
            <h2 className="mn-menu-title">Explore Categories</h2>
          </div>
          <span className="mn-menu-count">{menuData.length} categories</span>
        </div>

        <div className="mn-grid">
          {menuData.map((cat, idx) => (
            <div
              key={cat.id}
              className="mn-card mn-reveal"
              style={{ transitionDelay: `${(idx % 4) * 0.07}s` }}
              onClick={() => openCategory(cat)}
            >
              <div className="mn-card-img-wrap">
                <img src={cat.image} alt={cat.name} />
                {cat.preOrder && <div className="mn-card-preorder">Pre-order</div>}
                <span className="mn-card-num">{String(idx + 1).padStart(2, '0')}</span>
              </div>
              <div className="mn-card-body">
                <div className="mn-card-name">{cat.name}</div>
                <p className="mn-card-desc">{cat.description}</p>
                <div className="mn-card-arrow">View Menu →</div>
              </div>
              <div className="mn-card-underline" />
            </div>
          ))}
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedCategory && (
        <div className="mn-overlay" onClick={closeCategory}>
          <div className="mn-modal" onClick={(e) => e.stopPropagation()}>
            <div className="mn-modal-header">
              <div>
                <h2 className="mn-modal-title">{selectedCategory.name}</h2>
                <p className="mn-modal-sub">{selectedCategory.description}</p>
              </div>
              <button className="mn-modal-close" onClick={closeCategory}>✕</button>
            </div>

            <div className="mn-items">
              {selectedCategory.items.map((item) => {
                const isCombo = selectedCategory.id === 'combos';
                return (
                  <div key={item.id} className={`mn-item${isCombo ? ' combo' : ''}`}>
                    <div className="mn-item-accent" />

                    {!isCombo && (
                      <div className="mn-item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}

                    <div className="mn-item-info">
                      {isCombo ? (
                        <div className="mn-combo-row">
                          <span className="mn-item-name">{item.name}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {item.old && item.new
                              ? <><span className="mn-old-price">{item.old}</span><span className="mn-price">{item.new}</span></>
                              : <span className="mn-price">{item.price || item.old || item.new}</span>
                            }
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="mn-item-name">{item.name}</div>
                          <p className="mn-item-desc">{item.description}</p>
                          <div className="mn-item-footer">
                            {item.old && item.new
                              ? <><span className="mn-old-price">{item.old}</span><span className="mn-price">{item.new}</span></>
                              : <span className="mn-price">{item.price || item.old || item.new}</span>
                            }
                            {item.preOrder && <span className="mn-preorder-pill">Pre-order</span>}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ── INFO BLOCKS ── */}
      <div className="mn-info-section">
        <div className="mn-info-block mn-reveal">
          <span className="mn-info-icon">🕐</span>
          <div className="mn-info-title">Pre-orders</div>
          <p className="mn-info-text">
            Certain specialty items require advance booking. Please place pre-orders at least
            <strong> 2–4 hours</strong> in advance to ensure freshness and availability.
          </p>
        </div>
        <div className="mn-info-block mn-reveal" style={{ transitionDelay: '0.1s' }}>
          <span className="mn-info-icon">📦</span>
          <div className="mn-info-title">Parcel Charge</div>
          <p className="mn-info-text">
            A nominal parcel charge of <strong>₹10</strong> applies to all items.
            Fresh packaging ensures your food arrives in perfect condition.
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="mn-footer mn-reveal">
        <span className="mn-footer-logo">Savory <em>Delights</em></span>
        <div className="mn-footer-copy">
          Managed by<br />CSE — B Boyss
        </div>
      </footer>
    </div>
  );
};

export default App;