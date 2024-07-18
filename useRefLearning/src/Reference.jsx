import React, {useState, useEffect, useRef} from "react";


function Reference(){



    let [number, setNumber] = useState(0);

    const ref = useRef(0);
    function handleClick() {
        ref.current++;
        console.log(ref.current);

    }

    useEffect(() => {
        console.log("Component Rendered")
    });

    return(
        <button onClick={handleClick}>Click Me</button>
    )
}

export default Reference;