import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import { moneyFormatter } from "../lib/utils.js";

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((total, curr) => total += curr, 0);
    const expense = amounts.filter(item => item < 0).reduce((total, curr) => total += curr, 0) * -1;
    return(
        <div className="bg-white p-5 flex justify-between my-5 shadow">
            <div className="flex-1 text-center border-r-2 border-solid border-r-[#dedede]">
                <h4 className="uppercase m-0">Income</h4>
                <p className="text-xl my-1 text-[#2ecc71] tracking-[1px]">{moneyFormatter(income)}</p>
            </div>
            <div className="flex-1 text-center">
                <h4 className="uppercase m-0">Expense</h4>
                <p className="text-xl my-1 text-[#c0392b] tracking-[1px]">{moneyFormatter(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;