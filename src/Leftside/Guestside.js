

import React from "react";


// import Type from './Type';

function Guest({chexk,name, message, time, img, id }) {
  const open = function () {
    chexk({name,img,message,id});
    //console.log({ name });
  };
  return (
    <div id="ggg"  className="chat-list-item bg-black d-flex flex-row w-100 p-2 border-bottom cont-list" onClick={open}> 
        <div id='cont-img'>
        <img src={img} id='pphoto' alt="Profile Photo" className="img-fluid rounded-circle mr-2"></img>
        </div>
        <div className="w-50">
            <h5  className="mb-1 color:white"> {name} </h5>
            <p class="mb-1" id=""> {message} </p>
        </div>
        <div id="time" className="flex-grow-1 text-right">
            <div className="small time" id=""> {time}  </div>
        </div>
    </div>
    // <div id="guestrow" onClick={open} className="chat-list-item d-flex flex-row w-100 p-2 border-bottom" type="button">
    //   <div id="r" className="row bg-black">
    //     <div id="imgc" className="col-4">
    //       <img className="rounded-circle" alt="" src={img}></img>
    //     </div>
    //     <div id="s" className="col -8">
    //       <div id="nrow" className="row d-flex">
    //         {" "}
    //         <span style={{color:"white"}} id="cur" className=" d-flex">  {name}{" "}</span>
    //         {" "}<span style={{color:"white"}}>{time}</span> {" "}
    //       </div>
    //       <div style={{color:"white"}} id="mrow" className="row">
    //         {" "}
    //         {message}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Guest;
