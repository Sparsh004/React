import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import ListOfRestaurant from "../utils/mockData";
import {useState} from "react";



const Body = ()=>{

//  Local state Variable
const [ListOfRestaurants,setListOfRestaurants] = useState(resList);



    return (
        <div className = "body" >
            <div className= "filter">
              <button className= "filter-btn" onClick ={()=>{
                // Logic to filter top restaurant
                
                // let filteredList = ListOfRestaurants.filter(res=>res.info.avgRating>4);
                // console.log(filteredList);
                setListOfRestaurants(ListOfRestaurants.filter(res=>res.info.avgRating>4.4));
                
              }}
              
              
              >Top Rated Restaurants</button>
            </div>
             <div className ="res-container" >{
                    ListOfRestaurants.map((restaurant)=> (<RestaurantCard key = {restaurant.info.id} resData={restaurant}/>)) 
                } 

                {/* <RestaurantCard resData = {ListOfRestaurant[0]}/>
                <RestaurantCard resData ={ListOfRestaurant[1]}/> */}
            </div>
        </div>
    )
}

export default Body;