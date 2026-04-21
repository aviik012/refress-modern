export type PriceItem = {
  item: string;
  price: string;
  Discount_price?: string;
};

export type PriceService = {
  name: string;
  items: PriceItem[];
  notes?: string;
};

export const pricingOrder = [
  "dry-cleaning",
  "traditional-Ironing",
  "steam-ironing",
  "laundry-by-weight",
  "laundry-by-piece",
  "Starching",
  "express",
  "sofa-carpet",
  "backpack-shoes",
  "water-tank"
] as const;

export const servicePrices: Record<string, PriceService> = {
  "please-choose": {
    "name": "",
    "items": [],
    "notes": "Please select a service from the dropdown above to see more details."
  },
  "dry-cleaning": {
    "name": "Dry Cleaning",
    "items": [
      {
        "item": "Shirt/Tshirt",
        "price": "₹85",
        "Discount_price": "₹63.75"
      },
      {
        "item": "Pant/Touser",
        "price": "₹100",
        "Discount_price": "₹75.00"
      },
      {
        "item": "Coat/Blazer",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Mens Suit 2 Pc",
        "price": "₹400",
        "Discount_price": "₹300.00"
      },
      {
        "item": "Mens Suit 3 Pc",
        "price": "₹500",
        "Discount_price": "₹375.00"
      },
      {
        "item": "Waistcoat/Bandi",
        "price": "₹150",
        "Discount_price": "₹112.5"
      },
      {
        "item": "Mens Kurta Payjama",
        "price": "₹350",
        "Discount_price": "₹262.50"
      },
      {
        "item": "Sherwani",
        "price": "₹350",
        "Discount_price": "₹262.50"
      },
      {
        "item": "Jacket",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Sweat Shirt",
        "price": "₹200",
        "Discount_price": "₹150.00"
      },
      {
        "item": "Kurti",
        "price": "₹140",
        "Discount_price": "₹105.00"
      },
      {
        "item": "Salwar Kurta 2pc",
        "price": "₹240",
        "Discount_price": "₹180.00"
      },
      {
        "item": "Salwar Kurta 3pc",
        "price": "₹350",
        "Discount_price": "₹262.50"
      },
      {
        "item": "Saree Silk Plain",
        "price": "₹340",
        "Discount_price": "₹255.00"
      },
      {
        "item": "Saree Heavy work",
        "price": "₹420",
        "Discount_price": "₹315.00"
      },
      {
        "item": "Blouse",
        "price": "₹80",
        "Discount_price": "₹60.00"
      },
      {
        "item": "Skirt/Petticoat",
        "price": "₹200",
        "Discount_price": "₹150.00"
      },
      {
        "item": "Shorts (Men/Women)",
        "price": "₹100",
        "Discount_price": "₹75.00"
      },
      {
        "item": "Lehenga(Light/Regular)",
        "price": "₹700",
        "Discount_price": "₹525.00"
      },
      {
        "item": "Lehenga(Heavy)",
        "price": "₹800",
        "Discount_price": "₹600.00"
      },
      {
        "item": "Gown",
        "price": "₹850",
        "Discount_price": "₹637.50"
      },
      {
        "item": "Dress/Frock",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Showl",
        "price": "₹200",
        "Discount_price": "₹150.00"
      },
      {
        "item": "Bedsheet Single Bed",
        "price": "₹140",
        "Discount_price": "₹105.00"
      },
      {
        "item": "Bedsheet Double Bed",
        "price": "₹180",
        "Discount_price": "₹135.00"
      },
      {
        "item": "BedSpread Single",
        "price": "₹280",
        "Discount_price": "₹210.00"
      },
      {
        "item": "BedSpread Double",
        "price": "₹400",
        "Discount_price": "₹300.00"
      },
      {
        "item": "Blanket Single AC",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Blanket Double AC",
        "price": "₹430",
        "Discount_price": "₹322.50"
      },
      {
        "item": "Blanket Single Heavy",
        "price": "₹500",
        "Discount_price": "₹375.00"
      },
      {
        "item": "Blanket Double Heavy",
        "price": "₹600",
        "Discount_price": "₹450.00"
      },
      {
        "item": "Curtains 9ft",
        "price": "₹200",
        "Discount_price": "₹150.00"
      },
      {
        "item": "Cousion/Towel/Sofa Cov",
        "price": "₹80",
        "Discount_price": "₹60.00"
      },
      {
        "item": "Table Cloth Small",
        "price": "₹100",
        "Discount_price": "₹75.00"
      },
      {
        "item": "Table Cloth Big",
        "price": "₹160",
        "Discount_price": "₹120.00"
      }
    ],
    "notes": "Ideal for delicate fabrics. Final price after inspection."
  },
  "traditional-Ironing": {
    "name": "Traditional Ironing (Per Item)",
    "items": [
      {
        "item": "Shirt/Tshirt",
        "price": "₹15",
        "Discount_price": "₹7.5"
      },
      {
        "item": "Pant/Touser",
        "price": "₹15",
        "Discount_price": "₹7.5"
      },
      {
        "item": "Coat/Blazer",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Mens Suit 2 Pc",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Mens Suit 3 Pc",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Waistcoat/Bandi",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Mens Kurta Payjama",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Sherwani",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Jacket",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Sweat Shirt",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Kurti",
        "price": "₹15",
        "Discount_price": "₹7.5"
      },
      {
        "item": "Salwar Kurta 2pc",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Salwar Kurta 3pc",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Saree Silk Plain",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Saree Heavy work",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Blouse",
        "price": "₹10",
        "Discount_price": "₹5.00"
      },
      {
        "item": "Skirt/Petticoat",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Shorts (Men/Women)",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Lehenga",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Gown",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Dress/Frock",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Showl",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Bedsheet Single",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Bedsheet Double",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Curtains 9ft",
        "price": "₹50",
        "Discount_price": "₹25.00"
      },
      {
        "item": "Sofa/Cousion Cover",
        "price": "₹40",
        "Discount_price": "₹20.00"
      }
    ],
    "notes": "Standard coal press ironing. Minimum order value may apply."
  },
  "steam-ironing": {
    "name": "Steam Ironing (Per Item)",
    "items": [
      {
        "item": "Shirt/Tshirt",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Pant/Touser",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Coat/Blazer",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Mens Suit 2 Pc",
        "price": "₹120",
        "Discount_price": "₹60.00"
      },
      {
        "item": "Mens Suit 3 Pc",
        "price": "₹150",
        "Discount_price": "₹75.00"
      },
      {
        "item": "Waistcoat/Bandi",
        "price": "₹50",
        "Discount_price": "₹25.00"
      },
      {
        "item": "Mens Kurta Payjama",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Sherwani",
        "price": "₹140",
        "Discount_price": "₹70.00"
      },
      {
        "item": "Jacket",
        "price": "₹90",
        "Discount_price": "₹45.00"
      },
      {
        "item": "Sweat Shirt",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Kurti",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Salwar Kurta 2pc",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Salwar Kurta 3pc",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Saree Silk Plain",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Saree Heavy work",
        "price": "₹130",
        "Discount_price": "₹65.00"
      },
      {
        "item": "Blouse",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Skirt/Petticoat",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Shorts (Men/Women)",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Lehenga",
        "price": "₹180",
        "Discount_price": "₹90.00"
      },
      {
        "item": "Gown",
        "price": "₹160",
        "Discount_price": "₹80.00"
      },
      {
        "item": "Dress/Frock",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Showl",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Bedsheet Single",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Bedsheet Double",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Curtains 9ft",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Sofa/Cousion Cover",
        "price": "₹60",
        "Discount_price": "₹30.00"
      }
    ],
    "notes": "Steam ironing for a crisp finish. Minimum order value may apply."
  },
  "laundry-by-weight": {
    "name": "Laundry By Weight",
    "items": [
      {
        "item": "Wash and Fold",
        "price": "₹120 / kg",
        "Discount_price": "₹60.00"
      },
      {
        "item": "Wash and Iron",
        "price": "₹170 / kg",
        "Discount_price": "₹85.00"
      },
      {
        "item": "Wash and Steam Iron",
        "price": "₹200 / kg",
        "Discount_price": "₹100.00"
      },
      {
        "item": "Premium Laundry",
        "price": "₹300 / kg",
        "Discount_price": "₹150.00"
      },
      {
        "item": "Woolen Laundry",
        "price": "₹350 / kg",
        "Discount_price": "₹175.00"
      }
    ],
    "notes": "Items are washed, dried, and folded. Price calculated per Kg."
  },
  "laundry-by-piece": {
    "name": "Laundry By Piece",
    "items": [
      {
        "item": "Shirt/Tshirt",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Pant/Touser",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Coat/Blazer",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Mens Suit 2 Pc",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Mens Suit 3 Pc",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Waistcoat/Bandi",
        "price": "₹70",
        "Discount_price": "₹35.00"
      },
      {
        "item": "Mens Kurta Payjama",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Sherwani",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Jacket",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Sweat Shirt",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Kurti",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Salwar Kurta 2pc",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Salwar Kurta 3pc",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Saree Silk Plain",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Saree Heavy work",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Blouse",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Skirt/Petticoat",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Shorts (Men/Women)",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Lehenga",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Gown",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Dress/Frock",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Showl",
        "price": "₹20",
        "Discount_price": "₹10.00"
      },
      {
        "item": "Bedsheet Single",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Bedsheet Double",
        "price": "₹50",
        "Discount_price": "₹25.00"
      },
      {
        "item": "Curtains 9ft",
        "price": "₹50",
        "Discount_price": "₹25.00"
      },
      {
        "item": "Sofa/Cousion Cover",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Towel",
        "price": "₹40",
        "Discount_price": "₹20.00"
      }
    ],
    "notes": "Items are washed, dried, and steam ironed individually."
  },
  "Starching": {
    "name": "Charak / Starching",
    "items": [
      {
        "item": "Shirt/Tshirt",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Payjama",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Waistcoat/Bandi",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Mens Kurta Payjama",
        "price": "₹40",
        "Discount_price": "₹20.00"
      },
      {
        "item": "Sherwani",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Kurti",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Salwar Kurta 2pc",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Salwar Kurta 3pc",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Saree Plain",
        "price": "₹100",
        "Discount_price": "₹50.00"
      },
      {
        "item": "Saree Heavy work",
        "price": "₹140",
        "Discount_price": "₹70.00"
      },
      {
        "item": "Blouse",
        "price": "₹30",
        "Discount_price": "₹15.00"
      },
      {
        "item": "Dress/Frock",
        "price": "₹80",
        "Discount_price": "₹40.00"
      },
      {
        "item": "Waistcoat",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Courtains",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Girls Top",
        "price": "₹50",
        "Discount_price": "₹25.00"
      },
      {
        "item": "Skirt/Petticoat",
        "price": "₹60",
        "Discount_price": "₹30.00"
      },
      {
        "item": "Mens Dhoti",
        "price": "₹40",
        "Discount_price": "₹20.00"
      }
    ],
    "notes": "Stiff finish using natural starch. Ideal for cottons."
  },
  "express": {
    "name": "Express Service",
    "items": [],
    "notes": "Need it back fast? Our Express Service guarantees a 24-hour turnaround for most Wash & Fold and Wash & Iron items. This service adds a <strong>+20% surcharge</strong> to the standard price of the items processed under express. Discount_prices may not apply to express surcharges."
  },
  "sofa-carpet": {
    "name": "Sofa and Carpet Cleaning",
    "items": [
      {
        "item": "Sofa/Seat",
        "price": "₹400"
      },
      {
        "item": "Mattress Single",
        "price": "₹600"
      },
      {
        "item": "Mattress Double",
        "price": "₹1160"
      },
      {
        "item": "Carpet (upto 8 Sqft)",
        "price": "₹320"
      },
      {
        "item": "Carpet (upto 12 Sqft)",
        "price": "₹480"
      }
    ],
    "notes": "Deep cleaning of sofas, carpets, and upholstery to remove dirt, stains, and allergens."
  },
  "backpack-shoes": {
    "name": "Backpack and Shoes Cleaning",
    "items": [
      {
        "item": "Ladies Purse Small",
        "price": "₹240",
        "Discount_price": "₹180.00"
      },
      {
        "item": "Ladies Purse Medium",
        "price": "₹320",
        "Discount_price": "₹240.00"
      },
      {
        "item": "Laptop Bag",
        "price": "₹360",
        "Discount_price": "₹270.00"
      },
      {
        "item": "Regular Bagpack",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Leather Bagpack",
        "price": "₹440",
        "Discount_price": "₹330.00"
      },
      {
        "item": "Trekking Bag",
        "price": "₹480",
        "Discount_price": "₹360.00"
      },
      {
        "item": "Trolley Small",
        "price": "₹460",
        "Discount_price": "₹345.00"
      },
      {
        "item": "Trolley Medium",
        "price": "₹540",
        "Discount_price": "₹405.00"
      },
      {
        "item": "Trolley Large",
        "price": "₹700",
        "Discount_price": "₹525.00"
      },
      {
        "item": "Sports Shoes",
        "price": "₹300",
        "Discount_price": "₹225.00"
      },
      {
        "item": "Canvas Shoes",
        "price": "₹350",
        "Discount_price": "₹262.50"
      },
      {
        "item": "Sneakers",
        "price": "₹380",
        "Discount_price": "₹285.00"
      },
      {
        "item": "Leather Shoes",
        "price": "₹400",
        "Discount_price": "₹300.00"
      },
      {
        "item": "Boots",
        "price": "₹540",
        "Discount_price": "₹405.00"
      },
      {
        "item": "Heels",
        "price": "₹340",
        "Discount_price": "₹255.00"
      }
    ],
    "notes": "Professional cleaning and deodorizing of backpacks and all types of shoes."
  },
  "water-tank": {
    "name": "Water Tank Cleaning",
    "items": [
      {
        "item": "500 Liters",
        "price": "₹499"
      },
      {
        "item": "1000 Liters",
        "price": "₹999"
      },
      {
        "item": "1500 Liters",
        "price": "₹1499"
      },
      {
        "item": "2000 Liters",
        "price": "₹1999"
      }
    ],
    "notes": "Thorough cleaning and disinfection of household or commercial water storage tanks."
  }
};
