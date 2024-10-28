import { useContext } from 'react';
import Styles from './FormInput.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import createProvider from '../store/Provider';
const FormInput=()=>
{

    const {sendFormAction,one}=useContext(createProvider);

    const submitFormAction=(newObject)=>
    {
        newObject.preventDefault();
        sendFormAction(event);
    }
    
    return(
        <div className={`${Styles.from_Container}`}>
        <form className={Styles.froming} onSubmit={submitFormAction}>
            <h3>Add New Password</h3>
            <input className={Styles.inputs} type="text" placeholder='Enter Website' />
            <input className={Styles.inputs} type="text" placeholder='Enter Username' />
            <input className={Styles.inputs} type="password" placeholder='Enter password' />
            <div className={Styles.button_store}><button className={Styles.add} type='submit'>Add</button></div>
            {
                one && <p className={Styles.error}>* Fill the Form</p>
            }
        </form>
        </div>
    )
    
}
export default FormInput;