import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.jsx";
import { moneyFormatter } from "../lib/utils.js";

function Balance() {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, curr) => total += curr, 0);

    return(
        <>
            <h4 className="m-0 uppercase">Your Balance</h4>
            <h1 className="tracking-[1px] m-0 font-bold text-2xl">{total < 0 ? "-" : "+"}{moneyFormatter(total)}</h1>
        </>
    )
}

export default Balance;