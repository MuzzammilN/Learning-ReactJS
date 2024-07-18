import MyCompD from "./MyCompD";

function MyCompC(props){


return(<div className="box">
    <h1>ComponentC</h1>
    <MyCompD user={props.user}/>
</div>);

}


export default MyCompC