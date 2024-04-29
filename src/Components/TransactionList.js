import React from 'react';

// Define a functional component named TransactionList that accepts a prop named transactions
const TransactionList =  ({ transactions }) => {
    return (
        <div className="table-container">
            <table>
              <thead> {/* Table header */}
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
              </thead>
              <tbody> {/* Table body - list of transaction items */}
                {transactions.map((transaction, index) => (
                   <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                   </tr>
                ))}
              </tbody>
            </table>
        </div>
    )
 } 
 export default TransactionList     