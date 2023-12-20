export interface Collections {
  id: string;
  productType: string;
  productTitle: string;
  productLongTitle: string;
  productDescription: string;
  price: number;
  rating: number;
  isWishlisted: boolean;
  productImage: string; // Use the appropriate data type for SVG images
}
