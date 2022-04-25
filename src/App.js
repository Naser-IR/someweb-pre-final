
import './App.css';
import Left from './Leftside/Leftside';
import Chat from './Chatback/Chatside';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Register from './login/register';
import Login from './login/Log';
import img2 from './j.jpeg'
import './temp.css'

//App({name,img})
function App() {
  //these state is the user state and we update them on every operation wich render the component app to keep it update
  const [chatstate,setchatstate] = useState({name:''}) //name
  const [chatstateImg,setchatstateImg] = useState({img:{} }) //image
  const [chatstateId,setchatstateId] = useState( {id:'1'}) //id
  const [x,setx] = useState( 1) //id
  const [userpass,setuserpass] = useState('') //name
  
  function updateuser({s}){
    setuserpass(s)
  }
  function upatechat({name,img, s, id}){
    

    setchatstate(chatstate.name = {name})
    setchatstateId(chatstateId.id = {id})
    setchatstateImg(chatstateImg.img = {img})
    setx(2)
   

  }


  
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
             <Route exact path='/f'>
               
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
//         <div id='ff'  className="row">
          
          <Left upatechat={upatechat} y={x} setx={setx} userpass={userpass} />
          {/* <Guest /> */}
          
           <Chat chatstate ={chatstate} chatstateId={chatstateId} chatstateImg={chatstateImg} upatechat={upatechat}  /> 
//         </div>
      </div>
    
    )}
}

export default App;

