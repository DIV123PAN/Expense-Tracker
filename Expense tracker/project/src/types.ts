export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: TransactionType;
}

export interface MonthlyReport {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
  categoryBreakdown: {
    [key: string]: number;
  };
}