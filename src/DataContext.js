import React, { useState } from "react";

export const Data = React.createContext('')

export default function DataContext(props) {
    const [Count, SetCount] = useState(0)
    function add_Item(e) {
        SetCount(e + Count)
    }
    function Delete() {
        SetCount(0)
        console.log('what')
    }
    return(
        <Data.Provider value={{Count, add_Item, Delete}}>
            {props.children}
        </Data.Provider>
    )
}