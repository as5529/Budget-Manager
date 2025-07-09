import React, { useState } from 'react';

const IncomeForm = ({setIncome}) => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const numericValue = parseFloat(amount);
        if(!isNaN(numericValue) && numericValue >=0){
            setIncome(numericValue);
            setAmount('');
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom : '20px'}}>
            <h3>Add Your Monthly Income</h3>
            <input>
            type="number"
            value={amount}
            onchange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 10000"
            required
            </input>
        </form>
    );
};
export default IncomeForm;