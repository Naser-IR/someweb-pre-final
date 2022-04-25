import { useRef } from "react";

import User from "./Users";
import { useHistory } from "react-router-dom";
import infos from "../Leftside/Info";
function Register(){
    const sendbox = useRef();
    const sendbox1 = useRef();
    const sendbox2 = useRef();
    const sendbox3 = useRef();
    const clickbox = useRef();

    const check = function(){
        var s = sendbox.current.value;
        var pass = sendbox1.current.value;
        var confpass = sendbox2.current.value;
        var dName = sendbox3.current.value;
        if(s === ''){
         alert('you need to fill all the info');
         clickbox.current.checked= false
         return
        }
        if(pass === ''){
            alert('you need to fill all the info');
            clickbox.current.checked= false
            return
        }
        if(dName === ''){
            alert('you need to fill all the info');
            clickbox.current.checked= false
            return
        }
        if(pass !== confpass){
            alert('password not the same');
            clickbox.current.checked= false
            return
        }
         for(var j=0;j<infos.length;j++){
             if(dName === infos[j].name){
                alert('name is already used by one of the guest');
                clickbox.current.checked= false
                return
             }  
           }
           for(var k=0;k<User.length;k++){
            if(dName === User[k].useName){
               alert('user is already in try to log in');
               clickbox.current.checked= false
               return
            } 
        }
    }
    let history = useHistory();
    var hasNumber = /\d/; 
    var hasch = /\D/; 
    const operate = function(){
        history.push('/') 
    }
    const operation = function(){
        var s = sendbox.current.value;
        console.log(sendbox1.current.value.length)
        var pass = sendbox1.current.value;
        var confpass = sendbox2.current.value;
        var dName = sendbox3.current.value;
        if(s === ''){
            alert('fuckof');
            clickbox.current.checked= false
            return
           }
           if(!hasNumber.test(pass)){
               alert('password must contain at least one number')
               clickbox.current.checked= false
               return;
           }
           if(!hasch.test(pass)){
            alert('password must contain at least one character')
            clickbox.current.checked= false
            return;
            }
           if(pass.length < 5){
               alert('password must contain  at least 5 characters')
               clickbox.current.checked= false
               return;
           }
           if(pass === ''){
               alert('fuckof');
               clickbox.current.checked= false
               return
           }
           if(dName === ''){
               alert('fuckof');
               clickbox.current.checked= false
               return
           }
           if(pass !== confpass){
               alert('password not the same');
               clickbox.current.checked= false
               return
           }
           for(var j =0;j<infos.length;j++){
             if(dName === infos[j].name){
                alert('name is already used by one of the guest');
                clickbox.current.checked= false
                return
             }  
           }
           for(var k=0;k<User.length;k++){
            if(dName === User[k].useName){
               alert('user is already in try to log in');
               clickbox.current.checked= false
               return
            }  
          }
        var base64data;
        var i;
        var reader = new FileReader();
        reader.onload = function () {
        base64data = reader.result;
         i =base64data;
         var x ={Name:s,pass:pass,useName:dName,img:i}
         User.push(x);
        };
        var image = document.getElementById("choosephoto").files[0];
        reader.readAsDataURL(image)
        sendbox.current.value = null;
        sendbox1.current.value = null;
        sendbox2.current.value = null;
        sendbox3.current.value = null;

        history.push('/') 
        alert('register done now you can log in')
        
        
    }
    return(
        <>
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Join Us Now</h3>
                        <form className="requires-validation" novalidate>

                            <div className="col-md-12">
                               <input ref={sendbox} className="form-control" type="text" name="name" placeholder="Full name" required></input>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                           <div className="col-md-12">
                              <input ref={sendbox1} className="form-control" type="password" name="password" placeholder="Password" required></input>
                              <label className="form-check-label">password must contain 5 charecter with at least one number</label>
                               <div className="valid-feedback">Password field is valid!</div>
                               <div className="invalid-feedback">Password field cannot be blank!</div>
                           </div>
                           <div className="col-md-12">
                              <input ref={sendbox2} className="form-control" type="password" name="password" placeholder="confirm Password" required></input>
                               <div className="valid-feedback">Password field is valid!</div>
                               <div className="invalid-feedback">Password field cannot be blank!</div>
                           </div>
                           <div className="col-md-12">
                              <input ref={sendbox3} className="form-control" type="text" name="password" placeholder="User Name" required></input>
                           </div>
                           <div className="col-md-12">
                           <input id="choosephoto" className="form-control" type="file"   required></input>
                           </div>
                           <div className="form-check">
                          <input ref={clickbox} onClick={check} className="form-check-input" type="checkbox" value= "" id="invalidCheck" required></input>
                          <label className="form-check-label">I confirm that all data are correct</label>
                         <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                          </div>
                            <div className="form-button mt-3">
                               <button onClick={operation} id="submit" type="submit" className="btn btn-primary">Register</button> 
                               {/* <Link to="/a"></Link> */}
                            </div>
                            <div className="form-button mt-3">
                               <button onClick={operate} id="submit" type="submit" className="btn btn-primary">Log in</button> 
                               {/* <Link to="/a"></Link> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    )
}
export default Register
