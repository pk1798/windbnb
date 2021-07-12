import Card from './Card';


const Cards = (props) => {

    return ( 
        <div className="cards">
         {props.data.map((card)=>{
            return <Card img={card.image} name={card.name} type={card.type} rating={card.rating} host={card.host} key={card.id}/>
         })}
        </div>
     );
}
 
export default Cards;