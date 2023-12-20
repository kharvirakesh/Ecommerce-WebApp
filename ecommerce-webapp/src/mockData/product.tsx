import { IProduct } from "@/interfaces/carousel.interface";
import { Collections } from "@/interfaces/collections.interface";

export const carouselProducts: IProduct[] = [
  {
    id: "1",
    productType: "watch",
    productTitle: "Exquisite Watches",
    productDescription:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship",
    price: 430.0,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "2",
    productType: "shoes",
    productTitle: "Comfortable Sneakers",
    productDescription:
      "Experience Unmatched Comfort with Our Collection of Stylish Sneakers - shoes",
    price: 75.0,
    productImage: require("../../public/shoes.png"),
  },
  {
    id: "3",
    productType: "phone",
    productTitle: "Smartphone Technology",
    productDescription:
      "Stay Connected with the Latest Smartphone Technology and Innovative Features - phone",
    price: 699.99,
    productImage: require("../../public/iphone.png"),
  },
  {
    id: "4",
    productType: "laptop",
    productTitle: "High-Performance Laptops",
    productDescription:
      "Boost Your Productivity with High-Performance Laptops for Work and Entertainment - laptop",
    price: 1199.0,
    productImage: require("../../public/macbook.png"),
  },
  {
    id: "5",
    productType: "headphones",
    productTitle: "Premium Headphones",
    productDescription:
      "Immerse Yourself in Crystal-Clear Sound with Our Premium Headphone Collection - headphones",
    price: 149.99,
    productImage: require("../../public/headphone.png"),
  },
  {
    id: "6",
    productType: "headphones",
    productTitle: "Premium Headphones",
    productDescription:
      "Immerse Yourself in Crystal-Clear Sound with Our Premium Headphone Collection - headphones",
    price: 149.99,
    productImage: require("../../public/headphone.png"),
  },
];

export const collectionProducts: Collections[] = [
  // Watches
  {
    id: "2",
    productType: "watches",
    productTitle: "Exquisite Watches",
    productLongTitle: "Timeless Elegance and Precision Craftsmanship",
    productDescription:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship",
    price: 430.0,
    isWishlisted: false,
    rating: 4.0,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "3",
    productType: "watches",
    productTitle: "Luxury Chronograph Watch",
    productLongTitle: "Sleek Design and High-Performance",
    productDescription:
      "Elevate Your Style with a Luxury Chronograph Watch - Sleek Design and High-Performance",
    price: 599.0,
    isWishlisted: true,
    rating: 4.8,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "4",
    productType: "watches",
    productTitle: "Minimalist Style Watch",
    productLongTitle: "Elegant and Understated Design",
    productDescription:
      "Make a Statement with a Minimalist Style Watch - Elegant and Understated Design",
    price: 299.0,
    isWishlisted: false,
    rating: 4.4,
    productImage: require("../../public/watches.svg"),
  },
  // Shoes
  {
    id: "7",
    productType: "shoes",
    productTitle: "Classic Leather Shoes",
    productLongTitle:
      "Handcrafted Leather Shoes Designed for Comfort and Elegance",
    productDescription:
      "Step Out in Style with These Handcrafted Leather Shoes Designed for Comfort and Elegance",
    price: 120.0,
    isWishlisted: false,
    rating: 4.5,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "8",
    productType: "shoes",
    productTitle: "Sporty Sneakers",
    productLongTitle: "Stylish and Comfortable Sneakers",
    productDescription:
      "Stay Comfortable and Stylish with These Sporty Sneakers - Perfect for Any Occasion",
    price: 89.0,
    isWishlisted: false,
    rating: 4.2,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "9",
    productType: "shoes",
    productTitle: "Formal Oxford Shoes",
    productLongTitle: "Sophisticated and Classy",
    productDescription:
      "Complete Your Formal Look with Sophisticated and Classy Oxford Shoes",
    price: 199.0,
    isWishlisted: false,
    rating: 4.6,
    productImage: require("../../public/watches.svg"),
  },
  // Bags
  {
    id: "12",
    productType: "bags",
    productTitle: "Travel Backpack",
    productLongTitle: "Versatile and Durable Travel Backpack",
    productDescription:
      "Versatile and Durable Travel Backpack - Perfect Companion for Your Journeys",
    price: 120.0,
    isWishlisted: true,
    rating: 4.7,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "13",
    productType: "bags",
    productTitle: "Leather Messenger Bag",
    productLongTitle: "Classic and Functional Design",
    productDescription:
      "Classic and Functional Leather Messenger Bag - Carry Your Essentials in Style",
    price: 150.0,
    isWishlisted: false,
    rating: 4.6,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "14",
    productType: "bags",
    productTitle: "Stylish Tote Bag",
    productLongTitle: "Chic and Practical",
    productDescription:
      "Stay Chic and Practical with This Stylish Tote Bag - Perfect for Everyday Use",
    price: 75.0,
    isWishlisted: false,
    rating: 4.3,
    productImage: require("../../public/watches.svg"),
  },
  // Skincare
  {
    id: "17",
    productType: "skincare",
    productTitle: "Skincare Essentials Set",
    productLongTitle: "Revitalize Your Skin with Skincare Essentials Set",
    productDescription:
      "Revitalize Your Skin with Skincare Essentials Set - Healthy and Radiant Skin",
    price: 99.0,
    isWishlisted: true,
    rating: 4.5,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "18",
    productType: "skincare",
    productTitle: "Natural Skincare Set",
    productLongTitle: "Pure and Natural Ingredients",
    productDescription:
      "Nourish Your Skin with a Natural Skincare Set - Pure and Natural Ingredients",
    price: 79.0,
    isWishlisted: false,
    rating: 4.3,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "19",
    productType: "skincare",
    productTitle: "Anti-Aging Serum",
    productLongTitle: "Youthful Glow and Firmness",
    productDescription:
      "Achieve Youthful Glow and Firmness with This Anti-Aging Serum",
    price: 49.0,
    isWishlisted: false,
    rating: 4.7,
    productImage: require("../../public/watches.svg"),
  },
  // Hats
  {
    id: "22",
    productType: "hat",
    productTitle: "Stylish Hat Collection",
    productLongTitle: "Complete Your Look with a Stylish Hat Collection",
    productDescription:
      "Complete Your Look with a Stylish Hat Collection - Fashionable and Functional",
    price: 45.0,
    isWishlisted: true,
    rating: 4.4,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "23",
    productType: "hat",
    productTitle: "Vintage Fedora Hat",
    productLongTitle: "Timeless Vintage Style",
    productDescription:
      "Add a Touch of Vintage Style with a Classic Fedora Hat - Timeless Elegance",
    price: 55.0,
    isWishlisted: false,
    rating: 4.7,
    productImage: require("../../public/watches.svg"),
  },
  {
    id: "24",
    productType: "hat",
    productTitle: "Beanie Knit Hat",
    productLongTitle: "Warm and Trendy",
    productDescription:
      "Stay Warm and Trendy with This Comfortable Beanie Knit Hat",
    price: 35.0,
    isWishlisted: false,
    rating: 4.2,
    productImage: require("../../public/watches.svg"),
  },
  // Add more entries for each product type...
];
