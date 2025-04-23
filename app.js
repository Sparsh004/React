import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * - search
 * - Restaurant Container
 *   - Restaurant card
 *     -img
 *     - Name of res, cuisine
 *
 * Footer
 * -copyright
 * -links
 * -address
 * -contact
 * 
 */

const Header = ()=>{
    return (
        <div className ="header">
            <div className = "logo-container">
                <img className = "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
            </div>

            <div className = "nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard ={
    backgroundColor:"#f0f0f0"
}

const resList = [
    
        {
            "info": {
              "id": "139558",
              "name": "Dindigul Thalappakatti",
              "cloudinaryImageId": "exhzkyd9pjoqlobruy4v",
              "locality": "HSR Layout",
              "areaName": "HSR Layout",
              "costForTwo": "₹650 for two",
              "cuisines": [
                "Biryani",
                "Barbecue",
                "South Indian",
                "Chinese",
                "North Indian"
              ],
              "avgRating": 4.4,
              "parentId": "332",
              "avgRatingString": "4.4",
              "totalRatingsString": "8.7K+",
              "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 4.1,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 01:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "6.8K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-hsr-layout-rest139558",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "10576",
              "name": "Pizza Hut",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/37221546-c3e3-46b7-95f7-dbbe3accbf71_10576.jpg",
              "locality": "6th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Pizzas"
              ],
              "avgRating": 4.3,
              "parentId": "721",
              "avgRatingString": "4.3",
              "totalRatingsString": "21K+",
              "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 04:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.6",
                  "ratingCount": "3.5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "5934",
              "name": "Burger King",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/6c37bd85-e460-4f35-9a27-ea97d88f4e3a_5934.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Burgers",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "166",
              "avgRatingString": "4.3",
              "totalRatingsString": "101K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 06:55:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "4.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "65797",
              "name": "Leon's - Burgers & Wings (Leon Grill)",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
              "locality": "Koramangala",
              "areaName": "Koramangala",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
              ],
              "avgRating": 4.5,
              "parentId": "371281",
              "avgRatingString": "4.5",
              "totalRatingsString": "56K+",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹69"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "4.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "78511",
              "name": "NIC Ice Creams",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/8bdab243-cdea-48b6-b01e-5b2229208339_78511.JPG",
              "locality": "8th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹120 for two",
              "cuisines": [
                "Ice Cream",
                "Desserts"
              ],
              "avgRating": 4.8,
              "veg": true,
              "parentId": "6249",
              "avgRatingString": "4.8",
              "totalRatingsString": "9.4K+",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-23 23:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "Ratnesh_Badges/test2.png",
                    "shortDescription": "Perfect ice cream delivery",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "Ratnesh_Badges/test2.png",
                          "shortDescription": "Perfect ice cream delivery"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-8th-block-koramangala-rest78511",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "156119",
              "name": "The Good Bowl",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/533c2673-3751-4ab5-b938-61345e683c49_156119.jpg",
              "locality": "Jakkasandra",
              "areaName": "Hsr Layout 5th Sector",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.4,
              "parentId": "7918",
              "avgRatingString": "4.4",
              "totalRatingsString": "2.2K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-23 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {

                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-jakkasandra-hsr-layout-5th-sector-rest156119",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "23678",
              "name": "McDonald's",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/9cf0f783-d73f-4cb8-993e-8031bf95f039_23678.jpg",
              "locality": "5th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
              ],
              "avgRating": 4.4,
              "parentId": "630",
              "avgRatingString": "4.4",
              "totalRatingsString": "64K+",
              "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 04:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "437721",
              "name": "Kwality Walls Ice Cream and More",
              "cloudinaryImageId": "zeebapgpk2nhhxpvnlen",
              "locality": "Sree Renuka Yellama temple road",
              "areaName": "Koramangala",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Ice Cream"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "582",
              "avgRatingString": "4.6",
              "totalRatingsString": "303",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 1.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "1.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 04:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "pureveg",
                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-sree-renuka-yellama-temple-road-koramangala-rest437721",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "375041",
              "name": "Andhra Gunpowder",
              "cloudinaryImageId": "byilgyrcfz690ryoasww",
              "locality": "6th Block",
              "areaName": "Koramangala",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Andhra",
                "Biryani",
                "South Indian"
              ],
              "avgRating": 4.5,
              "parentId": "10496",
              "avgRatingString": "4.5",
              "totalRatingsString": "5.8K+",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-24 01:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-6th-block-koramangala-rest375041",
              "type": "WEBLINK"
            }
          },
          {
            "info": {
              "id": "48207",
              "name": "Kanti Sweets",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/d6d1cd78-187e-4901-b140-3161b64f4121_48207.jpg",
              "locality": "3rd Block",
              "areaName": "Koramangala",
              "costForTwo": "₹150 for two",
              "cuisines": [
                "Sweets"
              ],
              "avgRating": 4.6,
              "veg": true,
              "parentId": "4700",
              "avgRatingString": "4.6",
              "totalRatingsString": "7.0K+",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-04-23 23:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Rxawards/_CATEGORY-Mithai.png",
                    "description": "Delivery!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "Delivery!",
                          "imageId": "Rxawards/_CATEGORY-Mithai.png"
                        }
                      }
                    ]
                  },
                  "textBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹29"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-3c1b9645-3a54-4c75-b6b9-c26f782f9227"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-3rd-block-koramangala-rest48207",
              "type": "WEBLINK"
            }
          }
    
]


const RestaurantCard = (props)=>{
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;

    return (
        <div className = "res-card" style={styleCard}>
            <img key = {resData.key}className="res-logo" alt = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h2>{name} </h2>
            <h4>{cuisines.join(", ")} </h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}



const Body = ()=>{
    return (
        <div className = "body" key ="0">
            <div className= "search" key="1">Search</div>
            <div className ="res-container" key="2">{
                    resList.map((restaurant)=> (<RestaurantCard key = {restaurant.info.id} resData={restaurant}/>)) 
                }

                 
                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[9]}/> */}
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className = "app">
        <Header/>
        <Body/>
        </div>
    )
} 

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>)

