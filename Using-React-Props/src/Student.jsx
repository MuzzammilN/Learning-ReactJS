


function Student(props){

    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}


Student.propTypes = {
    name: propTypes.String,
    age: PropTypes.number
}


export default Student