import "./test2.css"
function test2(props){
return(
<div className="nav">
    <img src={`./${props.img}`}/>
    <p>Hi</p>
    <p className="end">{props.content}</p>
    </div>

)
}
export default test2;