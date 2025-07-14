import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, Menu, User, ChevronDown, Leaf } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEcoMode, toggleEcoMode } = useEcoMode();

  return (
    <header className="bg-white shadow-sm transition-all duration-700 ease-in-out">
      {/* Top bar */}
      <div className={`bg-primary dark:bg-ink-deep text-white text-sm py-2 transition-all duration-700 ease-in-out`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Free shipping, arrives in 3+ days</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">Walmart+</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Sign In</span>
            <span className="hidden md:inline">Account</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-primary/800 rounded-md transition-colors duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center">
              <div className={`w-8 h-8 ${isEcoMode ? 'bg-primary' : 'bg-accent'} rounded-full flex items-center justify-center mr-2 transition-all duration-700 ease-in-out transform ${isEcoMode ? 'scale-110' : ''}`}>
                <span className={`${isEcoMode ? 'text-accent' : 'text-primary'} font-bold text-lg transition-colors duration-700`}>W</span>
              </div>
              <span className={`text-2xl font-bold ${isEcoMode ? 'text-accent' : 'text-primary'} transition-colors duration-700`}>Walmart</span>
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className={`w-full px-4 py-3 pr-12 border ${isEcoMode ? 'border-primary focus:ring-primary' : 'border-gray-300 focus:ring-blue-500'} rounded-full focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-500`}
              />
              <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isEcoMode ? 'bg-primary hover:bg-primary' : 'bg-accent hover:brightness-110'} p-2 rounded-full transition-all duration-500 hover:scale-105`}>
                <Search className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Eco Mode Toggle */}
            <button
              onClick={toggleEcoMode}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg ${
                isEcoMode 
                  ? 'bg-light text-primary shadow ring-2 ring-primary' 
                  : 'bg-gray-100 text-gray-600 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <Leaf className={`w-5 h-5 transition-all duration-500 ${isEcoMode ? 'text-primary' : ''}`} />
              <span className="hidden lg:inline text-sm font-medium">
                {isEcoMode ? 'Eco Mode On' : 'Eco Mode Off'}
              </span>
            </button>

            <div className={`hidden lg:flex items-center space-x-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} cursor-pointer transition-colors duration-500`}>
              <MapPin className="w-5 h-5" />
              <div className="text-sm">
                <div className="text-xs text-gray-500">How do you want your items?</div>
                <div className="font-medium">Sacramento, 95829</div>
              </div>
            </div>

            <button className={`hidden md:flex items-center space-x-1 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-500`}>
              <User className="w-6 h-6" />
              <span className="text-sm">Sign In</span>
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <button className={`relative ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-500`} aria-label="View cart">
              <ShoppingCart className="w-6 h-6" />
              <span className={`absolute -top-2 -right-2 ${isEcoMode ? 'bg-green-200 text-green-900' : 'bg-accent'} text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium transition-all duration-500`}>
                  2
              </span>
            </button>
            </Link>

            <button className="md:hidden p-2 hover:bg-primary/800 rounded-md transition-colors duration-300">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search everything at Walmart"
              className={`w-full px-4 py-3 pr-12 border ${isEcoMode ? 'border-primary focus:ring-primary' : 'border-gray-300 focus:ring-blue-500'} rounded-full focus:outline-none focus:ring-2 transition-all duration-500`}
            />
            <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isEcoMode ? 'bg-primary hover:bg-primary' : 'bg-accent hover:brightness-110'} p-2 rounded-full transition-all duration-500`}>
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-primary dark:bg-ink-deep text-white transition-all duration-700 ease-in-out`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex items-center space-x-8 py-3">
            <div className={`flex items-center space-x-1 ${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded cursor-pointer transition-all duration-300`}>
              <Menu className="w-4 h-4" />
              <span>Departments</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Services</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Grocery & Essentials</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Electronics</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Home</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Fashion</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Auto</a>
            <a href="#" className={`${isEcoMode ? 'hover:bg-slate-600' : 'hover:bg-primary'} px-3 py-2 rounded transition-all duration-300`}>Pharmacy</a>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Departments</a>
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Services</a>
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Grocery & Essentials</a>
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Electronics</a>
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Home</a>
            <a href="#" className={`block py-2 ${isEcoMode ? 'text-slate-700 hover:text-accent' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>Fashion</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;