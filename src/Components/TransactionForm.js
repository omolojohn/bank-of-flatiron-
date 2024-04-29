import {useState} from  'react';

// Define the TransactionForm component
const TransactionForm = ({onSubmitForm})  => {

   // Define state variables using useState hook
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

     // Handle form submission
    const  handleSubmit = (event) =>{
      event.preventDefault();

      // Create a new transaction object
      const newTransaction ={
        id: Date.now(),
        date,
        amount : parseFloat(amount) || 0,
        description,
        category,
      };
      // Call onSubmitForm function passed as prop and pass the new transaction object
       onSubmitForm(newTransaction);

       // Clear input fields by resetting state variables to empty strings
       setDate('');
       setAmount('');
       setDescription('');
       setCategory('')

      }

      // Render the form
    return(
     <div className="form-container">
      <td>
        <form onSubmit={handleSubmit}>
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>

            <label>Description</label>
            <input type="text" placeholder="Description" value={description} onChange={(event) =>  setDescription(event.target.value)} />
            <label>Category</label>
            <input type="text" placeholder="Category" value={category} onChange={(event) =>  setCategory(event.target.value)}/>
            <label>Amount</label>
            <input type="number" placeholder="Amount" value={amount} onChange={(event) =>  setAmount(event.target.value)}/>
            <div>
             <button type="submit">Add Transaction</button>
            </div>
        </form>
        </td>
     </div>
    )
}
export default TransactionForm;