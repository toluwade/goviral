'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function NewOrderPage() {
  const [formData, setFormData] = useState({
    platform: '',
    service: '',
    packageType: 'normal',
    link: '',
    quantity: ''
  });
  const [priceEstimate, setPriceEstimate] = useState(0);
  const [deliveryEstimate, setDeliveryEstimate] = useState('');

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    }
  ];

  const servicesByPlatform = {
    instagram: [
      { id: 'followers', name: 'Followers', basePrice: 10 },
      { id: 'likes', name: 'Likes', basePrice: 5 },
      { id: 'views', name: 'Views', basePrice: 2 },
      { id: 'comments', name: 'Comments', basePrice: 20 },
      { id: 'saves', name: 'Saves', basePrice: 10 },
      { id: 'shares', name: 'Shares', basePrice: 15 }
    ],
    youtube: [
      { id: 'subscribers', name: 'Subscribers', basePrice: 20 },
      { id: 'views', name: 'Views', basePrice: 1 },
      { id: 'likes', name: 'Likes', basePrice: 10 },
      { id: 'comments', name: 'Comments', basePrice: 30 },
      { id: 'watch-time', name: 'Watch Time', basePrice: 5 }
    ],
    tiktok: [
      { id: 'followers', name: 'Followers', basePrice: 15 },
      { id: 'likes', name: 'Likes', basePrice: 8 },
      { id: 'views', name: 'Views', basePrice: 2 },
      { id: 'comments', name: 'Comments', basePrice: 25 },
      { id: 'shares', name: 'Shares', basePrice: 20 }
    ],
    twitter: [
      { id: 'followers', name: 'Followers', basePrice: 20 },
      { id: 'likes', name: 'Likes', basePrice: 10 },
      { id: 'retweets', name: 'Retweets', basePrice: 15 },
      { id: 'replies', name: 'Replies', basePrice: 30 },
      { id: 'views', name: 'Views', basePrice: 1 }
    ],
    facebook: [
      { id: 'likes', name: 'Page Likes', basePrice: 20 },
      { id: 'post-likes', name: 'Post Likes', basePrice: 10 },
      { id: 'comments', name: 'Comments', basePrice: 30 },
      { id: 'shares', name: 'Shares', basePrice: 25 },
      { id: 'views', name: 'Video Views', basePrice: 2 }
    ],
    telegram: [
      { id: 'members', name: 'Channel Members', basePrice: 25 },
      { id: 'views', name: 'Post Views', basePrice: 3 },
      { id: 'reactions', name: 'Reactions', basePrice: 15 },
      { id: 'comments', name: 'Comments', basePrice: 30 }
    ]
  };

  const packageMultipliers = {
    normal: { multiplier: 1, speed: '24-48 hours', quality: 'Standard' },
    fast: { multiplier: 1.5, speed: '6-12 hours', quality: 'High' },
    premium: { multiplier: 2, speed: '1-3 hours', quality: 'Premium' }
  };

  const handleInputChange = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    // Calculate price estimate when relevant fields change
    if (field === 'service' || field === 'quantity' || field === 'packageType') {
      calculatePrice(newFormData);
    }
  };

  const calculatePrice = (data: typeof formData) => {
    if (data.platform && data.service && data.quantity) {
      const services = servicesByPlatform[data.platform as keyof typeof servicesByPlatform];
      const selectedService = services?.find(s => s.id === data.service);
      
      if (selectedService) {
        const basePrice = selectedService.basePrice * parseInt(data.quantity);
        const packageInfo = packageMultipliers[data.packageType as keyof typeof packageMultipliers];
        const totalPrice = basePrice * packageInfo.multiplier;
        
        setPriceEstimate(totalPrice);
        setDeliveryEstimate(packageInfo.speed);
      }
    } else {
      setPriceEstimate(0);
      setDeliveryEstimate('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    // Implement order submission logic here
    alert('Order placed successfully! You can track it in the My Orders section.');
  };

  const availableServices = formData.platform ? servicesByPlatform[formData.platform as keyof typeof servicesByPlatform] : [];

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            New <span className="text-primary">Order</span>
          </h1>
          <p className="text-muted-foreground">Place a new order for social media engagement services.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Platform Selection */}
          <div className="space-y-3">
            <Label className="text-foreground font-medium">Platform</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => handleInputChange('platform', platform.id)}
                  className={`flex items-center gap-3 p-4 border transition-colors ${
                    formData.platform === platform.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:bg-primary/5 text-foreground'
                  }`}
                >
                  {platform.icon}
                  <span className="font-medium">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Service Selection */}
          {formData.platform && (
            <div className="space-y-3">
              <Label className="text-foreground font-medium">Service Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availableServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleInputChange('service', service.id)}
                    className={`flex items-center justify-between p-4 border transition-colors ${
                      formData.service === service.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:bg-primary/5 text-foreground'
                    }`}
                  >
                    <span className="font-medium">{service.name}</span>
                    <span className="text-sm text-muted-foreground">₦{service.basePrice}/unit</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Package Type */}
          {formData.service && (
            <div className="space-y-3">
              <Label className="text-foreground font-medium">Package Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.entries(packageMultipliers).map(([key, info]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleInputChange('packageType', key)}
                    className={`p-4 border transition-colors ${
                      formData.packageType === key
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:bg-primary/5 text-foreground'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-medium capitalize mb-1">{key}</div>
                      <div className="text-sm text-muted-foreground mb-1">{info.quality} Quality</div>
                      <div className="text-xs text-muted-foreground">{info.speed}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Link/Username */}
          <div className="space-y-2">
            <Label htmlFor="link" className="text-foreground font-medium">Link/Username</Label>
            <Input
              id="link"
              type="text"
              placeholder="Enter profile URL or username"
              value={formData.link}
              onChange={(e) => handleInputChange('link', e.target.value)}
              required
              className="bg-input border-border text-foreground"
            />
            <p className="text-sm text-muted-foreground">
              Enter the full URL or username for the content you want to boost
            </p>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-foreground font-medium">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              min="1"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', e.target.value)}
              required
              className="bg-input border-border text-foreground"
            />
            <p className="text-sm text-muted-foreground">
              Enter the number of {formData.service || 'items'} you want to order
            </p>
          </div>

          {/* Price Estimate */}
          {priceEstimate > 0 && (
            <div className="bg-primary/10 border border-primary/20 p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="text-foreground font-medium">
                    {platforms.find(p => p.id === formData.platform)?.name} {availableServices.find(s => s.id === formData.service)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Package:</span>
                  <span className="text-foreground font-medium capitalize">{formData.packageType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="text-foreground font-medium">{formData.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Time:</span>
                  <span className="text-foreground font-medium">{deliveryEstimate}</span>
                </div>
                <div className="border-t border-primary/20 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">Total Price:</span>
                    <span className="text-primary font-bold text-lg">₦{priceEstimate.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
            disabled={!formData.platform || !formData.service || !formData.link || !formData.quantity}
          >
            Place Order ₦{priceEstimate > 0 ? priceEstimate.toFixed(2) : '0.00'}
          </Button>
        </form>
      </div>
    </DashboardLayout>
  );
}