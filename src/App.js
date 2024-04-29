import logo from './logo.svg';
import './App.css';
import  React, { useState } from 'react';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';
import Head from  "./Components/Head";

// Define the main function component
  function App() {

    // Initialize state for transactions using useState hook
  const [transactions, setTransactions] = useState([
    {date: "2019-12-01", description:"Paycheck from Bob's Burgers", category:"Income", amount: 1000 },
    {date: "2019-12-01", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55 },
    {date: "2019-12-02", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55 },
    {date: "2019-12-04", description:"Sunglasses, Urban Outfitters", category:"Fashion", amount: -24.99 },
    {date: "2019-12-06", description:"Venmo, Alice Pays you for Burrito", category:"Food", amount: 8.75},
    {date: "2019-12-06", description:"Chipotle", category:"Food", amount: -17.59},
  ])

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions,  newTransaction]);
  }

   // Function to handle search
  const handleSearch = (searchTerm) => {

    // Filter transactions based on search term
    const searchFilter = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update transactions state with filtered results
    setTransactions(searchFilter);
  };
    
  // Render the components
  return(

  <div  className="App">
    <Head />
    <SearchBar onSearch= {handleSearch}/>
    <TransactionForm onSubmitForm={addTransaction} />
    <TransactionList transactions ={transactions} />
 
   </div>
  )
}

export default App;
