import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

interface BalanceCardProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}

export function BalanceCard({ totalIncome, totalExpenses, balance }: BalanceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-green-100 p-6 rounded-lg shadow">
        <div className="flex items-center">
          <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-green-600">Total Income</p>
            <p className="text-2xl font-bold text-green-900">
              ${totalIncome.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-100 p-6 rounded-lg shadow">
        <div className="flex items-center">
          <TrendingDown className="w-8 h-8 text-red-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-red-600">Total Expenses</p>
            <p className="text-2xl font-bold text-red-900">
              ${totalExpenses.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 p-6 rounded-lg shadow">
        <div className="flex items-center">
          <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
          <div>
            <p className="text-sm font-medium text-blue-600">Current Balance</p>
            <p className="text-2xl font-bold text-blue-900">
              ${balance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}