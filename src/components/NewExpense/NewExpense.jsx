import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!showForm);

  const handleOnSave = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.ceil(Math.random() * 1000).toString(),
    };

    props.onAddExpense(expenseData);
    toggleShowForm();
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={toggleShowForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm onSave={handleOnSave} onCancel={toggleShowForm} />
      )}
    </div>
  );
};

export default NewExpense;
