import { useRef } from "react";

import User from "./Users";
import { useHistory } from "react-router-dom";

function Login({updateuser}){
    const sendbox = useRef();
    let history = useHistory();
    const sendbox1 = useRef();
    const check =     function(){
        var p =sendbox.current.value
        var s =sendbox1.current.value
        for(var i=0;i<User.length;i++){
            if(p===User[i].useName && s === User[i].pass ) {
                console.log('ok')
                updateuser({s})
                history.push('/f')
                return;
            }        
        }
         alert('wrong password or user try again or join us now')
    }
    const register = function(){
        history.push('/a') 
    }
    
return (    <>
    <div className="form-body">
    <div className="row">
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                    <h3>Log In</h3>
                    <p>Fill in the data below.</p>
                    <form className="requires-validation" novalidate>

                        <div className="col-md-12">
                           <input ref={sendbox} className="form-control" type="text" name="name" placeholder="Display name" required></input>
                           <div className="valid-feedback">Username field is valid!</div>
                           <div className="invalid-feedback">Username field cannot be blank!</div>
                        </div>

                       <div className="col-md-12">
                          <input ref={sendbox1} className="form-control" type="password" name="password" placeholder="Password" required></input>
                           <div className="valid-feedback">Password field is valid!</div>
                           <div className="invalid-feedback">Password field cannot be blank!</div>
                       </div>
                        <div className="form-button mt-3">
                            <button onClick={check} id="submit" type="submit" className="btn btn-primary">log in</button> 
                           
                        </div>
                        <div className="form-button mt-3">
                            <p>Not a member yet </p>
                            <button onClick={register} id="submit" type="submit" className="btn btn-primary">join us now</button>          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</>)
}
export default Login
