import { useState } from 'react'
import './App.css'
import BudgetOverview from './components/BudgetOverview';
import IncomeForm from './components/IncomeForm';
import ExpenseChart from './components/ExpenseChart';
import ExpenseForm from './components/ExpenseForm';
import ProgressBar from './components/ProgressBar';
import SubscriptionList from './components/SubscriptionList';


function App() {
  const [income, setIncome] = useState(0)
  const [expenses,setExpenses] = useState([]);

  return (

      <div className="App">
        <h1>Budget & Subscription Manager</h1>
        <BudgetOverview income={income}/>
        <IncomeForm setIncome={setIncome}/>
        <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
        <SubscriptionList />
        <ExpenseChart />
        <ProgressBar />
      </div>
      
  );
}

export default App
