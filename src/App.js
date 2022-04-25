
import './App.css';
import Left from './Leftside/Leftside';
import Chat from './Chatback/Chatside';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Register from './login/register';
import Login from './login/Log';
import img2 from './j.jpeg'
import './temp.css'

//App({name,img})
function App() {
  //for every variant ut a const for him
  const [chatstate,setchatstate] = useState({name:''}) //name
  const [chatstateImg,setchatstateImg] = useState({img:{} }) //image
  const [chatstateId,setchatstateId] = useState( {id:'1'}) //id
  const [x,setx] = useState( 1) //id
  const [userpass,setuserpass] = useState('') //name
  //let x =1;
    // we need to create function to set the state send the function as an argument to chat then try to change it from in the chat set name ...
  function updateuser({s}){
    setuserpass(s)
  }
  function upatechat({name,img, s, id}){
    
    //x++;
    // if (x ===1) { add() }
    //console.log({name});
    // setchatstate( {id : {id}, img : {img},name : {name}});
    setchatstate(chatstate.name = {name})
    setchatstateId(chatstateId.id = {id})
    setchatstateImg(chatstateImg.img = {img})
    setx(2)
   

  }
  useEffect(()=>{
    
  }, )
  // function add(){
  //         var element = document.getElementById("ff")
  //        // ReactDOM.render(<Chat chatstate ={chatstate} chatstateId={chatstateId} chatstateImg={chatstateImg} upatechat={upatechat}  /> , document.getElementById('i'));
  //     element.innerHTML +=  <Chat chatstate ={chatstate} chatstateId={chatstateId} chatstateImg={chatstateImg} upatechat={upatechat}  /> 
  // }
  console.log('you reached  app fuck');
  // render the fucking app to return new chat in the right side
  
if(x===1){   
  
   return (
     <Router>
       <div className="row container-fluid ttt">
         <div id="ff" className="row">
           <Switch>
           <Route  exact path='/'>
               <Login updateuser={updateuser} />
             {/* <Left upatechat={upatechat} y={x} setx={setx} /> */}
             </Route>
             <Route exact path='/a'>
             <Register />
             </Route>
             <Route  path='/f'>
               
             <Left upatechat={upatechat} y={x} setx={setx} userpass={userpass} />
             {/* <div> */}
             <div className="col-9">
               <img id='ci' src={img2}></img>
             {/* </div> */}
             </div>
             </Route>
           </Switch>
           

           {/* <Left upatechat={upatechat} y={x} setx={setx} /> */}

           {/* <Left upatechat={upatechat} y={x} setx={setx} /> */}
           {/* <Guest /> */}

           {/* <Chat chatstate ={chatstate} chatstateId={chatstateId} chatstateImg={chatstateImg} upatechat={upatechat}  />  */}
           {/* <div id='h' className="col-9"></div> */}
         </div>
       </div>
     </Router>
   );} else{
    return (
      <div  className="row container-fluid ttt">
        <div id='ff'  className="row">
          
          <Left upatechat={upatechat} y={x} setx={setx} userpass={userpass} />
          {/* <Guest /> */}
          
           <Chat chatstate ={chatstate} chatstateId={chatstateId} chatstateImg={chatstateImg} upatechat={upatechat}  /> 
        </div>
      </div>
    
    )}
}
// try to send function  to left from left to guist and from there use the function on click to change the chat
//setstate will change the state then will call render
export default App;

