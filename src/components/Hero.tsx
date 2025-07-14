import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Home } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

const Hero = () => {
  const { isEcoMode } = useEcoMode();

  return (
    <section className={`relative ${isEcoMode ? 'bg-gradient-to-r from-slate-800 to-slate-900' : 'bg-gradient-to-r from-primary to-primary/80'} text-white transition-all duration-1000 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Save Money.
              <br />
              <span className={`${isEcoMode ? 'text-accent' : 'text-accent'} transition-colors duration-700`}>Live Better.</span>
            </h1>
            <p className={`text-xl leading-relaxed transition-colors duration-700 ${isEcoMode ? 'text-green-100' : 'text-primary/90'}`}>
              {isEcoMode 
                ? 'Shop sustainably and make a difference. Enjoy eco-friendly products, green rewards, and a premium dark experience. Free shipping on orders $35+ or pickup today.'
                : 'Shop millions of items with free shipping on orders $35+ or pickup today. Plus, get exclusive deals with Walmart+.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 transform hover:scale-105 hover:shadow-lg">
                Start Shopping
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-ink-deep font-semibold px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105">
                Try Walmart+
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform transition-all duration-700 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Today's Deals</h3>
                  <span className={`${isEcoMode ? 'text-primary' : 'text-red-600'} font-semibold transition-colors duration-500`}>Up to 70% off</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg p-4 text-center transition-all duration-500 hover:shadow-md">
                    <div className={`w-16 h-16 flex items-center justify-center ${isEcoMode ? 'bg-light text-primary' : 'bg-accent text-ink-deep'} rounded-lg mx-auto mb-2 transition-colors duration-500`}>
                        <Monitor className="w-8 h-8 text-primary" />
                      </div>
                    <p className="text-sm text-gray-600">Electronics</p>
                    <p className="font-semibold text-gray-800">Up to 50% off</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center transition-all duration-500 hover:shadow-md">
                    <div className={`w-16 h-16 flex items-center justify-center ${isEcoMode ? 'bg-light text-primary' : 'bg-accent text-ink-deep'} rounded-lg mx-auto mb-2 transition-colors duration-500`}>
                        <Home className="w-8 h-8 text-primary" />
                      </div>
                    <p className="text-sm text-gray-600">Home & Garden</p>
                    <p className="font-semibold text-gray-800">Up to 40% off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110">
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;