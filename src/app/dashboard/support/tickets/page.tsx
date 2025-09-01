'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SupportTicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);
  const [newTicket, setNewTicket] = useState({
    subject: '',
    category: '',
    priority: 'medium',
    message: ''
  });

  const tickets = [
    {
      id: 'TICKET-2024-001',
      subject: 'Payment not reflecting in wallet',
      category: 'Deposit Issue',
      priority: 'high',
      status: 'open',
      lastUpdate: '2024-01-15 14:30:00',
      created: '2024-01-15 10:15:00',
      messages: [
        {
          id: 1,
          sender: 'user',
          senderName: 'John Doe',
          message: 'I made a payment of $100 via Credit Card 3 hours ago but it\'s not showing in my wallet. Transaction ID: pi_3O4KqJ2eZvKYlo2C0123456789',
          timestamp: '2024-01-15 10:15:00',
          attachments: []
        },
        {
          id: 2,
          sender: 'support',
          senderName: 'Support Team',
          message: 'Hi John, thank you for contacting us. I can see your payment and it\'s currently being processed by our payment provider. This usually takes 5-10 minutes to reflect in your wallet. I\'ll keep monitoring this for you.',
          timestamp: '2024-01-15 10:45:00',
          attachments: []
        },
        {
          id: 3,
          sender: 'user',
          senderName: 'John Doe',
          message: 'It\'s been 4 hours now and still nothing. Can you please escalate this?',
          timestamp: '2024-01-15 14:30:00',
          attachments: []
        }
      ]
    },
    {
      id: 'TICKET-2024-002',
      subject: 'Order not delivering as expected',
      category: 'Order Issue',
      priority: 'medium',
      status: 'in-progress',
      lastUpdate: '2024-01-14 16:20:00',
      created: '2024-01-14 12:10:00',
      messages: [
        {
          id: 1,
          sender: 'user',
          senderName: 'John Doe',
          message: 'My Instagram followers order #12845 is stuck at 15% for the past 2 days. Expected delivery was 24-48 hours.',
          timestamp: '2024-01-14 12:10:00',
          attachments: []
        },
        {
          id: 2,
          sender: 'support',
          senderName: 'Support Team',
          message: 'I understand your concern. Let me check with our provider. This order will be completed within the next 24 hours or we\'ll provide a full refund.',
          timestamp: '2024-01-14 16:20:00',
          attachments: []
        }
      ]
    },
    {
      id: 'TICKET-2024-003',
      subject: 'Question about bulk discounts',
      category: 'General',
      priority: 'low',
      status: 'resolved',
      lastUpdate: '2024-01-12 09:30:00',
      created: '2024-01-11 14:15:00',
      messages: [
        {
          id: 1,
          sender: 'user',
          senderName: 'John Doe',
          message: 'Do you offer bulk discounts for large orders? I\'m looking to order 50k+ Instagram followers.',
          timestamp: '2024-01-11 14:15:00',
          attachments: []
        },
        {
          id: 2,
          sender: 'support',
          senderName: 'Support Team',
          message: 'Yes, we do offer bulk discounts for orders over $500. Please contact our business team at business@goviral.com for custom pricing.',
          timestamp: '2024-01-12 09:30:00',
          attachments: []
        }
      ]
    }
  ];

  const categories = [
    { id: 'deposit', name: 'Deposit Issue' },
    { id: 'order', name: 'Order Issue' },
    { id: 'general', name: 'General Question' },
    { id: 'technical', name: 'Technical Issue' },
    { id: 'billing', name: 'Billing Issue' }
  ];

  const priorities = [
    { id: 'low', name: 'Low', color: 'text-green-500 bg-green-500/10' },
    { id: 'medium', name: 'Medium', color: 'text-yellow-500 bg-yellow-500/10' },
    { id: 'high', name: 'High', color: 'text-red-500 bg-red-500/10' }
  ];

  const statuses = [
    { id: 'open', name: 'Open', color: 'text-blue-500 bg-blue-500/10' },
    { id: 'in-progress', name: 'In Progress', color: 'text-yellow-500 bg-yellow-500/10' },
    { id: 'resolved', name: 'Resolved', color: 'text-green-500 bg-green-500/10' },
    { id: 'closed', name: 'Closed', color: 'text-muted-foreground bg-secondary/20' }
  ];

  const getStatusColor = (status: string) => {
    return statuses.find(s => s.id === status)?.color || 'text-muted-foreground bg-secondary/20';
  };

  const getPriorityColor = (priority: string) => {
    return priorities.find(p => p.id === priority)?.color || 'text-muted-foreground bg-secondary/20';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleNewTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New ticket submitted:', newTicket);
    alert('Support ticket created successfully! We\'ll get back to you within 24 hours.');
    setNewTicket({ subject: '', category: '', priority: 'medium', message: '' });
    setShowNewTicketForm(false);
  };

  const selectedTicketData = tickets.find(t => t.id === selectedTicket);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
              Support <span className="text-primary">Tickets</span>
            </h1>
            <p className="text-muted-foreground">Manage your support requests and get help from our team.</p>
          </div>
          <Button 
            onClick={() => setShowNewTicketForm(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Create New Ticket
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-secondary/20 border border-border p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">1</div>
              <div className="text-sm text-muted-foreground">Open</div>
            </div>
          </div>
          <div className="bg-secondary/20 border border-border p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">1</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </div>
          <div className="bg-secondary/20 border border-border p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">1</div>
              <div className="text-sm text-muted-foreground">Resolved</div>
            </div>
          </div>
          <div className="bg-secondary/20 border border-border p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
          </div>
        </div>

        {/* New Ticket Form Modal */}
        {showNewTicketForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Create New Support Ticket</h2>
                <button
                  onClick={() => setShowNewTicketForm(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleNewTicketSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Brief description of your issue"
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-foreground">Category</Label>
                    <select
                      id="category"
                      value={newTicket.category}
                      onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                      required
                      className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="priority" className="text-foreground">Priority</Label>
                    <select
                      id="priority"
                      value={newTicket.priority}
                      onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value })}
                      className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      {priorities.map((priority) => (
                        <option key={priority.id} value={priority.id}>
                          {priority.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Describe your issue in detail..."
                    value={newTicket.message}
                    onChange={(e) => setNewTicket({ ...newTicket, message: e.target.value })}
                    required
                    className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                    Create Ticket
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowNewTicketForm(false)}
                    className="border-border text-foreground hover:bg-primary/10 px-8"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tickets List */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/10 border border-border">
              <div className="p-4 border-b border-border">
                <h3 className="text-lg font-medium text-foreground">Your Tickets</h3>
              </div>
              <div className="divide-y divide-border">
                {tickets.map((ticket) => (
                  <button
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket.id)}
                    className={`w-full p-4 text-left hover:bg-primary/5 transition-colors ${
                      selectedTicket === ticket.id ? 'bg-primary/10 border-r-2 border-r-primary' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{ticket.id}</span>
                      <div className="flex gap-1">
                        <span className={`px-2 py-1 text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {statuses.find(s => s.id === ticket.status)?.name}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-1 line-clamp-2">{ticket.subject}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className={`px-2 py-1 ${getPriorityColor(ticket.priority)}`}>
                        {priorities.find(p => p.id === ticket.priority)?.name}
                      </span>
                      <span>{formatDate(ticket.lastUpdate)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="lg:col-span-2">
            {selectedTicketData ? (
              <div className="bg-secondary/10 border border-border">
                {/* Ticket Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-2">{selectedTicketData.subject}</h2>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>ID: {selectedTicketData.id}</span>
                        <span>Created: {formatDate(selectedTicketData.created)}</span>
                        <span>Category: {selectedTicketData.category}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 text-sm font-medium ${getPriorityColor(selectedTicketData.priority)}`}>
                        {priorities.find(p => p.id === selectedTicketData.priority)?.name} Priority
                      </span>
                      <span className={`px-3 py-1 text-sm font-medium ${getStatusColor(selectedTicketData.status)}`}>
                        {statuses.find(s => s.id === selectedTicketData.status)?.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
                  {selectedTicketData.messages.map((message) => (
                    <div key={message.id} className={`flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        message.sender === 'user' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary/40 text-muted-foreground'
                      }`}>
                        {message.sender === 'user' ? 'U' : 'S'}
                      </div>
                      <div className={`flex-1 max-w-2xl ${message.sender === 'user' ? 'text-right' : ''}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-foreground">{message.senderName}</span>
                          <span className="text-xs text-muted-foreground">{formatDate(message.timestamp)}</span>
                        </div>
                        <div className={`p-3 text-sm text-foreground leading-relaxed ${
                          message.sender === 'user'
                            ? 'bg-primary/10 border border-primary/20'
                            : 'bg-secondary/20 border border-border'
                        }`}>
                          {message.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                {selectedTicketData.status !== 'closed' && selectedTicketData.status !== 'resolved' && (
                  <div className="p-6 border-t border-border">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reply" className="text-foreground">Add Reply</Label>
                        <textarea
                          id="reply"
                          rows={4}
                          placeholder="Type your reply..."
                          className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" className="border-border text-foreground hover:bg-primary/10">
                          Attach File
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Send Reply
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-secondary/10 border border-border p-12 text-center">
                <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-lg font-medium text-foreground mb-2">Select a Ticket</h3>
                <p className="text-muted-foreground">
                  Choose a ticket from the list to view its details and messages.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}