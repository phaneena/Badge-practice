import React from "react";
import Child from "./Child";

function Parent(){
    const message='i am very happy'
    return(
        <div>
            <Child message={message} />
        </div>
    )
}
export default Parent