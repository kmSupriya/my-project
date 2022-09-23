import {createContext , useState } from "react" ;
//import react from "react";

export const counterContext = createContext();

function CreateContextProvider(props) {

    const [sname] = useState("supriya");
    const [sroll] = useState("1001");
    const [saddr] = useState("Hadagali");

    const [tname] = useState("Shruthi GT");
    const [tid] = useState("T001");
    const [tadds] = useState("Davanagere");

    const [bname] = useState("GEC");
    const [bidn] = useState("2022");
    const [badds] = useState("Banglore");

    const [cname] = useState("E & C");
    const [cdure] = useState("4 Years");
    const [cfee] = useState("50000");

    return(
        <counterContext.Provider value={{sname,sroll,saddr,tname,tid,tadds,bname,bidn,badds,cname,cdure,cfee}}>
            {props.children}
        </counterContext.Provider>
    )
}

export default CreateContextProvider;