import React from 'react';
import { Smartphone, Home, Car, Shirt, Baby, Gamepad2, Heart, Utensils } from 'lucide-react';
import { useEcoMode } from '../contexts/EcoModeContext';

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'blue' },
  { name: 'Home', icon: Home, color: 'green' },
  { name: 'Auto', icon: Car, color: 'red' },
  { name: 'Fashion', icon: Shirt, color: 'purple' },
  { name: 'Baby', icon: Baby, color: 'pink' },
  { name: 'Gaming', icon: Gamepad2, color: 'indigo' },
  { name: 'Health', icon: Heart, color: 'orange' },
  { name: 'Grocery', icon: Utensils, color: 'yellow' },
];

const Categories = () => {
  const { isEcoMode } = useEcoMode();

  const getColorClasses = () => {
    return isEcoMode
      ? 'bg-light text-primary'
      : 'bg-accent text-ink-deep';
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-headline mb-4">Shop by Category</h2>
          <p className="text-xl text-body">Find everything you need in one place</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                  <div className={`w-16 h-16 ${getColorClasses()} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 ${isEcoMode ? 'group-hover:rotate-12' : ''}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className={`text-center font-semibold text-headline group-hover:text-primary transition-colors duration-500`}>
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;