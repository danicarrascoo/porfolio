import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const ReviewSlider = () => {
    return (
    <Carousel
        responsive={responsive} 
        additionalTransfrom={0} 
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        itemClass="item"
    >
        <ClientReviewCard 
        image="/image/user1.jpg" 
        user="Goku" 
        role="Web developer" // Corregido "devolper" a "developer"
        />
        <ClientReviewCard 
        image="/image/user2.jpg" 
        user="Hisoka" 
        role="MERN developer" // Corregido "devolper" a "developer"
        />
        <ClientReviewCard 
        image="/image/user3.jpg" 
        user="Mikasa" 
        role="React developer" // Corregido "devolper" a "developer"
        />
        <ClientReviewCard 
        image="/image/user4.jpg" 
        user="Itschi Uchiha" 
        role="Web developer" // Corregido "devolper" a "developer"
        />
    </Carousel>
    );
};

export default ReviewSlider;
