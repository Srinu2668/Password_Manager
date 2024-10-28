import { createContext,useState} from "react";
import { v4 as uuidv4 } from 'uuid';


const createProvider=createContext();
export const Provider=({children})=>
{
    const [count,setCount]=useState(0);
    const [array,setArray]=useState([]);
    const [arrangArray,setArrangArray]=useState(array)
    const sendFormAction=(event)=>
    {
        let website_Name=event.target[0].value;
        let user_Name=event.target[1].value;
        let pass_Word=event.target[2].value;
        let id=uuidv4();
        const sendingobj={S_No:id,webName:website_Name,userName:user_Name,password:pass_Word}
        event.target[0].value='';
        event.target[1].value='';
        event.target[2].value='';
        if(Object.keys(sendingobj).length!=0 && sendingobj.userName!='' && sendingobj.webName!='' && sendingobj.password!='')
        {
            setArray((prevArray)=>
            {
                const newArray=[...prevArray,sendingobj];
                setCount(newArray.length)
                setArrangArray(newArray);
                return newArray;
            })
        } 
        if( sendingobj.userName==='' || sendingobj.webName==='' || sendingobj.password==='')
        {
            sendingWarning(true);
        }
        else
        {
            sendingWarning(false);
        }
    }

    const [one,two]=useState(false);
    const sendingWarning=(ooo)=>
    {
        two(ooo);
    }
    const deleteData=(event)=>
    {
        const id=event.target.attributes[1].nodeValue;
        setArray((data)=>
        {
            const duplicateArray=data.filter((ele)=>
            {
                if(ele.S_No!==id)
                    return ele;
            })
            setArrangArray(duplicateArray);
            setCount(duplicateArray.length)
            return duplicateArray;
        })

    }
    const string=(name)=>
    {
        setArray(name);
    }
    return(
        <createProvider.Provider value={{createProvider,one,sendFormAction,array,deleteData,count,string,arrangArray}}>
            {children}
        </createProvider.Provider>
    )
}
export default createProvider;