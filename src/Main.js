import Cards from "./Cards"

const Main = (props) => {
    return ( 
        <div className="body-container">
            <div className="body-header">
            <h2>Stays in finland</h2>
            <p>12+ Stays</p>
            </div>
            <div className="cards">
                <Cards data={props.hotels}/>
            </div>
        </div>
     
     );
}
 
export default Main;