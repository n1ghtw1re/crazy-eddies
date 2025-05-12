import React from 'react';
import { Zap } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  originalPrice: number;
  insanePrice: number;
  stock: number;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  description,
  originalPrice,
  insanePrice,
  stock,
  featured = false,
}) => {
  const discount = Math.floor(((originalPrice - insanePrice) / originalPrice) * 100);
  const stockClass = stock < 5 ? 'text-cyber-red' : 'text-cyber-green';
  
  return (
    <div 
      className={`relative flex flex-col border-2 ${
        featured 
          ? 'border-cyber-pink shadow-[0_0_20px_theme(colors.cyber-pink)]' 
          : 'border-cyber-blue hover:border-cyber-pink transition-colors'
      } bg-cyber-dark rounded-md overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_theme(colors.cyber-pink)]`}
    >
      {/* Flash overlay effect */}
      <div className="absolute inset-0 bg-white opacity-0 mix-blend-overlay pointer-events-none flash-overlay"></div>
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-0 right-0 bg-cyber-pink text-black font-bold py-1 px-3 uppercase font-glitch animate-pulse z-10">
          HOT DEAL!
        </div>
      )}
      
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-cyber-black">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Discount badge */}
        <div className="absolute top-2 left-2 bg-cyber-yellow font-bold py-1 px-2 rounded-md text-black flex items-center">
          <Zap size={16} className="mr-1" />
          <span>{discount}% OFF!</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-display text-xl text-cyber-blue font-bold mb-2">{name}</h3>
        <p className="font-cyber text-sm text-white mb-4">{description}</p>
        
        {/* Price section */}
        <div className="mt-auto">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm text-gray-400 line-through">{originalPrice.toLocaleString('en-US')} €$</span>
            <span className="price-tag text-lg font-bold">
              {insanePrice.toLocaleString('en-US')} €$
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className={`text-sm font-cyber ${stockClass}`}>
              {stock < 5 ? `ONLY ${stock} LEFT!` : 'In Stock'}
            </span>
            
            <button className="cyber-btn text-sm">
              BUY NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};