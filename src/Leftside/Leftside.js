import Message from '../Chatback/Messages';
import Guest from './Guestside';
import infos from './Info';
import Popupp from './Popup';
import React, { useState, useEffect, useRef } from 'react';
import img1 from './tokyo-ghoul-4k.jpg';
import { findByText, render } from '@testing-library/react';
import App from '../App';
import User from '../login/Users';
function Left({upatechat,y,setx,userpass}) {

if(y===1){    const currlist = function startedlist(z){
        for (var i = 0; i < z; i++) {
            Message.push(infos[i])
          }
    }
    const x = currlist(5);}
    const MessageList = Message.map((message,key)=> {
        return <Guest chexk={chexk} name={message.name} message={message.message} time={message.time} img={message.img} id={message.id}   key={key}/>
    })
    const infoList = infos.map((info,key)=> {
        return <Guest chexk={chexk} name={info.name} message={info.message} time={info.time} img={info.img} id={info.id}   key={key}/>
    })
    
    function chexk({name,img ,s,id}){
        upatechat({name,img,s,id})
    }  
    function fix({s}){
        for(var j=0 ;j<Message.length;j++){
            if(Message[j].name === s){
                alert("already in")
                return ;
            }
        }
        for (var i = 0; i < infos.length; i++) {
            if(infos[i].name === s){
                Message.push(infos[i])
                chexk({name:infos[i].name,img:infos[i].img,s,id:infos[i].id})
                return;
            }
          }
          alert("wrong userName")
    }
    const sendbox = useRef();
    const Add = function(){
        var s = sendbox.current.value;
        sendbox.current.value = null;
        fix({s});
    }
    var user;
    var img;
    for(var i=0;i<User.length;i++){
      if(userpass === User[i].pass ) {
          console.log('ok')
         user = User[i].useName
         img = User[i].img
          
      }        
  }
  
    return (
      <div id="try" className="col-3 bg-darkgray ">
        <div id="userrow" className="row ">
          <div   className="d-flex   align-items-center">
            <img id="userimg" className="padding-left rounded-circle" src={img} ></img>
            
            <span id='user' style={{color:"white"}} className="ms-3 d-flex">{user} </span>
            <button type="button " className="btn" data-bs-toggle="modal"  data-bs-target="#staticBackdrop2">
              <i style={{color:"white"}} className="bi bi-person-plus-fill"></i>
            </button>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel2">Add guest</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label for="formFile" className="form-label"></label>
                        <input ref={sendbox} className="form-control"  placeholder="type user Name" type="text" id="input_img"  />
                        {/* <!-- <img id="input_img"  width = 200px src="" /> --> */}
                    </div>
                  </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Add}>Add</button>
            </div>
          </div>
        </div>
    </div>
          </div>
        </div>
        {/* {currlist} */}
        {/* {infoList} */}
        <div id="contact_div" class="table-wrapper-scroll-y my-custom-scrollbar">
          {MessageList}
          <table class="table table-bordered table-striped mb-0">
          </table>
        </div>
      
      </div>
    );
}
export default Left;