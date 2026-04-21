import { FormEvent, useEffect, useMemo, useState } from 'react';
import { contact, customerReviews, faqs, navItems, offers, plans, reviewHighlights, services } from './data/content';
import { pricingOrder, servicePrices } from './data/pricing';

const categoryLabels: Record<string, string> = {
  'dry-cleaning': 'Dry Cleaning',
  'traditional-Ironing': 'Traditional Ironing',
  'steam-ironing': 'Steam Ironing',
  'laundry-by-weight': 'Laundry By Weight',
  'laundry-by-piece': 'Laundry By Piece',
  Starching: 'Starching',
  express: 'Express',
  'sofa-carpet': 'Sofa & Carpet',
  'backpack-shoes': 'Backpack & Shoes',
  'water-tank': 'Water Tank',
};

const homeCarouselOffers = offers.slice(0, 2);

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Refress home">
      <span className="brand-mark">
        <img src="/images/ref-logo.png" alt="" aria-hidden="true" />
      </span>
      <span>
        <span className="brand-name">Refress</span>
        <span className="brand-line">Where freshness meet care</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo />
        <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-book" href={contact.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Book Now <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [activeOffer, setActiveOffer] = useState(0);
  const offer = homeCarouselOffers[activeOffer];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveOffer((current) => (current + 1) % homeCarouselOffers.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  function showPreviousOffer() {
    setActiveOffer((current) => (current - 1 + homeCarouselOffers.length) % homeCarouselOffers.length);
  }

  function showNextOffer() {
    setActiveOffer((current) => (current + 1) % homeCarouselOffers.length);
  }

  return (
    <section className="hero" id="home">
      <div className="hero-carousel-shell">
        <button className="hero-side-arrow hero-side-arrow-prev" type="button" aria-label="Previous offer" onClick={showPreviousOffer}>
          <span aria-hidden="true">‹</span>
        </button>

        <div className="hero-slide">
          <div className="hero-slide-copy">
            <span className="eyebrow">Doorstep laundry care in Moradabad</span>
            <h1>Premium cleaning, neat finishing, and pickup that fits your day.</h1>
            <p>
              Refress keeps everyday laundry, dry cleaning, shoe care, upholstery cleaning, and water tank cleaning simple with reliable
              doorstep service.
            </p>

            <div className="slide-offer">
              <span>{offer.eyebrow}</span>
              <strong>{offer.headline}</strong>
              <small>{offer.subhead}</small>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href={contact.whatsapp} target="_blank" rel="noreferrer">
                Schedule Free Pickup <ArrowIcon />
              </a>
            </div>

            <ul className="hero-check-list">
              {offer.points.map((point) => (
                <li key={point}>
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>

          </div>

          <div className="hero-slide-media" aria-live="polite">
            <img src={offer.image} alt={offer.subhead} />
          </div>
        </div>

        <button className="hero-side-arrow hero-side-arrow-next" type="button" aria-label="Next offer" onClick={showNextOffer}>
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <span className="eyebrow">Our Services</span>
        <h2>The best service provided to our customers</h2>
        <p>From everyday laundry to premium fabric care and home cleaning, Refress keeps the entire routine reliable and doorstep-friendly.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={service.image} alt={service.title} />
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="section section-tint" id="plans">
      <div className="section-heading">
        <span className="eyebrow">Subscription Plan</span>
        <h2>Affordable monthly plans and practical discounts</h2>
        <p>Built for busy homes that want predictable pricing, regular pickup slots, and consistently fresh clothes.</p>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article className={plan.featured ? 'plan-card is-featured' : 'plan-card'} key={plan.name}>
            {plan.featured && <span className="plan-badge">Most Popular</span>}
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <ul className="tick-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckIcon />
                  {feature}
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="#contact">
              Purchase Now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const [selected, setSelected] = useState<(typeof pricingOrder)[number]>('dry-cleaning');
  const priceService = servicePrices[selected];
  const showDiscount = selected !== 'water-tank' && selected !== 'sofa-carpet';

  return (
    <section className="section" id="pricing">
      <div className="pricing-shell">
        <div className="pricing-intro">
          <span className="eyebrow">Detailed Pricing</span>
          <h2>Clear category-wise prices</h2>
          <p>Browse the same pricing data from the current Refress website in a cleaner, faster interface.</p>
        </div>

        <div className="category-tabs" aria-label="Pricing categories">
          {pricingOrder.map((key) => (
            <button className={selected === key ? 'is-active' : ''} key={key} type="button" onClick={() => setSelected(key)}>
              {categoryLabels[key] ?? servicePrices[key].name}
            </button>
          ))}
        </div>

        <div className="price-table-card">
          <div className="price-table-head">
            <div>
              <span>Selected service</span>
              <h3>{priceService.name}</h3>
            </div>
            <a className="btn btn-soft" href="#contact">
              Book this service
            </a>
          </div>

          {priceService.items.length > 0 ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    {showDiscount && <th>Discount Price</th>}
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {priceService.items.map((item) => (
                    <tr key={`${item.item}-${item.price}`}>
                      <td>{item.item}</td>
                      {showDiscount && <td className="discount">{item.Discount_price ?? '-'}</td>}
                      <td className="price">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-price">No line items are listed for this service.</div>
          )}

          {priceService.notes && <p className="pricing-note" dangerouslySetInnerHTML={{ __html: priceService.notes }} />}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-grid" id="about">
      <div className="about-media">
        <img src="/images/women.jpg" alt="Refress laundry care" />
        <div className="floating-note">
          <strong>Pickup to delivery</strong>
          <span>Easy scheduling, fabric-safe cleaning, and careful finishing from one team.</span>
        </div>
      </div>
      <div className="about-copy">
        <span className="eyebrow">About Us</span>
        <h2>Your trusted partner in laundry care.</h2>
        <p>
          <strong>Refress Laundry and Cleaning</strong> transforms cleaning with tech-driven, top-quality services for laundry, dry cleaning,
          and household needs.
        </p>
        {[
          ['Mission', 'To lead the cleaning industry with cutting-edge, personalized services that set new trends.'],
          ['Vision', 'To be India’s most trusted and innovative cleaning service provider.'],
          ['Values', 'Honesty, transparency, and excellence in every order, service interaction, and finish.'],
        ].map(([title, body]) => (
          <article className="about-point" key={title}>
            <CheckIcon />
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section section-ink" id="reviews">
      <div className="review-grid">
        <div className="review-copy">
          <span className="eyebrow">Google Reviews</span>
          <h2>Trusted by customers around Moradabad</h2>
          <p>Open the latest public Google feedback at the source, then scan the service details customers care about before booking.</p>
          <div className="review-highlight-row" aria-label="Review highlights">
            {reviewHighlights.slice(0, 3).map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
          <a className="btn btn-light" href={contact.googleReviews} target="_blank" rel="noreferrer">
            View Google Reviews
          </a>
        </div>
        <div className="review-cards">
          {customerReviews.map((review) => (
            <article className="review-card" key={review.title}>
              <div className="review-card-top">
                <span className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span className="review-rating" aria-label="Five star review">
                    ★★★★★
                  </span>
                </div>
                <span className="review-tag">{review.tag}</span>
              </div>
              <h3>{review.title}</h3>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-grid" id="faqs">
      <div>
        <span className="eyebrow">FAQs</span>
        <h2>Your laundry queries, answered.</h2>
        <p>Below are the answers to common questions about Refress laundry and dry cleaning services.</p>
        <img src="/images/happy-house.png" alt="Refress help desk" />
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <article className="faq-item" key={faq.question}>
            <button type="button" onClick={() => setOpenIndex(index)}>
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p>{faq.answer}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const body = String(formData.get('message') ?? '').trim();
    const whatsappText = [
      'Hi! I want to book a Refress pickup.',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message: ${body}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/91${contact.phonePrimary}?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('Thanks. Your message is ready in WhatsApp for the Refress team.');
    form.reset();
  }

  return (
    <section className="section contact-grid" id="contact">
      <div className="contact-copy">
        <span className="eyebrow">Get in Touch</span>
        <h2>Ready to book your next pickup?</h2>
        <p>Tell us what you need and the team will help you choose the quickest service, plan, or pickup window.</p>
        <div className="contact-details">
          <span>{contact.address}</span>
          <a href={`tel:+91${contact.phonePrimary}`}>{contact.phonePrimary}</a>
          <a href={`tel:+91${contact.phoneSecondary}`}>{contact.phoneSecondary}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <a className="btn btn-primary" href={contact.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp Us <ArrowIcon />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a message</h3>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Subject
          <input name="subject" type="text" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={4} required />
        </label>
        <button className="btn btn-primary" type="submit">
          Send to WhatsApp
        </button>
        {message && <p className="form-message">{message}</p>}
      </form>
    </section>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div>
        <Logo />
        <p>Discover the perfect blend of quality and convenience with Refress.</p>
      </div>
      <div className="footer-links">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </div>
      <div className="footer-meta">
        <span>© {year} Refress. All rights reserved.</span>
        <span>Made by Abhishek Kumar</span>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    if (window.location.pathname.includes('pricing')) {
      window.requestAnimationFrame(() => document.getElementById('pricing')?.scrollIntoView());
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <Pricing />
        <About />
        <Reviews />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
