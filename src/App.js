import './App.css';
import { useEffect, useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { apiUrl } from './AppSettings';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(apiUrl + '/expenses')
      .then((res) => res.json())
      .then(
        (results) => {
          setIsLoaded(true);
          const formattedResults = results.map((result) => ({
            id: result.id,
            title: result.title,
            amount: result.amount,
            date: new Date(result.date),
          }));
          setExpenses(formattedResults);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="loading">
        <div className="lds-dual-ring"></div>
      </div>
    );
  } else {
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </div>
    );
  }
};

export default App;
