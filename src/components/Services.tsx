import React from 'react';
import { Truck, Clock, Shield, Headphones } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

const services = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on orders $35+ or pickup today',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Same-day delivery available in select areas',
    color: 'green'
  },
  {
    icon: Shield,
    title: 'Easy Returns',
    description: '90-day return policy on most items',
    color: 'purple'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Customer service available around the clock',
    color: 'orange'
  }
];

const Services = () => {
  const { isEcoMode } = useEcoMode();

  const getIconColor = () => isEcoMode ? 'text-primary' : 'text-primary';

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-headline mb-4">Why Shop With Us</h2>
          <p className="text-xl text-body">Experience the Walmart difference</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${getIconColor()} bg-light rounded-full mb-6 transition-transform duration-300 hover:scale-110`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-headline mb-3">
                  {service.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;