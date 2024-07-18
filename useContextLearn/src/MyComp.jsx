import { useState, createContext } from "react";
import MyCompB from "./MyCompB";


export const UserContext = createContext();

function MyComp(){

const [user, setUser] = useState("Muzzammil")
return(<div className="box">
    <h1>ComponentA</h1>
    <h2>{`Hello ${user}`}</h2>
    <UserContext.Provider value={user}>
    <MyCompB user={user}/>
    </UserContext.Provider>
</div>);

}


export default MyComp