import React, { useState } from "react";

function Todo(){
    const [input,setInput]=useState([])
    const [name,setName]=useState('')
    const [editlist,setEditlist]=useState(null)
    const [editinput,setEditinput]=useState(null)
    const handlesubmit=()=>{
        if(name.trim()){
            setInput([...input,name])
            setName('')
        }
        
    }
    const handledelete=(index)=>{
        setInput(input.filter((_,id)=>id!==index))

    }
    const handleedit=(index)=>{
        setEditinput(input[index])
        setEditlist(index)
        
    }
    const handlesave=()=>{
        input[editlist]=editinput
        setEditlist(null)
    }
    return(
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={handlesubmit}>submit</button>
                <ul>
                    {input.map((text,index)=>
                    (
                        <div key={index}>{text}
                        <button onClick={()=>handledelete(index)}>Delete</button>
                        <button onClick={()=>handleedit(index)}>Edit</button>
                        </div>
                    ))}
                    {editlist!==null ? ( <div>
                            <input type="text" value={editinput} onChange={(e)=>setEditinput(e.target.value)} />
                            <button onClick={handlesave}>Save</button>
                            </div>) :''
                            }
                </ul>
            </div>
        )
}
export default Todo