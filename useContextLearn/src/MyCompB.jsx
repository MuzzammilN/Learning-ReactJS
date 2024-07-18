import MyCompC from "./MyCompC";

function MyCompB(props){


return(<div className="box">
    <h1>ComponentB</h1>
    <MyCompC user={props.user}/>
</div>);

}


export default MyCompB