'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DashboardPage() {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<typeof recentOrders[0] | null>(null);
  const quickStats = [
    {
      title: 'Active Orders',
      value: '8',
      change: 'Currently processing',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Completed Orders',
      value: '139',
      change: '94.6% success rate',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Total Spent',
      value: '₦123,456',
      change: '+₦12,500 this month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Total Orders',
      value: '147',
      change: '+24 this month',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 712-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  const recentOrders = [
    {
      id: '#12847',
      service: 'Instagram Followers',
      quantity: '1,000',
      link: '@johndoe',
      status: 'completed',
      date: '2 hours ago'
    },
    {
      id: '#12846',
      service: 'YouTube Views',
      quantity: '5,000',
      link: 'youtu.be/abc123',
      status: 'in-progress',
      date: '4 hours ago'
    },
    {
      id: '#12845',
      service: 'TikTok Likes',
      quantity: '2,500',
      link: '@tiktokuser',
      status: 'pending',
      date: '6 hours ago'
    },
    {
      id: '#12844',
      service: 'Twitter Followers',
      quantity: '500',
      link: '@twitterhandle',
      status: 'completed',
      date: '8 hours ago'
    }
  ];

  const popularServices = [
    {
      platform: 'Instagram',
      service: 'Followers',
      orders: 45,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      platform: 'YouTube',
      service: 'Views',
      orders: 38,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      platform: 'TikTok',
      service: 'Likes',
      orders: 32,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      platform: 'Twitter',
      service: 'Followers',
      orders: 28,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      platform: 'Facebook',
      service: 'Likes',
      orders: 21,
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
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
      default:
        return 'text-muted-foreground bg-secondary/20';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            Dashboard <span className="text-primary">Overview</span>
          </h1>
          <p className="text-muted-foreground">Welcome back! Here&rsquo;s what&rsquo;s happening with your account.</p>
        </div>

        {/* Wallet Card */}
        <div className="bg-primary/10 border border-primary/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-1">Wallet Balance</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-primary">₦50.00</span>
              </div>
              <p className="text-sm text-muted-foreground">Available for orders</p>
            </div>
            <Button 
              onClick={() => setDepositModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Deposit Funds
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-secondary/20 border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-secondary/10 border border-border">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">Recent Orders</h3>
                <Link href="/dashboard/orders">
                  <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary px-4 py-1 text-sm">
                    View All
                  </Button>
                </Link>
              </div>
            </div>
            <div className="divide-y divide-border">
              {recentOrders.map((order, index) => (
                <div 
                  key={index} 
                  className="p-4 hover:bg-primary/5 transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedOrder(order);
                    setOrderModalOpen(true);
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-foreground">{order.id}</div>
                    <div className={`px-2 py-1 text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                      {order.status}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{order.service}</div>
                  <div className="text-xs text-muted-foreground">
                    {order.quantity} • {order.link} • {order.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Services */}
          <div className="bg-secondary/10 border border-border">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">Popular Services This Week</h3>
                <Link href="/dashboard/services">
                  <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary px-4 py-1 text-sm">
                    See All
                  </Button>
                </Link>
              </div>
            </div>
            <div className="divide-y divide-border">
              {popularServices.map((service, index) => (
                <div key={index} className="p-4 hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-muted-foreground">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{service.platform} {service.service}</div>
                        <div className="text-xs text-muted-foreground">{service.orders} orders this week</div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 hover:text-primary px-3 py-1 text-xs">
                      Order Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Deposit Modal */}
        {depositModalOpen && (
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
                    Deposit <span className="text-primary">Funds</span>
                  </h2>
                  <button
                    onClick={() => {
                      setDepositModalOpen(false);
                      setCurrentStep(1);
                      setSelectedMethod('');
                      setAmount('');
                      setCryptoAddress('');
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Step Indicator */}
                <div className="flex items-center gap-4 mt-4">
                  <div className={`flex items-center gap-2 ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      1
                    </div>
                    <span>Payment Method</span>
                  </div>
                  
                  <div className={`w-8 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-border'}`}></div>
                  
                  <div className={`flex items-center gap-2 ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      2
                    </div>
                    <span>Amount</span>
                  </div>
                  
                  <div className={`w-8 h-0.5 ${currentStep >= 3 ? 'bg-primary' : 'bg-border'}`}></div>
                  
                  <div className={`flex items-center gap-2 ${currentStep >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      3
                    </div>
                    <span>Confirm</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Step 1: Payment Method Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-4">Select Payment Method</h3>
                      <div className="md:grid md:grid-cols-2 md:gap-4">
                        <div className="flex md:contents gap-4 overflow-x-auto pb-2 md:pb-0 md:overflow-visible">
                        {[
                          { 
                            id: 'paystack', 
                            name: 'Pay with Paystack', 
                            desc: 'Cards, Bank Transfer, USSD, Opay', 
                            icons: [
                              // Card icon
                              <svg key="card" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>,
                              // Bank icon
                              <svg key="bank" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                              </svg>,
                              // Keypad icon
                              <svg key="keypad" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                              </svg>,
                              // Opay icon (mobile payment)
                              <svg key="opay" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            ]
                          },
                          { 
                            id: 'crypto', 
                            name: 'Pay with Crypto', 
                            desc: 'Bitcoin, USDT, BNB, Litecoin, Ethereum', 
                            icons: [
                              // Bitcoin icon
                              <svg key="btc" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.638 14.904c-1.602 6.43-8.113 10.342-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z"/>
                              </svg>,
                              // USDT icon
                              <svg key="usdt" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.014-17.667v2.256H7.5v1.823h3.486v7.09c0 2.87 1.435 4.5 4.007 4.5.736 0 1.371-.087 1.943-.26v-1.776c-.397.094-.844.142-1.29.142-1.302 0-1.944-.68-1.944-2.037V10.41h3.077V8.586H13.7V6.333h-2.714z"/>
                              </svg>,
                              // BNB icon
                              <svg key="bnb" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L8 6l4 4 4-4-4-4zM6 8l-4 4 4 4 4-4-4-4zm12 0l-4 4 4 4 4-4-4-4zM12 14l-4 4 4 4 4-4-4-4z"/>
                              </svg>,
                              // Litecoin icon
                              <svg key="ltc" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.004-7.5h5.52l-.72-2.4h-2.088L14.796 8.4c.144-.576.144-1.008 0-1.296-.144-.288-.432-.432-.864-.432h-1.728c-.432 0-.72.144-.864.432-.144.288-.144.72 0 1.296l-.864 3.6H8.076l-.72 2.4h2.64z"/>
                              </svg>,
                              // Ethereum icon
                              <svg key="eth" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                              </svg>
                            ]
                          }
                        ].map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-4 border text-left transition-colors w-80 md:w-auto flex-shrink-0 md:flex-shrink ${
                              selectedMethod === method.id
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:bg-primary/5'
                            }`}
                          >
                            <div>
                              <h4 className="font-medium text-foreground mb-1 whitespace-nowrap md:whitespace-normal">{method.name}</h4>
                              <p className="text-sm text-muted-foreground mb-2 whitespace-nowrap md:whitespace-normal">{method.desc}</p>
                              <div className="flex gap-1 text-muted-foreground">
                                {method.icons}
                              </div>
                            </div>
                          </button>
                        ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        onClick={() => setCurrentStep(2)}
                        disabled={!selectedMethod}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Amount Selection */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-4">Select Amount</h3>
                      
                      {/* Quick Amounts */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[1000, 2500, 5000, 10000, 25000, 50000].map((quickAmount) => (
                          <button
                            key={quickAmount}
                            onClick={() => setAmount(quickAmount.toString())}
                            className={`p-3 border transition-colors ${
                              amount === quickAmount.toString()
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border hover:bg-primary/5 text-foreground'
                            }`}
                          >
                            ₦{quickAmount}
                          </button>
                        ))}
                      </div>

                      {/* Custom Amount */}
                      <div>
                        <Label htmlFor="amount" className="text-foreground mb-2 block">Custom Amount (₦)</Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Enter amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="bg-input border-border text-foreground"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="border-border text-foreground"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => setCurrentStep(3)}
                        disabled={!amount}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-4">Confirm Deposit</h3>
                      
                      {/* Summary */}
                      <div className="bg-secondary/20 border border-border p-4 mb-6">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Payment Method:</span>
                            <span className="text-foreground font-medium">
                              {selectedMethod === 'paystack' && 'Pay with Paystack'}
                              {selectedMethod === 'crypto' && 'Pay with Crypto'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Amount:</span>
                            <span className="text-foreground font-medium">₦{parseFloat(amount).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Processing Fee:</span>
                            <span className="text-foreground font-medium">
                              {selectedMethod === 'paystack' && `₦${(parseFloat(amount) * 0.015).toFixed(2)}`}
                              {selectedMethod === 'crypto' && `₦${(parseFloat(amount) * 0.01).toFixed(2)}`}
                            </span>
                          </div>
                          <div className="border-t border-border pt-2">
                            <div className="flex justify-between">
                              <span className="text-foreground font-medium">Total:</span>
                              <span className="text-primary font-bold">
                                ₦{(parseFloat(amount) + (
                                  selectedMethod === 'paystack' ? parseFloat(amount) * 0.015 :
                                  selectedMethod === 'crypto' ? parseFloat(amount) * 0.01 :
                                  0
                                )).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Crypto Address Generation */}
                      {selectedMethod === 'crypto' && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 mb-4">
                          <p className="text-sm text-foreground mb-2">
                            Choose your preferred cryptocurrency and generate a payment address:
                          </p>
                          
                          {/* Crypto Selection */}
                          <div className="grid grid-cols-5 gap-2 mb-4">
                            {[
                              { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
                              { id: 'usdt', name: 'USDT', symbol: 'USDT' },
                              { id: 'bnb', name: 'BNB', symbol: 'BNB' },
                              { id: 'litecoin', name: 'Litecoin', symbol: 'LTC' },
                              { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' }
                            ].map((crypto) => (
                              <button
                                key={crypto.id}
                                onClick={() => {
                                  const addresses = {
                                    bitcoin: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
                                    usdt: '0x742d35Cc6e4C50E3E5b7B7e38C9E4B7F8a6d3bF3',
                                    bnb: 'bnb1xy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
                                    litecoin: 'LQxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
                                    ethereum: '0x742d35Cc6e4C50E3E5b7B7e38C9E4B7F8a6d3bF3'
                                  };
                                  setCryptoAddress(addresses[crypto.id as keyof typeof addresses] || '');
                                }}
                                className="p-2 border border-border hover:bg-primary/10 transition-colors text-sm"
                              >
                                {crypto.symbol}
                              </button>
                            ))}
                          </div>
                          
                          {cryptoAddress && (
                            <div className="mt-3 p-3 bg-secondary/20 border border-border">
                              <div className="flex items-center justify-between gap-2">
                                <code className="text-sm text-foreground font-mono flex-1 truncate">{cryptoAddress}</code>
                                <Button
                                  onClick={() => navigator.clipboard.writeText(cryptoAddress)}
                                  variant="outline"
                                  className="border-border text-foreground hover:bg-primary/10 px-3 py-1 text-xs"
                                >
                                  Copy
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="border-border text-foreground"
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={() => {
                          alert(`Proceeding with ${selectedMethod} payment for ₦${amount}`);
                          setDepositModalOpen(false);
                          setCurrentStep(1);
                          setSelectedMethod('');
                          setAmount('');
                          setCryptoAddress('');
                        }}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {selectedMethod === 'crypto'
                          ? 'Send Payment' 
                          : 'Proceed to Checkout'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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
                        {selectedOrder.status}
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
                        <div className="text-sm text-muted-foreground mb-1">Quantity</div>
                        <div className="text-foreground font-medium">{selectedOrder.quantity}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Target Link</div>
                        <div className="text-foreground font-medium break-all">{selectedOrder.link}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Order Date</div>
                        <div className="text-foreground font-medium">{selectedOrder.date}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Amount Paid</div>
                        <div className="text-foreground font-medium">
                          {selectedOrder.service === 'Instagram Followers' && '₦1,500'}
                          {selectedOrder.service === 'YouTube Views' && '₦2,500'}
                          {selectedOrder.service === 'TikTok Likes' && '₦1,250'}
                          {selectedOrder.service === 'Twitter Followers' && '₦1,000'}
                        </div>
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
                      
                      <div className={`flex items-center gap-3 ${selectedOrder.status === 'completed' || selectedOrder.status === 'in-progress' ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedOrder.status === 'completed' || selectedOrder.status === 'in-progress' ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                          {selectedOrder.status === 'in-progress' ? '⏳' : '✓'}
                        </div>
                        <span className="text-sm">Order Processing Started</span>
                      </div>
                      
                      <div className={`flex items-center gap-3 ${selectedOrder.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedOrder.status === 'completed' ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                          {selectedOrder.status === 'completed' ? '✓' : '○'}
                        </div>
                        <span className="text-sm">Order Completed</span>
                      </div>
                    </div>

                    {selectedOrder.status === 'failed' && (
                      <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20">
                        <div className="text-red-500 text-sm font-medium mb-1">Order Failed</div>
                        <div className="text-red-400 text-sm">
                          This order could not be completed. Please contact support for assistance.
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
                  </div>

                  {/* Order Notes */}
                  <div className="bg-secondary/20 border border-border p-4">
                    <h3 className="text-lg font-medium text-foreground mb-3">Order Notes</h3>
                    <div className="text-sm text-muted-foreground">
                      {selectedOrder.service === 'Instagram Followers' && 'High-quality followers with profile pictures. Delivery typically completes within 24-48 hours.'}
                      {selectedOrder.service === 'YouTube Views' && 'Real views from active users. Views will be delivered gradually over 1-3 days for natural growth.'}
                      {selectedOrder.service === 'TikTok Likes' && 'Organic likes from real TikTok users. Delivery starts within 1 hour of order confirmation.'}
                      {selectedOrder.service === 'Twitter Followers' && 'Active Twitter followers with complete profiles. Gradual delivery over 12-24 hours.'}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 justify-end">
                    {selectedOrder.status === 'failed' && (
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Reorder
                      </Button>
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
      </div>
    </DashboardLayout>
  );
}