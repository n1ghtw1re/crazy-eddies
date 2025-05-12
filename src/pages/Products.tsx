import React, { useState } from 'react';
import { ZapOff, Sparkles, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products as allProducts } from '../data/products';

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Filter products based on search term
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'featured') {
      return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    } else if (sortBy === 'price-asc') {
      return a.insanePrice - b.insanePrice;
    } else if (sortBy === 'price-desc') {
      return b.insanePrice - a.insanePrice;
    } else if (sortBy === 'stock') {
      return a.stock - b.stock;
    }
    return 0;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center">
            <Sparkles size={28} className="text-cyber-pink mr-2 animate-pulse" />
            <h1 className="font-display text-3xl text-cyber-pink uppercase font-bold glitch-text">
              DECK DEALS!
            </h1>
          </div>
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-cyber-blue" />
            </div>
            <input
              type="text"
              placeholder="SEARCH DECKS"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="cyber-input w-full sm:w-64 pl-10 py-2 font-cyber text-sm bg-cyber-dark border-cyber-blue"
            />
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-cyber-dark border-l-4 border-cyber-yellow p-4 mb-8 flex items-start">
        <ZapOff size={20} className="text-cyber-yellow mr-2 flex-shrink-0 mt-1" />
        <div>
          <p className="font-cyber text-cyber-yellow text-sm animate-pulse">
            <span className="font-bold">SECURITY NOTICE:</span> All transactions are OFF THE GRID. 
            Eddie doesn't log customer data (because he can't remember how the database works).
          </p>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        <p className="font-cyber text-sm text-cyber-green">
          Showing {sortedProducts.length} incredible deals!
        </p>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm font-cyber text-cyber-blue">
            SORT BY:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cyber-input py-1 px-2 text-sm bg-cyber-dark border-cyber-blue"
          >
            <option value="featured">FEATURED</option>
            <option value="price-asc">PRICE (LOW TO HIGH)</option>
            <option value="price-desc">PRICE (HIGH TO LOW)</option>
            <option value="stock">LIMITED STOCK</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="font-display text-xl text-cyber-pink mb-2">
            NO DECKS MATCHING YOUR SEARCH!
          </p>
          <p className="font-cyber text-cyber-green">
            Eddie's probably got what you need, just search for something else!
          </p>
        </div>
      )}
    </div>
  );
};