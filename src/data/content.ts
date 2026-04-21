export type Service = {
  title: string;
  description: string;
  image: string;
};

export type Offer = {
  eyebrow: string;
  headline: string;
  subhead: string;
  image: string;
  points: string[];
};

export type Plan = {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type CustomerReview = {
  name: string;
  title: string;
  text: string;
  tag: string;
};

export const contact = {
  phonePrimary: '8077173541',
  phoneSecondary: '9084237509',
  email: 'contact@refress.in',
  address: 'Preetam Nagar, Moradabad UP India (244001)',
  whatsapp: 'https://wa.me/918077173541?text=Hi%21%20I%20want%20to%20book%20a%20Refress%20pickup.',
  googleReviews: 'https://www.google.com/search?q=Refress+Laundry+Moradabad+reviews',
};

export const navItems = [
  ['Services', '#services'],
  ['Plans', '#plans'],
  ['Pricing', '#pricing'],
  ['About', '#about'],
  ['FAQs', '#faqs'],
  ['Contact', '#contact'],
] as const;

export const offers: Offer[] = [
  {
    eyebrow: 'Get Flat',
    headline: '50% OFF',
    subhead: 'On Every Order',
    image: '/images/c1.png',
    points: ['Schedule Collection Days', '24-48 hours Delivery', 'Easy Payment Options', 'Dedicated Customer Support'],
  },
  {
    eyebrow: 'Special Offer',
    headline: '25% OFF',
    subhead: 'On Dry Cleaning',
    image: '/images/happy-house.png',
    points: ['Gentle on Fabrics', 'Eco-Friendly Solvents', 'Expert Stain Removal', 'Quick Turnaround'],
  },
  {
    eyebrow: 'Enjoy a',
    headline: '₹300',
    subhead: 'Discount when you order 5 services worth ₹500 or more within a month.',
    image: '/images/happy-house.png',
    points: ['Easy Sharing', 'Instant Credits', 'Unlimited Referrals', 'Track Your Earnings'],
  },
];

export const services: Service[] = [
  {
    title: 'Dry Cleaning',
    description: 'Deep cleaning for delicates, curtains, and upholstery. Fresh feel guaranteed.',
    image: '/images/dry-cleaning.jpg',
  },
  {
    title: 'Laundry (Wash+Fold, Wash+Iron)',
    description: 'Advanced washing, drying, and ironing. Fabric-safe & neatly pressed.',
    image: '/images/laundry.jpg',
  },
  {
    title: 'Steam Ironing',
    description: 'Crisp, wrinkle-free clothes. Gentle on fabrics, perfect finishing.',
    image: '/images/steam-ironing.jpg',
  },
  {
    title: 'Shoe & Backpack Cleaning',
    description: 'Expert care to remove dirt & stains. Restores durability for like-new results.',
    image: '/images/shoe.jpg',
  },
  {
    title: 'Starching',
    description: 'Get crisp, stiff, and fresh clothes (sarees, shirts). Fabric-safe for a lasting finish.',
    image: '/images/starching6.jpg',
  },
  {
    title: 'Express Service',
    description: 'Quick, professional, and eco-friendly wash & dry. Spotless finish - fast!',
    image: '/images/exp.jpg',
  },
  {
    title: 'Sofa/Carpet Cleaning',
    description: 'Advanced deep-cleaning to remove dust & stains. Restores freshness.',
    image: '/images/sofa.jpg',
  },
  {
    title: 'Water Tank Cleaning',
    description: 'Safe, hygienic, and efficient cleaning. Eco-friendly service for pure water.',
    image: '/images/tank.jpg',
  },
  {
    title: 'Corporate & Hotel Laundry',
    description: 'Welcoming businesses with reasonable rates and quick service.',
    image: '/images/hotel.jpg',
  },
];

export const plans: Plan[] = [
  {
    name: 'Quick Fresh',
    price: '₹2000 / Month',
    features: ['Monthly 4 time services', '24 to 48 hrs Delivery', 'Stain Treatment', 'Maximum 80 Cloths', 'Free Pickup and Delivery'],
  },
  {
    name: 'Pure Bliss',
    price: '₹4000 / Month',
    featured: true,
    features: ['Monthly 8 time services', '24 to 48 hrs Delivery', 'Stain Treatment', 'Maximum 200 Cloths', 'Free Pickup and Delivery'],
  },
  {
    name: 'Ultimate Care',
    price: '₹5500 / Month',
    features: ['Monthly 10 time Services', '24 hr Delivery', 'Stain Treatment', 'Maximum 300 Cloths', 'Free Pickup and Delivery', 'Ultimate fabric Care'],
  },
];

export const faqs: Faq[] = [
  {
    question: 'Why Refress?',
    answer:
      'Refress is your trusted partner in laundry, dry cleaning, and complete cleaning solutions. With over 10 years of experience, we bring freshness, care, and convenience to your doorstep, making your everyday life cleaner and easier.',
  },
  {
    question: 'Does Refress provide same day or one day delivery for dry clean services?',
    answer:
      'Yes, Refress offers express dry cleaning with same-day or one-day delivery for select garments and locations. Availability depends on the fabric, cleaning requirements, and pickup time.',
  },
  {
    question: 'How can we get Refress services?',
    answer:
      'Book through the website, call or WhatsApp the customer care team, choose your service, schedule a pickup, and the Refress team will handle the rest.',
  },
];

export const reviewHighlights = [
  'Doorstep pickup',
  'Neat finishing',
  'Careful handling',
  'Easy scheduling and pickup',
  'Crisp folding and ironing',
  'Safe care for daily wear',
  'Extra attention for special items',
];

export const customerReviews: CustomerReview[] = [
  {
    name: 'Refress Customer',
    title: 'Pickup and support',
    text: 'Flexible collection timing, clear coordination, and doorstep support that keeps booking simple.',
    tag: 'Doorstep service',
  },
  {
    name: 'Monthly Plan Customer',
    title: 'Finish quality',
    text: 'Fresh folding, cleaner presentation, and dependable finishing that makes everyday clothes feel ready to wear.',
    tag: 'Laundry care',
  },
  {
    name: 'Premium Care Customer',
    title: 'Care for special items',
    text: 'Thoughtful handling for delicate fabrics, shoes, upholstery, and home-care items that need extra attention.',
    tag: 'Premium cleaning',
  },
];
