import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { isEcoMode } = useEcoMode();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-primary dark:bg-ink-deep text-white transition-colors duration-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Mail className="w-16 h-16 mx-auto mb-6 text-accent dark:text-primary transition-transform duration-700 hover:scale-110" />
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-body leading-relaxed">
            {isEcoMode 
              ? 'Get exclusive deals, premium features, and enhanced shopping experience updates delivered to your inbox.'
              : 'Get exclusive deals, new product alerts, and special offers delivered to your inbox.'
            }
          </p>
        </div>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-ink-deep focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 transition-all duration-500"
                required
              />
              <button
                type="submit"
                className="btn-primary px-8 py-4 whitespace-nowrap transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-surface-light mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-light dark:bg-primary/20 border border-primary rounded-2xl p-6 transition-all duration-500 transform scale-105">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 transition-all duration-500 animate-bounce" />
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-surface-light transition-colors duration-500">
                You've successfully subscribed to our newsletter. Check your inbox for a welcome email!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;