import { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer.jsx"


const initialState = {
    transactions: JSON.parse(localStorage.getItem("transactions")) || [],
}; 

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state.transactions));
      }, [state.transactions]);      

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }
    
    return(
        <GlobalContext.Provider value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}