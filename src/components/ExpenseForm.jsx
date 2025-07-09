import { useState } from 'react';

const ExpenseForm = ({expenses, setExpenses}) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();

        const numericValue = parseFloat(amount);
        if(!isNaN(numericValue) && numericValue >= 0 && name.trim() !== ''){
            const newExpense = {
                id : Date.now(),
                name,
                amount : numericValue,
                category
            };
            setExpenses([...expenses, newExpense]);
            setName('');
            setAmount('');
            setCategory('General');
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom : '20px'}}>
            <h3>Add an Expense</h3>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Expense Name"
            required
            />
            <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
            />
            <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            >
                <option value="General">General</option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            <button type="Submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
