import React from 'react'
import foodApi from '../NetfApi';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function FoodCaros() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
    <Carousel responsive={responsive}>
    {
        foodApi.map((element,index) => {
            return(
                <div className="foodCard" key={index}>
            <h5>{element.headOne}</h5>
            <h1>{element.headTwo}</h1>
            <p>{element.para}</p>
            <img src={element.img} alt="food" />
            <button>Order Now</button>
        </div>
            );
        })
    }
    </Carousel>
    </>
  )
}

export default FoodCaros
