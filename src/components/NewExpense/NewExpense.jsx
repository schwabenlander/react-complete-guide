import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const handleOnSave = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 1000).toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={handleOnSave} />
    </div>
  );
};

export default NewExpense;
