import Handle from './Chatjandle';

import Typo from './Type';
import infos from '../Leftside/Info';
import HandleImg from './ImgHandle';
import Vhandle from './VideoHandle';

import Audiohandle from './AudioHandle';

function Chat({chatstate,chatstateId,chatstateImg,upatechat}) {
//   console.log( 's' );
function mlist() {
  for (var i = 0; i < infos.length; i++) {
    if (chatstateId.id === infos[i].id) {
      return i;
    }
  }
};
const m = mlist()
////console.log(m);
//var x = chatstate.name;
//console.log(x);
//console.log(chatstateId.id);
function updatechat({ name, img, s,typ, id }) {
  // const r = {str:{s},typ:{typ}}
  // infos[m].array.push(r);
  upatechat({ name, img, s, id });
}
  const messagelist = infos[m].array.map((s,key) => {
       if(s.typ.typ === 'm'){
       var cur = s.str;
       console.log(cur.s);
       return <Handle s={cur.s} key={key} />;
       } else if(s.typ.typ === 'img') {
        var imgcur = s.str;
         return <HandleImg image={imgcur.i} />
       } else if(s.typ.typ === 'v') {
        var vid = s.str;
        return <Vhandle video={vid.i} />
       } else if(s.typ.typ === 'A'){
        var audio = s.str;
         return <Audiohandle audio={audio.i}/>
       }
  });
  

  //const melist
  // in chat state lits build an array for messages then every guest will have his own messge ever time we will show them on the f screen
    
//   });

  return (
    <div className="col-9">
      <div id='userrow' className="row">
        <ul className="list-group">
          <li className="list-group-item d-flex  align-items-center">
            <img className="rounded-circle" src={chatstateImg.img}></img>
            <span style={{color:"white"}} className="w-100 ms-3">{chatstate.name}</span>
          </li>
        </ul>
      </div>
      <div id="backchat" className="row">
        {/* <div  id='chatfs' className="containerm "> */}
            <div   id='chathere' >
                {/**chatstate. message is an array you need to print it */}
                {/**what i need to do her is create some map then the map will return handle for all the message in here */}
                {/* {m} */}
                {messagelist}
            </div>
            

          
        {/* </div> */}
        {/* <img src={img1}></img> */}
      </div>
      {/* try to use function for the chat  <Typo name={chatstate.name} img={chatstate.img} updatechat={updatechat}/> */}
      {/* <Typo name={chatstate.name} img={chatstate.img} /> */}
      <Typo name={chatstate.name} img={chatstateImg.img} id={chatstateId.id} updatechat={updatechat} />
    </div>
  );
}
export default Chat;
