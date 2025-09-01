'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  const orders = [
    {
      id: '#12847',
      service: 'Instagram Followers',
      platform: 'instagram',
      quantity: 1000,
      link: '@johndoe',
      status: 'completed',
      dateOrdered: '2024-01-15 14:30',
      provider: 'Provider A',
      progress: 100,
      price: 1000
    },
    {
      id: '#12846',
      service: 'YouTube Views',
      platform: 'youtube',
      quantity: 5000,
      link: 'youtu.be/abc123',
      status: 'in-progress',
      dateOrdered: '2024-01-15 10:15',
      provider: 'Provider B',
      progress: 65,
      price: 2500
    },
    {
      id: '#12845',
      service: 'TikTok Likes',
      platform: 'tiktok',
      quantity: 2500,
      link: '@tiktokuser',
      status: 'pending',
      dateOrdered: '2024-01-15 08:45',
      provider: 'Provider C',
      progress: 0,
      price: 2000
    },
    {
      id: '#12844',
      service: 'Twitter Followers',
      platform: 'twitter',
      quantity: 500,
      link: '@twitterhandle',
      status: 'completed',
      dateOrdered: '2024-01-14 16:20',
      provider: 'Provider A',
      progress: 100,
      price: 1000
    },
    {
      id: '#12843',
      service: 'Instagram Likes',
      platform: 'instagram',
      quantity: 1200,
      link: 'instagram.com/p/abc',
      status: 'failed',
      dateOrdered: '2024-01-14 12:10',
      provider: 'Provider D',
      progress: 15,
      price: 600
    },
    {
      id: '#12842',
      service: 'Facebook Page Likes',
      platform: 'facebook',
      quantity: 800,
      link: 'facebook.com/mypage',
      status: 'refilled',
      dateOrdered: '2024-01-13 14:30',
      provider: 'Provider B',
      progress: 100,
      price: 1600
    },
    {
      id: '#12841',
      service: 'YouTube Subscribers',
      platform: 'youtube',
      quantity: 300,
      link: 'youtube.com/@channel',
      status: 'completed',
      dateOrdered: '2024-01-13 09:15',
      provider: 'Provider A',
      progress: 100,
      price: 1500
    },
    {
      id: '#12840',
      service: 'TikTok Views',
      platform: 'tiktok',
      quantity: 10000,
      link: '@tiktokvideo',
      status: 'in-progress',
      dateOrdered: '2024-01-12 18:45',
      provider: 'Provider C',
      progress: 80,
      price: 2000
    }
  ];

  const platforms = [
    { id: 'all', name: 'All Platforms' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'tiktok', name: 'TikTok' },
    { id: 'twitter', name: 'Twitter' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'telegram', name: 'Telegram' }
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'pending', name: 'Pending' },
    { id: 'in-progress', name: 'In Progress' },
    { id: 'completed', name: 'Completed' },
    { id: 'failed', name: 'Failed' },
    { id: 'refilled', name: 'Refilled' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10';
      case 'in-progress':
        return 'text-blue-500 bg-blue-500/10';
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'failed':
        return 'text-red-500 bg-red-500/10';
      case 'refilled':
        return 'text-purple-500 bg-purple-500/10';
      default:
        return 'text-muted-foreground bg-secondary/20';
    }
  };

  const getPlatformIcon = (platform: string) => {
    const icons = {
      instagram: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      youtube: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      tiktok: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      facebook: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      telegram: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    };
    return icons[platform as keyof typeof icons] || null;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.link.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform === 'all' || order.platform === selectedPlatform;
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  const sortedOrders = filteredOrders.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.dateOrdered).getTime() - new Date(a.dateOrdered).getTime();
      case 'oldest':
        return new Date(a.dateOrdered).getTime() - new Date(b.dateOrdered).getTime();
      case 'highest-price':
        return b.price - a.price;
      case 'lowest-price':
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            My <span className="text-primary">Orders</span>
          </h1>
          <p className="text-muted-foreground">Track and manage all your social media engagement orders.</p>
        </div>

        {/* Filters */}
        <div className="bg-secondary/10 border border-border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <Input
                type="text"
                placeholder="Search orders..."
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

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {statuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highest-price">Highest Price</option>
                <option value="lowest-price">Lowest Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table - Desktop */}
        <div className="hidden lg:block bg-secondary/10 border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/20 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-medium text-foreground">Order ID</th>
                  <th className="text-left p-4 font-medium text-foreground">Service</th>
                  <th className="text-left p-4 font-medium text-foreground">Quantity</th>
                  <th className="text-left p-4 font-medium text-foreground">Link</th>
                  <th className="text-left p-4 font-medium text-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-foreground">Progress</th>
                  <th className="text-left p-4 font-medium text-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-foreground">Price</th>
                  <th className="text-left p-4 font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sortedOrders.map((order) => (
                  <tr 
                    key={order.id} 
                    className="hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedOrder(order);
                      setOrderModalOpen(true);
                    }}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground">
                          {getPlatformIcon(order.platform)}
                        </div>
                        <span className="font-medium text-foreground">{order.id}</span>
                      </div>
                    </td>
                    <td className="p-4 text-foreground">{order.service}</td>
                    <td className="p-4 text-foreground">{order.quantity.toLocaleString()}</td>
                    <td className="p-4 text-muted-foreground max-w-32 truncate">{order.link}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                        {order.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="p-4">
                      {order.status === 'in-progress' ? (
                        <div className="w-full bg-secondary/40 h-2">
                          <div 
                            className="bg-primary h-2 transition-all"
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">{order.progress}%</span>
                      )}
                    </td>
                    <td className="p-4 text-muted-foreground text-sm">{formatDate(order.dateOrdered)}</td>
                    <td className="p-4 text-foreground font-medium">₦{order.price.toFixed(2)}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="border-border text-foreground hover:bg-primary/10 px-3 py-1 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOrder(order);
                            setOrderModalOpen(true);
                          }}
                        >
                          View
                        </Button>
                        {order.status === 'failed' && (
                          <Button 
                            variant="outline" 
                            className="border-border text-foreground hover:bg-primary/10 px-3 py-1 text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              alert('Refund request submitted');
                            }}
                          >
                            Refund
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {sortedOrders.map((order) => (
            <div key={order.id} className="bg-secondary/10 border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="text-muted-foreground">
                    {getPlatformIcon(order.platform)}
                  </div>
                  <span className="font-medium text-foreground">{order.id}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                  {order.status.replace('-', ' ')}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="text-foreground font-medium">{order.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="text-foreground">{order.quantity.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Link:</span>
                  <span className="text-foreground truncate max-w-32">{order.link}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="text-foreground font-medium">₦{order.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="text-foreground">{formatDate(order.dateOrdered)}</span>
                </div>
                
                {order.status === 'in-progress' && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progress:</span>
                      <span className="text-foreground">{order.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary/40 h-2">
                      <div 
                        className="bg-primary h-2 transition-all"
                        style={{ width: `${order.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 px-4 py-1 text-sm flex-1">
                  View Details
                </Button>
                {order.status === 'failed' && (
                  <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 px-4 py-1 text-sm">
                    Refund
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedOrders.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-2">No orders found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || selectedPlatform !== 'all' || selectedStatus !== 'all' 
                ? 'Try adjusting your filters to see more results.'
                : 'You haven\'t placed any orders yet. Start by creating your first order!'}
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Place New Order
            </Button>
          </div>
        )}

        {/* Pagination could go here if needed */}
        {sortedOrders.length > 0 && (
          <div className="text-center text-muted-foreground text-sm">
            Showing {sortedOrders.length} of {orders.length} orders
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {orderModalOpen && selectedOrder && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm z-50 flex md:items-center md:justify-center items-end justify-center p-0 md:p-4">
          <div className="bg-background border-t md:border border-border md:max-w-2xl w-full md:max-h-[90vh] h-[55vh] overflow-y-auto md:rounded-lg rounded-t-3xl md:rounded-t-lg">
            {/* Mobile Handle */}
            <div className="md:hidden flex justify-center py-3">
              <div className="w-10 h-1 bg-muted-foreground/30 rounded-full"></div>
            </div>
            
            {/* Modal Header */}
            <div className="border-b border-border p-6 md:pt-6 pt-3">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">
                  Order <span className="text-primary">Details</span>
                </h2>
                <button
                  onClick={() => {
                    setOrderModalOpen(false);
                    setSelectedOrder(null);
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-secondary/20 border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-foreground">Order Summary</h3>
                    <div className={`px-3 py-1 text-sm font-medium capitalize ${getStatusColor(selectedOrder.status)}`}>
                      {selectedOrder.status.replace('-', ' ')}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Order ID</div>
                      <div className="text-foreground font-medium">{selectedOrder.id}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Service</div>
                      <div className="text-foreground font-medium">{selectedOrder.service}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Platform</div>
                      <div className="flex items-center gap-2">
                        <div className="text-muted-foreground">
                          {getPlatformIcon(selectedOrder.platform)}
                        </div>
                        <span className="text-foreground font-medium capitalize">{selectedOrder.platform}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Quantity</div>
                      <div className="text-foreground font-medium">{selectedOrder.quantity.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Target Link</div>
                      <div className="text-foreground font-medium break-all">{selectedOrder.link}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Provider</div>
                      <div className="text-foreground font-medium">{selectedOrder.provider}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Order Date</div>
                      <div className="text-foreground font-medium">{formatDate(selectedOrder.dateOrdered)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Amount Paid</div>
                      <div className="text-foreground font-medium">₦{selectedOrder.price.toFixed(2)}</div>
                    </div>
                  </div>
                </div>

                {/* Order Progress */}
                <div className="bg-secondary/20 border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-4">Order Progress</h3>
                  
                  <div className="space-y-3">
                    <div className={`flex items-center gap-3 ${selectedOrder.status !== 'failed' ? 'text-green-500' : 'text-muted-foreground'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedOrder.status !== 'failed' ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                        ✓
                      </div>
                      <span className="text-sm">Order Placed & Payment Confirmed</span>
                    </div>
                    
                    <div className={`flex items-center gap-3 ${selectedOrder.status === 'completed' || selectedOrder.status === 'in-progress' || selectedOrder.status === 'refilled' ? 'text-green-500' : 'text-muted-foreground'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedOrder.status === 'completed' || selectedOrder.status === 'in-progress' || selectedOrder.status === 'refilled' ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                        {selectedOrder.status === 'in-progress' ? '⏳' : '✓'}
                      </div>
                      <span className="text-sm">Order Processing Started</span>
                    </div>
                    
                    <div className={`flex items-center gap-3 ${selectedOrder.status === 'completed' || selectedOrder.status === 'refilled' ? 'text-green-500' : 'text-muted-foreground'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedOrder.status === 'completed' || selectedOrder.status === 'refilled' ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                        {selectedOrder.status === 'completed' || selectedOrder.status === 'refilled' ? '✓' : '○'}
                      </div>
                      <span className="text-sm">Order Completed</span>
                    </div>
                  </div>

                  {/* Progress Bar for In-Progress Orders */}
                  {selectedOrder.status === 'in-progress' && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{selectedOrder.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary/40 h-2">
                        <div 
                          className="bg-primary h-2 transition-all"
                          style={{ width: `${selectedOrder.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {selectedOrder.status === 'failed' && (
                    <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20">
                      <div className="text-red-500 text-sm font-medium mb-1">Order Failed</div>
                      <div className="text-red-400 text-sm">
                        This order could not be completed. Please contact support for assistance or request a refund.
                      </div>
                    </div>
                  )}

                  {selectedOrder.status === 'pending' && (
                    <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20">
                      <div className="text-yellow-600 text-sm font-medium mb-1">Order Pending</div>
                      <div className="text-yellow-500 text-sm">
                        Your order is in queue and will begin processing shortly.
                      </div>
                    </div>
                  )}

                  {selectedOrder.status === 'refilled' && (
                    <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20">
                      <div className="text-purple-500 text-sm font-medium mb-1">Order Refilled</div>
                      <div className="text-purple-400 text-sm">
                        This order has been automatically refilled to maintain the delivered quantity.
                      </div>
                    </div>
                  )}
                </div>

                {/* Order Notes */}
                <div className="bg-secondary/20 border border-border p-4">
                  <h3 className="text-lg font-medium text-foreground mb-3">Order Notes</h3>
                  <div className="text-sm text-muted-foreground">
                    {selectedOrder.service.includes('Followers') && 'High-quality followers with profile pictures. Delivery typically completes within 24-48 hours.'}
                    {selectedOrder.service.includes('Views') && 'Real views from active users. Views will be delivered gradually over 1-3 days for natural growth.'}
                    {selectedOrder.service.includes('Likes') && 'Organic likes from real users. Delivery starts within 1 hour of order confirmation.'}
                    {selectedOrder.service.includes('Subscribers') && 'Active subscribers with complete profiles. Gradual delivery over 12-24 hours.'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-end">
                  {selectedOrder.status === 'failed' && (
                    <>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Reorder
                      </Button>
                      <Button variant="outline" className="border-border text-foreground hover:bg-primary/10">
                        Request Refund
                      </Button>
                    </>
                  )}
                  <Button variant="outline" className="border-border text-foreground hover:bg-primary/10">
                    Contact Support
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setOrderModalOpen(false);
                      setSelectedOrder(null);
                    }}
                    className="border-border text-foreground hover:bg-primary/10"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}