import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

// Default featured products (non-eco mode)
const products = [
  {
    id: 1,
    name: 'Bissell CrossWave Floor Cleaner',
    price: 289.99,
    originalPrice: 329.99,
    rating: 4.8,
    reviews: 2847,
    image: 'https://m.media-amazon.com/images/I/71RJQMYZJrL._SL1500_.jpg',
    badge: 'Best Seller',
    badgeColor: 'orange'
  },
  {
    id: 2,
    name: 'Samsung 65" 4K Smart TV',
    price: 549.99,
    originalPrice: 799.99,
    rating: 4.6,
    reviews: 1523,
    image: 'https://m.media-amazon.com/images/I/81BXTdEC03L._SL1500_.jpg',
    badge: '31% Off',
    badgeColor: 'red'
  },
  {
    id: 3,
    name: 'Nike Air Max Sneakers',
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.7,
    reviews: 892,
    image: 'https://m.media-amazon.com/images/I/61TSOkDdbOL._SY695_.jpg',
    badge: 'Popular',
    badgeColor: 'blue'
  },
  {
    id: 4,
    name: 'KitchenAid Stand Mixer',
    price: 279.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviews: 3421,
    image: 'https://m.media-amazon.com/images/I/51ZjhSjQQPL._SL1000_.jpg',
    badge: 'Top Rated',
    badgeColor: 'green'
  },
  {
    id: 5,
    name: 'Dyson V15 Vacuum',
    price: 649.99,
    originalPrice: 749.99,
    rating: 4.5,
    reviews: 756,
    image: 'https://m.media-amazon.com/images/I/61bXGHeYuhL._SL1500_.jpg',
    badge: 'New',
    badgeColor: 'purple'
  },
  {
    id: 6,
    name: 'MacBook Air M2',
    price: 1099.00,
    originalPrice: 1199.00,
    rating: 4.8,
    reviews: 1847,
    image: 'https://m.media-amazon.com/images/I/71RDgtHsREL._SL1500_.jpg',
    badge: 'Limited Time',
    badgeColor: 'yellow'
  }
];

// Eco-friendly product selection displayed when Eco Mode is enabled
const ecoProducts = [
  {
    id: 1,
    name: 'Organic Floral Perfume',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 327,
    image: 'https://img.forestessentialsindia.com/pub/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/2/1/21522_cooling_body_mist_mogra_50ml_1.png',
    badge: 'Eco Friendly',
    badgeColor: 'green'
  },
  {
    id: 2,
    name: 'Reusable Stainless-Steel Water Bottle',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 521,
    image: 'https://m.media-amazon.com/images/I/71Kce2KptlL._SL1500_.jpg',
    badge: 'BPA Free',
    badgeColor: 'blue'
  },
  {
    id: 3,
    name: 'Zero-Waste Shampoo Bar',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviews: 214,
    image: 'https://i.etsystatic.com/15873210/r/il/9e123f/5842208045/il_570xN.5842208045_2olg.jpg',
    badge: 'Plastic Free',
    badgeColor: 'purple'
  },
  {
    id: 4,
    name: 'Recycled Paper Notebook',
    price: 6.99,
    originalPrice: 8.99,
    rating: 4.3,
    reviews: 189,
    image: 'https://www.rescript.in/assets/uploads/inventory/pro_63d8d7365a5212556.jpg',
    badge: '100% Recycled',
    badgeColor: 'yellow'
  },
  {
    id: 5,
    name: 'Portable Solar Charger',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 412,
    image: 'data:image/jpeg;base64,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',
    badge: 'Renewable',
    badgeColor: 'orange'
  },
  {
    id: 6,
    name: 'Pre-Seasoned Cast-Iron Pan',
    price: 29.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 987,
    image: 'https://brownliving.in/cdn/shop/files/castrong-handmade-cast-iron-skillet-fry-pan-80s-cookware-sustainable-cookware-brown-living-castiron-skiilet-fry-pan-3000g-packof1-173880.jpg?v=1745244771',
    badge: 'Durable',
    badgeColor: 'red'
  }
];

const FeaturedProducts = () => {
  const { isEcoMode } = useEcoMode();

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-headline mb-4">Featured Products</h2>
            <p className="text-xl text-body">Discover our most popular items</p>
          </div>
          <button className="hidden md:block btn-primary transition-transform hover:scale-105 hover:shadow-lg">
            View All Products
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isEcoMode ? ecoProducts : products).map((product: any) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 badge-positive px-3 py-1 text-sm font-medium transition-all duration-500`}>
                  {product.badge}
                </div>
                <button className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                  <Heart className={`w-5 h-5 text-headline hover:text-primary transition-colors duration-300`} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className={`font-semibold text-lg text-headline mb-2 group-hover:text-primary transition-colors duration-300`}>
                  {product.id === 1 ? (
                    <Link to="/product/floor-cleaner" className="hover:underline">
                      {product.name}
                    </Link>
                  ) : product.id === 2 ? (
                    <Link to="/product/water-bottle" className="hover:underline">
                      {product.name}
                    </Link>
                  ) : (
                    product.name
                  )}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-primary fill-current'
                            : 'text-body'
                        } transition-colors duration-500`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-body ml-2">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-headline">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-body line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="font-semibold text-lg text-headline mb-2 group-hover:text-primary transition-colors duration-300">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  )}
                </div>
                {isEcoMode && (
                  <div className="flex items-center gap-1 mb-2 text-body text-sm">
                    <span role="img" aria-label="leaf">🌿</span>
                    <span> Earn {product.price} Eco Points</span>
                  </div>
                )}
                
                <button className="btn-primary w-full py-3 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="md:hidden btn-primary px-8 py-3 transition-transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;