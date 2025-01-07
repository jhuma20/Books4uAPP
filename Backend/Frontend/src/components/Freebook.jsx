import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import axios from 'axios';
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data)=> data.category === 'Free');
        console.log(data);
        setBook(data);
      }catch(error){
        console.log(error);
      }
    };
    getBook();
  },[]);
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-4  mb-2 ">
          <h1 className="font-semibold text-2xl pb-2 font-serif">Free Offers</h1>
          <h3 className="font-serif font-semibold text-lg ">Read for Free, Anytime!</h3>
          <p className="mt-2 font-serif text-md">
            Explore our Free Offers section and dive into a world of stories
            across genres—adventure, romance, mystery, and more. Discover new
            titles, read without limits, and enjoy captivating tales, all for
            free!
          </p>
        </div>
        <div>
        <Slider {...settings}>
        {book.map((item)=>(
			<Cards item={item} key={item.id}/>
		))}
        </Slider>
		</div>
      </div>
    </>
  );
}

export default Freebook;
