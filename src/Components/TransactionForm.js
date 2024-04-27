import React from  'react';

const TransactionForm = ()  => {
    return(
     <div>
        <form>
            <label>Date</label>
            <input type="date"/>

            <label>Description</label>
            <input type="text" placeholder="Description"/>
            <label>Category</label>
            <input type="text" placeholder="Category"/>
            <label>Amount</label>
            <input type="number" placeholder="Amount"/>

            <button type="submit">Add Transaction</button>
        </form>
     </div>
    )
}
export default TransactionForm;