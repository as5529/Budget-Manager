
const BudgetOverview = ({income}) => {
    return (
        <div style={{marginBottom : '20px'}}>
            <h2>Budget Overview</h2>
            <p><strong>Total Income:</strong>₹{income}</p>
        </div>
    );
};
export default BudgetOverview;
