import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const product = {
  id: 2,
  name: 'Reusable Stainless-Steel Water Bottle',
  price: 24.99,
  originalPrice: 29.99,
  rating: 4.7,
  reviews: 521,
  description:
    'Stay hydrated on the go with this durable stainless-steel bottle featuring double-wall insulation to keep drinks cold for up to 24 hours.',
  badge: 'BPA Free',
  badgeColor: 'blue',
  images: [
    'https://m.media-amazon.com/images/I/71Kce2KptlL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/61vzpw+JDdL._SL1500_.jpg',
    'https://m.media-amazon.com/images/I/71vBFKLJQtL._SL1500_.jpg',
  ],
  highlights: [
    '18/8 food-grade stainless steel',
    'Keeps drinks cold for 24h / hot for 12h',
    'Leak-proof screw lid with carry handle',
    'Dishwasher safe & condensation-free'
  ],
  specifications: {
    Capacity: '24 oz',
    Weight: '0.6 lb',
    Insulation: 'Double-wall vacuum',
    Finish: 'Powder-coated'
  }
};

const WaterBottlePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  const suggestions = [
    {
      id: 301,
      name: 'Hydro Flask Flex Straw Lid',
      price: 12.95,
      image: 'data:image/jpeg;base64,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',
      link: '#'
    },
    {
      id: 302,
      name: 'CamelBak Eddy+ Straw Set (2-pk)',
      price: 9.99,
      image: 'data:image/jpeg;base64,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',
      link: '#'
    },
    {
      id: 303,
      name: 'Simple Modern Silicone Bottle Boot',
      price: 7.99,
      image: 'data:image/jpeg;base64,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',
      link: '#'
    },
    {
      id: 304,
      name: 'Hydro Flask Sports Cap',
      price: 9.95,
      image: 'data:image/jpeg;base64,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',
      link: '#'
    }
  ];


  return (
    <main className="bg-surface py-8 md:py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow md:flex p-6">
        {/* Image gallery */}
        <div className="md:w-1/2 flex flex-col md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:overflow-y-auto md:max-h-[28rem] scrollbar-thin pr-1">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setSelectedImg(img)}
                className={`h-20 w-20 md:h-24 md:w-24 object-cover rounded-lg cursor-pointer border-2 ${selectedImg === img ? 'border-primary' : 'border-transparent'}`}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1">
            <img
              src={selectedImg}
              alt={product.name}
              className="rounded-lg w-full h-[22rem] md:h-[28rem] object-cover"
            />
            <button className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition duration-300 shadow">
              <Heart className="w-5 h-5 text-headline hover:text-primary" />
            </button>
            <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-${product.badgeColor}-500 text-white`}>
              {product.badge}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 flex flex-col space-y-6">
          <h1 className="text-3xl font-bold text-headline">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-primary fill-current' : 'text-body'}`}
                />
              ))}
            </div>
            <span className="text-sm text-body">
              {product.rating} ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Pricing */}
          <div>
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-headline">${product.price.toFixed(2)}</span>
              <span className="text-2xl text-body line-through">${product.originalPrice.toFixed(2)}</span>
            </div>
            <div className="text-body font-medium flex items-center space-x-1 mt-1">
              <span role="img" aria-label="leaf">🌿</span>
              <span> Earn {product.price} Eco Points</span>
            </div>
          </div>

          {/* Highlights */}
          <ul className="list-disc pl-5 space-y-1 text-body">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          {/* About */}
          <div>
            <h2 className="font-semibold mb-2 text-headline">About this item</h2>
            <p className="text-body leading-relaxed">{product.description}</p>
          </div>

          {/* Specs */}
          <div>
            <h2 className="font-semibold mb-2 text-headline">Specifications</h2>
            <table className="w-full text-sm text-body">
              <tbody>
                {Object.entries(product.specifications).map(([key, val]) => (
                  <tr key={key} className="border-b last:border-0">
                    <td className="py-2 font-medium w-1/2">{key}</td>
                    <td className="py-2">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn-primary py-4 flex items-center justify-center space-x-2 hover:scale-105 transition-transform sticky bottom-4 md:static md:w-auto w-full">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>

          <Link to="/" className="text-primary hover:underline inline-block mt-4">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Suggestions */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-headline mb-6">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {suggestions.map((item) => (
            <Link key={item.id} to={item.link} className="block group">
              <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain group-hover:scale-105 transition-transform"
                />
                <div className="p-4">
                  <p className="font-medium text-headline group-hover:text-primary mb-1">{item.name}</p>
                  <p className="text-body">${item.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WaterBottlePage;
