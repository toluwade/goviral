'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ServicesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Instagram Services
    {
      id: 'ig-followers-1',
      platform: 'instagram',
      category: 'followers',
      name: 'Instagram Followers - High Quality',
      description: 'Real, active Instagram followers with profile pictures and posts',
      minQuantity: 50,
      maxQuantity: 10000,
      pricePerUnit: 12,
      deliveryTime: '12-24 hours',
      quality: 'Premium',
      rating: 4.8,
      orders: 1245
    },
    {
      id: 'ig-followers-2',
      platform: 'instagram',
      category: 'followers',
      name: 'Instagram Followers - Fast Delivery',
      description: 'Quick delivery Instagram followers for instant boost',
      minQuantity: 100,
      maxQuantity: 50000,
      pricePerUnit: 8,
      deliveryTime: '1-6 hours',
      quality: 'High',
      rating: 4.6,
      orders: 2341
    },
    {
      id: 'ig-likes-1',
      platform: 'instagram',
      category: 'engagement',
      name: 'Instagram Likes - Auto Refill',
      description: 'Instagram post likes with automatic refill guarantee',
      minQuantity: 20,
      maxQuantity: 100000,
      pricePerUnit: 4,
      deliveryTime: '5-30 minutes',
      quality: 'Premium',
      rating: 4.9,
      orders: 5678
    },
    {
      id: 'ig-views-1',
      platform: 'instagram',
      category: 'engagement',
      name: 'Instagram Reel Views',
      description: 'High retention views for your Instagram Reels',
      minQuantity: 100,
      maxQuantity: 1000000,
      pricePerUnit: 2,
      deliveryTime: '1-12 hours',
      quality: 'High',
      rating: 4.7,
      orders: 3456
    },
    
    // YouTube Services
    {
      id: 'yt-subscribers-1',
      platform: 'youtube',
      category: 'followers',
      name: 'YouTube Subscribers - Lifetime Guarantee',
      description: 'Real YouTube subscribers with lifetime refill guarantee',
      minQuantity: 50,
      maxQuantity: 5000,
      pricePerUnit: 25,
      deliveryTime: '24-72 hours',
      quality: 'Premium',
      rating: 4.8,
      orders: 892
    },
    {
      id: 'yt-views-1',
      platform: 'youtube',
      category: 'engagement',
      name: 'YouTube Views - High Retention',
      description: 'High retention YouTube video views from real users',
      minQuantity: 1000,
      maxQuantity: 1000000,
      pricePerUnit: 1.5,
      deliveryTime: '12-48 hours',
      quality: 'Premium',
      rating: 4.9,
      orders: 4567
    },
    {
      id: 'yt-likes-1',
      platform: 'youtube',
      category: 'engagement',
      name: 'YouTube Likes - Safe & Fast',
      description: 'Safe YouTube video likes from active accounts',
      minQuantity: 25,
      maxQuantity: 50000,
      pricePerUnit: 8,
      deliveryTime: '6-24 hours',
      quality: 'High',
      rating: 4.6,
      orders: 2134
    },

    // TikTok Services
    {
      id: 'tt-followers-1',
      platform: 'tiktok',
      category: 'followers',
      name: 'TikTok Followers - Real & Active',
      description: 'Real TikTok followers from active users worldwide',
      minQuantity: 100,
      maxQuantity: 20000,
      pricePerUnit: 18,
      deliveryTime: '6-24 hours',
      quality: 'Premium',
      rating: 4.7,
      orders: 1567
    },
    {
      id: 'tt-likes-1',
      platform: 'tiktok',
      category: 'engagement',
      name: 'TikTok Likes - Instant Start',
      description: 'Fast TikTok likes with instant delivery start',
      minQuantity: 50,
      maxQuantity: 500000,
      pricePerUnit: 6,
      deliveryTime: '0-1 hours',
      quality: 'High',
      rating: 4.8,
      orders: 3789
    },
    {
      id: 'tt-views-1',
      platform: 'tiktok',
      category: 'engagement',
      name: 'TikTok Views - Organic Looking',
      description: 'Organic-looking TikTok video views with good retention',
      minQuantity: 1000,
      maxQuantity: 10000000,
      pricePerUnit: 1,
      deliveryTime: '1-6 hours',
      quality: 'High',
      rating: 4.6,
      orders: 6789
    },

    // Twitter Services
    {
      id: 'tw-followers-1',
      platform: 'twitter',
      category: 'followers',
      name: 'Twitter Followers - Profile Verified',
      description: 'Twitter followers from verified and active profiles',
      minQuantity: 50,
      maxQuantity: 10000,
      pricePerUnit: 22,
      deliveryTime: '12-48 hours',
      quality: 'Premium',
      rating: 4.7,
      orders: 945
    },
    {
      id: 'tw-likes-1',
      platform: 'twitter',
      category: 'engagement',
      name: 'Twitter Likes - Fast & Safe',
      description: 'Safe Twitter tweet likes with fast delivery',
      minQuantity: 25,
      maxQuantity: 100000,
      pricePerUnit: 9,
      deliveryTime: '1-12 hours',
      quality: 'High',
      rating: 4.5,
      orders: 2345
    },

    // Facebook Services
    {
      id: 'fb-likes-1',
      platform: 'facebook',
      category: 'engagement',
      name: 'Facebook Page Likes - Country Targeted',
      description: 'Country-targeted Facebook page likes from real users',
      minQuantity: 100,
      maxQuantity: 50000,
      pricePerUnit: 15,
      deliveryTime: '24-72 hours',
      quality: 'Premium',
      rating: 4.6,
      orders: 1234
    },
    {
      id: 'fb-post-likes-1',
      platform: 'facebook',
      category: 'engagement',
      name: 'Facebook Post Likes - Instant',
      description: 'Instant Facebook post likes for viral boost',
      minQuantity: 20,
      maxQuantity: 25000,
      pricePerUnit: 8,
      deliveryTime: '0-6 hours',
      quality: 'High',
      rating: 4.4,
      orders: 1876
    }
  ];

  const platforms = [
    { 
      id: 'all', 
      name: 'All Platforms',
      icon: null
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'followers', name: 'Followers' },
    { id: 'engagement', name: 'Engagement' }
  ];

  const getQualityColor = (quality: string) => {
    switch (quality.toLowerCase()) {
      case 'premium':
        return 'text-green-500 bg-green-500/10';
      case 'high':
        return 'text-blue-500 bg-blue-500/10';
      case 'standard':
        return 'text-yellow-500 bg-yellow-500/10';
      default:
        return 'text-muted-foreground bg-secondary/20';
    }
  };

  const filteredServices = services.filter(service => {
    const matchesPlatform = selectedPlatform === 'all' || service.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesPlatform && matchesCategory && matchesSearch;
  });

  const handleOrderNow = (service: typeof services[0]) => {
    // This would typically navigate to the new order page with pre-filled data
    console.log('Order service:', service);
    alert(`Redirecting to order page for ${service.name}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            Services <span className="text-primary">List</span>
          </h1>
          <p className="text-muted-foreground">Browse all available social media marketing services with pricing.</p>
        </div>

        {/* Filters */}
        <div className="bg-secondary/10 border border-border p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-input border-border text-foreground"
              />
            </div>

            {/* Platform Filter */}
            <div>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {platforms.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                    {platform.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex items-center gap-2 px-4 py-2 border transition-colors ${
                selectedPlatform === platform.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:bg-primary/5 text-foreground'
              }`}
            >
              {platform.icon && <div className="text-muted-foreground">{platform.icon}</div>}
              {platform.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-secondary/10 border border-border p-6 hover:bg-primary/5 transition-colors">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-muted-foreground">
                    {platforms.find(p => p.id === service.platform)?.icon}
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium ${getQualityColor(service.quality)}`}>
                    {service.quality}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-sm font-medium text-foreground">{service.rating}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="mb-4">
                <h3 className="text-lg font-medium text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Order:</span>
                    <span className="text-foreground font-medium">{service.minQuantity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Order:</span>
                    <span className="text-foreground font-medium">{service.maxQuantity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery:</span>
                    <span className="text-foreground font-medium">{service.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Orders:</span>
                    <span className="text-foreground font-medium">{service.orders.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-primary/10 border border-primary/20 p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Price per unit:</span>
                  <span className="text-primary font-bold text-lg">₦{service.pricePerUnit.toFixed(2)}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Starting from ₦{(service.minQuantity * service.pricePerUnit).toFixed(2)} for {service.minQuantity.toLocaleString()} units
                </div>
              </div>

              {/* Order Button */}
              <Button 
                onClick={() => handleOrderNow(service)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Order Now
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-2">No services found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your filters to see more services.
            </p>
            <Button 
              onClick={() => {
                setSelectedPlatform('all');
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              variant="outline" 
              className="border-border text-foreground hover:bg-primary/10"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        {filteredServices.length > 0 && (
          <div className="text-center text-muted-foreground text-sm">
            Showing {filteredServices.length} of {services.length} services
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}