import ProfilePic from "./assets/profile.jpg"

function Card(){

    return(
        <div className="Card">
            <img className="card-image" src={ProfilePic} alt="Pfp" width="200px" height="200px"></img>
            <h2>Muzzammil Naqvi</h2>
            <p>I am creating a card component</p>
        </div>
    );

}


export default Card