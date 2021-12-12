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
    filterExpenses(newFilterYear);
  };

  const filterExpenses = (year) => {
    console.log(
      props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      )
    );
  };

  return (
    <Card className="expense-list">
      <ExpenseFilter
        selectedYear={filterYear}
        onFilterYearChanged={handleFilterYearChanged}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
