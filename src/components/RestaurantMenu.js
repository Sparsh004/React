import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API} from "../utils/constants";
import {Link} from "react-router-dom";



const RestaurantMenu = ()=>{
    
    const [ resInfo, setresInfo] = useState(null);

    const {resId} = useParams();
    

    useEffect(()=>{
       fetchMenu() 
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);

        const json = await data.json();

        console.log(json);
        setresInfo(json.data);
    };

    if(resInfo === null) return <Shimmer/>

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return  (
        <div className = "menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
            <p>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(", ")}</p>
            <h2>Menu</h2>
            {/* <ul>
                <li>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[2].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[3].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[4].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[5].card.info.name} </p>
                    <p>{resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[6].card.info.name} </p>
                </li>

            </ul> */}

            <ul>
                {itemCards.map(item => (  
                    <li> {item.card.info.name} -  Rs.{item.card.info.price/100}</li>))}
            </ul>

            <h2>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h2>

        </div>
    )
};

export default RestaurantMenu;
