import { useState } from 'react';
import Main from './Main';
import data from './Server/data';

const Header = () => {

    const [locationValue, setLocationValue] = useState('');
    const [guestValue, setGuestValue] = useState();
    const [hotels, setHotels] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        let hotelLists = data;
        let filteredHotelsLocation = hotelLists.filter((hotel)=>hotel.location === locationValue && hotel.guest === parseInt(guestValue));
        setHotels(filteredHotelsLocation)

    }


    return ( 
     <>
        <header>
            <div className="logo">
                <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EB5757" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg> windbnb</h1>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>setLocationValue(e.target.value)} placeholder="location" required />
                    <input type="number"  onChange={(e)=> setGuestValue(e.target.value)} placeholder="Add Guest" required/>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EB5757" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></button>
                </form>
        </header>
        <Main hotels={hotels}/>
     </>
     );
}
 
export default Header;