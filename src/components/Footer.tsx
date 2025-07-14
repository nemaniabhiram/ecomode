import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

const Footer = () => {
  const { isEcoMode } = useEcoMode();

  return (
    <footer className="bg-ink-deep text-surface-light">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className={`w-10 h-10 bg-accent dark:bg-primary rounded-full flex items-center justify-center mr-3 transition-all duration-700 ${isEcoMode ? 'animate-pulse' : ''}`}>
                <span className={`text-ink-deep font-bold text-xl transition-colors duration-700`}>W</span>
              </div>
              <span className="text-2xl font-bold">Walmart</span>
            </div>
            <p className="text-body leading-relaxed">
              {isEcoMode 
                ? 'Save money. Live better. Experience premium. Your sophisticated shopping destination with enhanced readability and modern design.'
                : 'Save money. Live better. Your one-stop shop for everything you need, from groceries to electronics, all at unbeatable prices.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${isEcoMode ? 'bg-ink-deep hover:bg-primary' : 'bg-gray-800 hover:bg-primary'} p-3 rounded-full transition-all duration-500 hover:scale-110`}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className={`${isEcoMode ? 'bg-ink-deep hover:bg-primary' : 'bg-gray-800 hover:bg-primary/80'} p-3 rounded-full transition-all duration-500 hover:scale-110`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className={`${isEcoMode ? 'bg-ink-deep hover:bg-primary' : 'bg-gray-800 hover:bg-pink-600'} p-3 rounded-full transition-all duration-500 hover:scale-110`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className={`${isEcoMode ? 'bg-ink-deep hover:bg-primary' : 'bg-gray-800 hover:bg-red-600'} p-3 rounded-full transition-all duration-500 hover:scale-110`}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-primary transition-colors duration-700`}>Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>About Us</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Careers</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Store Locator</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Weekly Ad</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Walmart+</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Gift Cards</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-primary transition-colors duration-700`}>Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Help Center</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Track Your Order</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Returns & Exchanges</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Shipping Info</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Contact Us</a></li>
              <li><a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Accessibility</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-6 text-primary transition-colors duration-700`}>Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 text-primary mt-1 flex-shrink-0 transition-colors duration-700`} />
                <div className="text-body">
                  <p>702 SW 8th Street</p>
                  <p>Bentonville, AR 72716</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 text-primary flex-shrink-0 transition-colors duration-700`} />
                <span className="text-body">1-800-WALMART</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 text-primary flex-shrink-0 transition-colors duration-700`} />
                <span className="text-body">help@walmart.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ink-deep/60 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-body text-sm">
              &copy; 2024 Walmart Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Privacy Policy</a>
              <a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Terms of Service</a>
              <a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>Cookie Policy</a>
              <a href="#" className={`text-body ${isEcoMode ? 'hover:text-primary' : 'hover:text-white'} transition-colors duration-300`}>California Privacy Rights</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;