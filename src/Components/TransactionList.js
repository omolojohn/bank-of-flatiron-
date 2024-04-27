import React from 'react';

const TransactionList =  ({ transactions }) => {
    return (
        <div>
            <table>
              <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
              </thead>
              <tbody>
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