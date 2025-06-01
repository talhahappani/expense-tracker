import { useState } from 'react'
import Header from "./components/Header.jsx"
import IncomeExpenses from "./components/IncomeExpenses.jsx"
import Balance from "./components/Balance.jsx"
import TransactionList from "./components/TransactionList.jsx"
import AddTransaction from "./components/AddTransaction.jsx"
import GlobalProvider from './context/GlobalState.jsx'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className='mx-auto my-[30px] w-[400px]'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
