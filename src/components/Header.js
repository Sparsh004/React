import {LOGO_URL} from "../utils/constants";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";




const Header = ()=>{

    

    const [btnNameReact,setbtnNameReact] = useState("Login");

    // if no dependency array=>useEffect is called on every render
    // if there is an empty dependecy array => useEffect is called only once at the top
    // if there is not an empty dependency array => only changes when the dependency array is updated 
    useEffect(()=>{
        console.log("useEffect render");
    },[btnNameReact])


    return (
        <div className ="header">
            <div className = "logo-container">
                <img className = "logo" src ={LOGO_URL} />
            </div>

            <div className = "nav-item">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About Us</Link></li>
                    <li><Link to = "/contactus">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className = "login-btn" onClick={()=>{
                        btnNameReact === "Login"? setbtnNameReact("Logout"): setbtnNameReact("Login"); 
                        console.log(btnNameReact)}}>{btnNameReact}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;