import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    return(
        <>
            <h3 className="font-bold border-b border-b-[#bbb] border-solid pb-3 mt-10 mb-3">History</h3>
            <ul className="list-none p-0 mb-10">
                {transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} />)}
            </ul>
        </>
    )
}

export default TransactionList;