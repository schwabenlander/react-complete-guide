import './ExpenseList.css';
import './ExpenseItem';
import ExpenseItem from './ExpenseItem';
import Card from '../Common/Card';

const ExpenseList = (props) => {
  return (
    <Card className="expense-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
