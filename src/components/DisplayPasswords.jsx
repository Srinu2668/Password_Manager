import { useContext } from "react";
import Styles from "./DisplayPasswords.module.css";
import createProvider from "../store/Provider";

const DisplayPasswords=()=>
{
    const {array,deleteData}=useContext(createProvider);
    const color=['lightsalmon','lightgreen','pink','lightcoral','lightyellow','lightblue'];


    if(array.length=='0')
    {
        return <img style={{padding:'20px'}} src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" className="img-fluid" height={600} width={600} alt="..."/>
    }
    else
    {
        return(
            <>
            <ul className={Styles.passwordContainer}>
                {
                    array.map((ele)=>
                    {
                        return(
                            <li key={ele.S_No} value={ele.S_No} className={Styles.passwordCards}>
                                <div className={Styles.profile}><div style={{backgroundColor:color[((ele.webName[0].toUpperCase().charCodeAt(0))-65)%6]}}><h1>{ele.webName[0]}</h1></div></div>
                                <div className={Styles.theory}>
                                    <div style={{height:'33%',display:'flex',alignItems:'center',columnGap:'8px'}}>Domain: <h3 className={Styles.hh}>{ele.webName}</h3></div>
                                    <div style={{height:'33%',display:'flex',alignItems:'center',columnGap:'8px'}}>userName: <h5 className={Styles.hh}>{ele.userName}</h5></div>
                                    <div style={{height:'33%',display:'flex',alignItems:'center',columnGap:'8px'}}>password: <h6 className={Styles.hh}>{ele.password}</h6></div>
                                </div>
                                <div className={Styles.deleteIcon} value={ele.S_No} onClick={deleteData}></div>
                            </li>
                        )
                    })
                }
            </ul>
            </>
        )
    }
    

}
export default DisplayPasswords;