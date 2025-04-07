import React, { useState } from 'react';
import { TransactionForm } from './components/TransactionForm';
import { BalanceCard } from './components/BalanceCard';
import { MonthlyReport } from './components/MonthlyReport';
import { Transaction } from './types';
import { Wallet } from 'lucide-react';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (data: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const categoryBreakdown = transactions.reduce((acc, transaction) => {
    const { category, amount, type } = transaction;
    const value = type === 'expense' ? -amount : amount;
    acc[category] = (acc[category] || 0) + value;
    return acc;
  }, {} as Record<string, number>);

  const monthlyReport = {
    totalIncome,
    totalExpenses,
    balance,
    categoryBreakdown,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Expense Tracker</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <BalanceCard
                    totalIncome={totalIncome}
                    totalExpenses={totalExpenses}
                    balance={balance}
                  />
                </div>
              </div>

              <div className="mt-6 bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <MonthlyReport data={monthlyReport} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Add Transaction
                  </h2>
                  <TransactionForm onSubmit={handleAddTransaction} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;