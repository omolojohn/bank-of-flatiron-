import logo from './logo.svg';
import './App.css';
import  React, { useState } from 'react';
import TransactionList from './Components/TransactionList';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';
import Head from  "./Components/Head";

  function App() {
  const [transactions, setTransactions] = useState([
    {date: "2019-12-01", description:"Paycheck from Bob's Burgers", category:"Income", amount: 1000 },
    {date: "2019-12-01", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55 },
    {date: "2019-12-02", description:"South by Southwest Quinoa Bowl at Fresh & Co", category:"Food", amount: -10.55 },
    {date: "2019-12-04", description:"Sunglasses, Urban Outfitters", category:"Fashion", amount: -24.99 },
    {date: "2019-12-06", description:"Venmo, Alice Pays you for Burrito", category:"Food", amount: 8.75},
    {date: "2019-12-06", description:"Chipotle", category:"Food", amount: -17.59},
  ])

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions,  newTransaction]);
  }
  return(

  <div>
    <Head />
    <SearchBar />
    <TransactionForm onSubmitForm={addTransaction} />
    <TransactionList transactions ={transactions} />
 
   </div>
  )
}

export default App;
