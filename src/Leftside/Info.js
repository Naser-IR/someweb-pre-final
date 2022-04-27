import img2 from './mihawk.webp'
import img3 from './ace.jpeg'
import img4 from './sabo.png'
import img1 from './zoro.webp'
import img5 from './luffy.jpeg'
import img6 from './Shanks.webp'
import img7 from './marco.webp'
import vid from './IMG_5391.mp4'
import aud from './web.m4a'
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() 
const infos = [{name:'naser' , message: 'img', time:time,img:img1,id:'1', array : [{str: img1, typ: "img"}]}
, {name:'safwan' , message: 'Ready?',time: time,img:img2,id:'2', array : [{str: "Ready?", typ: "m"}]}
, {name:'ibrahem' , message:'video',time:time ,img:img4,id:'3', array : [{str: vid, typ: "v"}]}
, {name:'ace' , message:'audio',time:time,img:img3,id:'4', array : [{str: aud, typ: "A"}]}
, {name:'luffy' , message:'',time:time,img:img5,id:'5', array : []}
, {name:'shanks' , message:'',time:time,img:img6,id:'6', array : []}
, {name:'marco' , message:'',time:time,img:img7,id:'7', array : []}
];
export default infos;
