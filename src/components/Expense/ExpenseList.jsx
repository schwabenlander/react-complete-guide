import './ExpenseList.css';
import './ExpenseItem.css';
import ExpenseItem from './ExpenseItem';
import Card from '../Common/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const ExpenseList = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const handleFilterYearChanged = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expense-list">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterYearChanged={handleFilterYearChanged}
      />
      {filteredExpenses.length === 0 ? (
        <p>No expenses were found for {filterYear}.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      )}
    </Card>
  );
};

export default ExpenseList;
