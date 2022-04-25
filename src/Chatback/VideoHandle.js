
function Vhandle({video}){
    return (<div>
        <video width="320" height="240" controls>
        <source src={video} type="video/mp4"></source></video>
       </div>)
}
export default Vhandle