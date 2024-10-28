import FormInput from "./components/FormInput.jsx";
import './App.css';
import {Routes,Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Password from "./components/Password.jsx";

const App=()=>
{
  const Form=()=>
  {
    return (
      <div className="bodyContainer">
      <div className="logoimg"><img src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png" alt="logo" height="80px" /></div>
      <div className="formContainer">
        <FormInput></FormInput>
        <div className="fromImg"><img src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png" className="img-fluid" alt="..."/>
        <Link to='/pass'><button className='showButton' type='submit'>Show Passwords</button></Link>
        </div>
     </div>
    </div>
    )
  }
  return(
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/pass" element={<Password />} />
      </Routes>
     )
}
export default App;
