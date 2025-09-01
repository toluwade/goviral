'use client';

import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const transactions = [
    {
      id: 'TXN-2024-001547',
      type: 'deposit',
      method: 'Credit Card',
      amount: 10000,
      fee: 350,
      netAmount: 9650,
      status: 'completed',
      date: '2024-01-15 14:30:22',
      description: 'Stripe payment deposit',
      reference: 'pi_3O4KqJ2eZvKYlo2C0123456789'
    },
    {
      id: 'TXN-2024-001546',
      type: 'order',
      method: 'Wallet Balance',
      amount: -2500,
      fee: 0,
      netAmount: -2500,
      status: 'completed',
      date: '2024-01-15 10:15:18',
      description: 'Order #12846 - YouTube Views',
      reference: 'ORD-12846'
    },
    {
      id: 'TXN-2024-001545',
      type: 'deposit',
      method: 'Bitcoin',
      amount: 5000,
      fee: 50,
      netAmount: 4950,
      status: 'pending',
      date: '2024-01-15 08:45:12',
      description: 'Bitcoin deposit - awaiting confirmations',
      reference: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
    },
    {
      id: 'TXN-2024-001544',
      type: 'order',
      method: 'Wallet Balance',
      amount: -1000,
      fee: 0,
      netAmount: -1000,
      status: 'completed',
      date: '2024-01-14 16:20:45',
      description: 'Order #12844 - Twitter Followers',
      reference: 'ORD-12844'
    },
    {
      id: 'TXN-2024-001543',
      type: 'refund',
      method: 'Wallet Balance',
      amount: 600,
      fee: 0,
      netAmount: 600,
      status: 'completed',
      date: '2024-01-14 14:15:33',
      description: 'Refund for failed order #12843',
      reference: 'REF-12843'
    },
    {
      id: 'TXN-2024-001542',
      type: 'deposit',
      method: 'PayPal',
      amount: 7500,
      fee: 293,
      netAmount: 7207,
      status: 'completed',
      date: '2024-01-13 12:30:15',
      description: 'PayPal deposit',
      reference: 'PAYID-MW2RXOA05D123456789'
    },
    {
      id: 'TXN-2024-001541',
      type: 'order',
      method: 'Wallet Balance',
      amount: -1500,
      fee: 0,
      netAmount: -1500,
      status: 'completed',
      date: '2024-01-13 09:15:22',
      description: 'Order #12841 - YouTube Subscribers',
      reference: 'ORD-12841'
    },
    {
      id: 'TXN-2024-001540',
      type: 'deposit',
      method: 'USDT',
      amount: 20000,
      fee: 200,
      netAmount: 19800,
      status: 'completed',
      date: '2024-01-12 18:45:18',
      description: 'USDT deposit',
      reference: '0xa1b2c3d4e5f6789012345678901234567890abcd'
    },
    {
      id: 'TXN-2024-001539',
      type: 'deposit',
      method: 'Bank Transfer',
      amount: 50000,
      fee: 0,
      netAmount: 50000,
      status: 'failed',
      date: '2024-01-11 14:20:30',
      description: 'Bank transfer - insufficient funds',
      reference: 'ACH-20240111-001'
    },
    {
      id: 'TXN-2024-001538',
      type: 'order',
      method: 'Wallet Balance',
      amount: -2000,
      fee: 0,
      netAmount: -2000,
      status: 'completed',
      date: '2024-01-10 16:30:45',
      description: 'Order #12840 - TikTok Views',
      reference: 'ORD-12840'
    }
  ];

  const transactionTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'deposit', name: 'Deposits' },
    { id: 'order', name: 'Orders' },
    { id: 'refund', name: 'Refunds' }
  ];

  const transactionStatuses = [
    { id: 'all', name: 'All Status' },
    { id: 'completed', name: 'Completed' },
    { id: 'pending', name: 'Pending' },
    { id: 'failed', name: 'Failed' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/10';
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'failed':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-muted-foreground bg-secondary/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'deposit':
        return 'text-green-500 bg-green-500/10';
      case 'order':
        return 'text-blue-500 bg-blue-500/10';
      case 'refund':
        return 'text-purple-500 bg-purple-500/10';
      default:
        return 'text-muted-foreground bg-secondary/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
      case 'order':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'refund':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || transaction.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || transaction.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest-amount':
        return Math.abs(b.amount) - Math.abs(a.amount);
      case 'lowest-amount':
        return Math.abs(a.amount) - Math.abs(b.amount);
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const calculateTotalBalance = () => {
    return transactions
      .filter(t => t.status === 'completed')
      .reduce((sum, t) => sum + t.netAmount, 0);
  };

  const getMonthlyStats = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const monthlyTransactions = transactions.filter(t => {
      const tDate = new Date(t.date);
      return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear && t.status === 'completed';
    });

    const totalDeposits = monthlyTransactions
      .filter(t => t.type === 'deposit')
      .reduce((sum, t) => sum + t.netAmount, 0);

    const totalSpent = Math.abs(monthlyTransactions
      .filter(t => t.type === 'order')
      .reduce((sum, t) => sum + t.netAmount, 0));

    return { totalDeposits, totalSpent };
  };

  const monthlyStats = getMonthlyStats();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-oswald text-foreground mb-2">
            Transaction <span className="text-primary">History</span>
          </h1>
          <p className="text-muted-foreground">View all your wallet transactions and payment history.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 border border-primary/20 p-6">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-sm text-muted-foreground">Current Balance</div>
                <div className="text-2xl font-bold text-primary">₦{calculateTotalBalance().toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border border-border p-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <div>
                <div className="text-sm text-muted-foreground">This Month Deposits</div>
                <div className="text-2xl font-bold text-foreground">₦{monthlyStats.totalDeposits.toFixed(2)}</div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border border-border p-6">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div>
                <div className="text-sm text-muted-foreground">This Month Spent</div>
                <div className="text-2xl font-bold text-foreground">₦{monthlyStats.totalSpent.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-secondary/10 border border-border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <Input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-input border-border text-foreground"
              />
            </div>

            {/* Type Filter */}
            <div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-input border border-border text-foreground px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {transactionTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
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
                {transactionStatuses.map((status) => (
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
                <option value="highest-amount">Highest Amount</option>
                <option value="lowest-amount">Lowest Amount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Transactions Table - Desktop */}
        <div className="hidden lg:block bg-secondary/10 border border-border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/20 border-b border-border">
                <tr>
                  <th className="text-left p-4 font-medium text-foreground">Transaction ID</th>
                  <th className="text-left p-4 font-medium text-foreground">Type</th>
                  <th className="text-left p-4 font-medium text-foreground">Method</th>
                  <th className="text-left p-4 font-medium text-foreground">Amount</th>
                  <th className="text-left p-4 font-medium text-foreground">Fee</th>
                  <th className="text-left p-4 font-medium text-foreground">Net Amount</th>
                  <th className="text-left p-4 font-medium text-foreground">Status</th>
                  <th className="text-left p-4 font-medium text-foreground">Date</th>
                  <th className="text-left p-4 font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sortedTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className={`${getTypeColor(transaction.type)} p-1 rounded`}>
                          {getTypeIcon(transaction.type)}
                        </div>
                        <span className="font-medium text-foreground text-sm">{transaction.id}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium capitalize ${getTypeColor(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="p-4 text-foreground">{transaction.method}</td>
                    <td className="p-4">
                      <span className={`font-medium ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.amount >= 0 ? '+' : ''}₦{transaction.amount.toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {transaction.fee > 0 ? `₦${transaction.fee.toFixed(2)}` : '-'}
                    </td>
                    <td className="p-4">
                      <span className={`font-medium ${transaction.netAmount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.netAmount >= 0 ? '+' : ''}₦{transaction.netAmount.toFixed(2)}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs font-medium capitalize ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground text-sm">{formatDate(transaction.date)}</td>
                    <td className="p-4">
                      <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 px-3 py-1 text-xs">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transactions Cards - Mobile */}
        <div className="lg:hidden space-y-4">
          {sortedTransactions.map((transaction) => (
            <div key={transaction.id} className="bg-secondary/10 border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`${getTypeColor(transaction.type)} p-1 rounded`}>
                    {getTypeIcon(transaction.type)}
                  </div>
                  <span className="font-medium text-foreground text-sm">{transaction.id}</span>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 text-xs font-medium capitalize ${getTypeColor(transaction.type)}`}>
                    {transaction.type}
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium capitalize ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm mb-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Method:</span>
                  <span className="text-foreground font-medium">{transaction.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className={`font-medium ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.amount >= 0 ? '+' : ''}₦{transaction.amount.toFixed(2)}
                  </span>
                </div>
                {transaction.fee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee:</span>
                    <span className="text-foreground">₦{transaction.fee.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net Amount:</span>
                  <span className={`font-medium ${transaction.netAmount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.netAmount >= 0 ? '+' : ''}₦{transaction.netAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="text-foreground">{formatDate(transaction.date)}</span>
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-3">
                {transaction.description}
              </div>

              <Button variant="outline" className="border-border text-foreground hover:bg-primary/10 px-4 py-1 text-sm w-full">
                View Details
              </Button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedTransactions.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <h3 className="text-lg font-medium text-foreground mb-2">No transactions found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || selectedType !== 'all' || selectedStatus !== 'all' 
                ? 'Try adjusting your filters to see more results.'
                : 'You haven\'t made any transactions yet.'}
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Make Your First Deposit
            </Button>
          </div>
        )}

        {/* Results Count */}
        {sortedTransactions.length > 0 && (
          <div className="text-center text-muted-foreground text-sm">
            Showing {sortedTransactions.length} of {transactions.length} transactions
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}