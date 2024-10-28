import { useContext } from 'react';
import '../App.css';
import DisplayPasswords from './DisplayPasswords.jsx'
import createProvider from '../store/Provider.jsx';
import { Link } from 'react-router-dom';

const Password=()=>
    {
      const {string,count,arrangArray}=useContext(createProvider);
  
      const searchInput=(event)=>
      {
        const dummy=arrangArray.filter((ele)=>
          {   
              if((ele.webName).toLowerCase().includes(event.target.value.toLowerCase()))
              {
                  return ele;
              }
          })
          string(dummy)
      }
      return(
        <div className="bodyContainer">
          <div className="top_Container">
            <div className="inputAndTitleContainer">
              <div className="searchbar"><input type="search" style={{outline:'none'}} onChange={searchInput} placeholder="Search"/></div>
            </div>
            <div className="passwordsCoutn"><h3>Your Passwords {count}</h3></div>
          </div>
          <div className="passwordStorage">
            <DisplayPasswords></DisplayPasswords>
          </div>
          <Link to='/'><button className='showButton' type='submit'>Home</button></Link>
        </div>
      )
    }

    export default Password;