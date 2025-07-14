import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, Truck, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

const initialCart = [
  {
    id: 1,
    name: 'Bissell CrossWave Floor Cleaner',
    price: 289.99,
    originalPrice: 329.99,
    image: 'https://m.media-amazon.com/images/I/71RJQMYZJrL._SL1500_.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Reusable Stainless-Steel Water Bottle',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://m.media-amazon.com/images/I/71Kce2KptlL._SL1500_.jpg',
    quantity: 1,
  },
];

const ECO_POINTS_AVAILABLE = 125;
const ECO_POINTS_CONVERSION_RATE = 0.05; // 5%
const ECO_POINTS_DOLLARS = ECO_POINTS_AVAILABLE * ECO_POINTS_CONVERSION_RATE;
const ECO_SCORE_CURRENT = 1;
const ECO_SCORE_TOTAL = 2;

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);
  const [applyEcoPoints, setApplyEcoPoints] = useState(false);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimatedTax = subtotal * 0.08; // Placeholder 8% tax
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 5.99; // Free over $35
  const ecoPointsEarned = cart.find((item) => item.id === 2) ? cart.find((item) => item.id === 2)!.price : 0;
  const ecoPointsDiscount = applyEcoPoints ? ECO_POINTS_DOLLARS : 0;
  const total = Math.max(0, subtotal + estimatedTax + shipping - ecoPointsDiscount);

  return (
    <main className="bg-surface py-8 md:py-12 px-2 md:px-4 min-h-screen">
      <div className="max-w-6xl mx-auto flex items-stretch gap-8" style={{height: '80vh'}}>
        {/* Cart Items */}
        <section className="lg:w-2/3 bg-white rounded-2xl shadow p-4 md:p-8 h-full overflow-y-auto min-h-0 flex flex-col max-h-[60vh]">
          <h1 className="text-3xl font-bold text-headline mb-6 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-primary" /> Cart
          </h1>
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <ShoppingCart className="w-16 h-16 text-accent mb-6" />
              <p className="text-2xl font-semibold text-headline mb-2">Your cart is empty</p>
              <p className="text-body mb-6">Start shopping to add items to your cart.</p>
              <Link to="/" className="btn-primary px-8 py-4 text-lg">Continue Shopping</Link>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-8 last:border-0 last:pb-0">
                  <img src={item.image} alt={item.name} className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-xl bg-surface border" />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h2 className="text-xl font-semibold text-headline mb-1 md:mb-0">{item.name}</h2>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-headline">${item.price.toFixed(2)}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-body line-through">${item.originalPrice.toFixed(2)}</span>
                        )}
                        {item.originalPrice > item.price && (
                          <span className="ml-2 px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded">Save ${(item.originalPrice - item.price).toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                    {/* Eco Points for Water Bottle */}
                    {item.id === 2 && (
                      <div className="flex items-center gap-1 mt-1 text-body text-sm">
                        <span role="img" aria-label="leaf">🌿</span>
                        <span> Earn {item.price} Eco Points</span>
                      </div>
                    )}
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 rounded-full bg-surface hover:bg-primary/10 border border-surface-light"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 text-lg font-medium">{item.quantity}</span>
                        <button
                          className="p-2 rounded-full bg-surface hover:bg-primary/10 border border-surface-light"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        className="flex items-center gap-1 text-error hover:underline text-sm font-medium ml-0 md:ml-6"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                      <button
                        className="flex items-center gap-1 text-primary hover:underline text-sm font-medium ml-0 md:ml-2"
                        disabled
                        aria-label="Save for later"
                      >
                        <span>Save for later</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4 text-sm text-body">
                      <span className="flex items-center gap-1"><Truck className="w-4 h-4" /> Free shipping</span>
                      <span className="flex items-center gap-1"><Store className="w-4 h-4" /> Pickup available</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Order Summary */}
        <aside className="lg:w-1/3 h-full flex flex-col max-h-[80vh]">
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h2 className="text-2xl font-bold text-headline mb-6">Order Summary</h2>
            {/* Eco Score Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="flex items-center gap-1 text-body text-sm font-medium">
                  <span role="img" aria-label="tree">🌳</span> Eco Score
                </span>
                <span className="text-xs text-body">{ECO_SCORE_CURRENT}/{ECO_SCORE_TOTAL}</span>
              </div>
              <div className="w-full bg-surface-light rounded-full h-3 mb-1">
                <div className="bg-green-700 h-3 rounded-full transition-all duration-500" style={{ width: `${(ECO_SCORE_CURRENT / ECO_SCORE_TOTAL) * 100}%` }}></div>
              </div>
              <div className="text-xs text-body text-right">Complete it, earn more Eco Points!</div>
            </div>
            {/* Eco Points Earned */}
            <div className="flex items-center gap-1 mb-4 text-body text-sm">
              <span role="img" aria-label="leaf">🌿</span>
              Earning {ecoPointsEarned} Eco Points
            </div>
            {/* Apply Eco Points Checkbox */}
            <div className="flex items-center mb-4">
              <input
                id="apply-eco-points"
                type="checkbox"
                checked={applyEcoPoints}
                onChange={() => setApplyEcoPoints((v) => !v)}
                className="form-checkbox h-5 w-5 text-accent rounded focus:ring-accent border-gray-300"
              />
              <label htmlFor="apply-eco-points" className="ml-3 text-body text-sm cursor-pointer">
                <span role="img" aria-label="leaf">🌿</span> Apply <span className="font-semibold">{ECO_POINTS_AVAILABLE} Eco Points</span> (worth ${ECO_POINTS_DOLLARS.toFixed(2)})
              </label>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-body">Subtotal</span>
              <span className="font-semibold text-headline">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-body">Estimated shipping</span>
              <span className="font-semibold text-headline">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-body">Estimated tax</span>
              <span className="font-semibold text-headline">${estimatedTax.toFixed(2)}</span>
            </div>
            {applyEcoPoints && (
              <div className="flex justify-between items-center mb-4 text-green-700">
                <span className="text-body">Eco Points Discount</span>
                <span className="font-semibold">- ${ECO_POINTS_DOLLARS.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t my-4"></div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-headline">Total</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            <button className="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              <ShoppingCart className="w-5 h-5" /> Checkout
            </button>
            <p className="text-xs text-body mt-4 text-center">Shipping and taxes are estimated. You can update them at checkout.</p>
          </div>
          <div className="bg-surface rounded-2xl p-4 text-sm text-body text-center">
            <span className="font-semibold text-primary">Free shipping</span> on orders $35+ &bull; <span className="font-semibold text-primary">Free pickup</span> at your local store
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CartPage; 