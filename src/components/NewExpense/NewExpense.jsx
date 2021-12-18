import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import { apiUrl } from '../../AppSettings';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!showForm);

  const handleOnSave = async (enteredExpenseData) => {
    await fetch(apiUrl + '/expenses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...enteredExpenseData,
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        props.onAddExpense({ ...enteredExpenseData, id: data.id })
      );

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
