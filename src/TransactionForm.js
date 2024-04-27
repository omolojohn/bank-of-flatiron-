import React from  'react';

const TransactionForm = ()  => {
    return(
     <div>
        <form>
            <label>Date</label>
            <input type="date"/>

            <label>Description</label>
            <input type="text"/>
            <label>Category</label>
            <input type="text"/>
            <label>Amount</label>
            <input type="number"/>

            <button type="submit">Add Transaction</button>
        </form>
     </div>
    )
}
export default TransactionForm;