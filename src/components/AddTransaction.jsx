import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
    const [amount, setAmount] = useState("");
    const [text, setText] = useState("");
    const { addTransaction } = useContext(GlobalContext);

    function onSubmit(e) {
        e.preventDefault();
        if(text && amount){
            const newTransaction = {
                id: Math.floor(Math.random() * 10000000),
                text,
                amount: +amount,
            }
            addTransaction(newTransaction);
            setText("");
        }
        else {
            alert("Fill in blanks");
        }
        setText("");
        setAmount("");
    }
    return(
        <>
            <h3 className="font-bold border-b border-b-[#bbb] border-solid pb-3 mt-10 mb-3">Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="inline-block my-3" htmlFor="text">Text</label>
                    <input className="border border-solid border-[#dedede] text-base p-3 w-full rounded-sm" value={text} type="text" onChange={e=>setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div>
                    <label className="inline-block my-3" htmlFor="amount">Amount <br /> (negative - expense, positive - income) </label>
                    <input className="border border-solid border-[#dedede] text-base p-3 w-full rounded-sm" value={amount} type="number" onChange={e=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="cursor-pointer bg-[#9c88ff] shadow text-white border-none text-base p-3 mt-3 mb-9 w-full">Add transaction</button>
            </form>

        </>
    )
}

export default AddTransaction;