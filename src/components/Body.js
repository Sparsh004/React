import RestaurantCard from "./RestaurantCard";
import resList3 from "../utils/mockData";
import ListOfRestaurant from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";

// const Body = () => {
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
//       const json = await response.json();
      
//       // IMPORTANT: Check the actual API response structure using:
//       console.log("API Response:", json);

//       // Update this path based on actual response structure
//       const restaurants = json?.data?.cards?.find(
//         card => card.cardType === "seeAllRestaurants"
//       )

//       setListOfRestaurants(restaurants);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading restaurants...</div>;
//   }

//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             setListOfRestaurants(
//               listOfRestaurants.filter(
//                 res => res.data?.info?.avgRating > 4.4
//               )
//             );
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
      
//       <div className="res-container">
//         {Array.isArray(listOfRestaurants) && listOfRestaurants.length > 0 ? (
//           listOfRestaurants.map(restaurant => (
//             <RestaurantCard
//               key={restaurant.data?.info?.id}
//               resData={restaurant.data?.info}
//             />
//           ))
//         ) : (
//           <div>No restaurants found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Body;


const Body = ()=>{



//  Local state Variable
const [ListOfRestaurants,setListOfRestaurants] = useState(resList3);
const [filteredRestaurant,setFilteredRestaurant] = useState(resList3);

const [searchText,setSearchText] = useState("");

// useEffect Hook


useEffect(()=>{
  fetchData();
  
 
});

const fetchData = async()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  console.log(json.data);

  // setListOfRestaurants(
  //   json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
  // )
  

};

// if(ListOfRestaurants.length ===0){
//   return <Shimmer/>
// }


// const {restaurants} = ListOfRestaurants

// the rendered will be printed first because its a part of the body and the body is rendered before the useEffect
console.log("rendered ");

    return (
        <div className = "body" >
            <div className= "filter">
              <div className = "search">
                <input type="text"
                placeholder="Search Your favourite Eateries..." 
                className="search-box"
                value={searchText} 
                onChange={(e)=>{
                  setSearchText(e.target.value); //this is to update the local state variable 
                }}/>
                <button onClick={()=>{
                  // filter the restaurant cards and update the UI
                  // searchText
                  console.log(searchText)
                  const filteredRestaurant = ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );

                  setListOfRestaurants(filteredRestaurant);

                }}>Search</button>
              </div>
              <button className= "filter-btn" onClick ={()=>{
                // Logic to filter top restaurant
                
                // let filteredList = ListOfRestaurants.filter(res=>res.info.avgRating>4);
                // console.log(filteredList);
                setListOfRestaurants(ListOfRestaurants.filter(res=>res.info.avgRating>4.4));
                
              }}
              
              
              >Top Rated Restaurants</button>
            </div>
             <div className ="res-container" >{
                   ListOfRestaurants.map((res)=> (
                   <Link 
                   key= {res.info?.id}
                   to ={"/restaurants/"+res.info.id}><RestaurantCard  resData={res}/></Link>))
                } 

                {/* <RestaurantCard resData = {ListOfRestaurant[0]}/>
                <RestaurantCard resData ={ListOfRestaurant[1]}/> */}
            </div>
        </div>
    )
};


export default Body;