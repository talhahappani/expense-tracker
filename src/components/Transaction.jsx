import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { moneyFormatter } from "../lib/utils";

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";
    return(
            <li className={`${sign === "+" ? "border-r-green-400" : "border-r-red-400"} border-r-4 group bg-white shadow text-black flex justify-between relative p-3 my-3`}>
            {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="rounded-md duration-300 group-hover:opacity-100 opacity-0 cursor-pointer bg-[#e74c3c] text-white border-none text-xl px-2 absolute top-1/2 left-0 -translate-x-full -translate-y-1/2">x</button>
        </li>
    )
}