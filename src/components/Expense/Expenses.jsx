import './Expenses.css';
import './ExpenseItem.css';
import Card from '../Common/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const handleFilterYearChanged = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterYearChanged={handleFilterYearChanged}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
