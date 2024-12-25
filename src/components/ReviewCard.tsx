import React from "react";
import myImage2 from '../assets/Ellipse 727.png'

// Define the type for the review props
type ReviewCardProps = {
  name?: string;
  consultationFor?: string;
  date?: string;
  review?: string;
  rating?: number;
  profileImage?: string;
};

const ReviewCard: React.FC<ReviewCardProps> = (
    {
  name = "Alicent Hightower" ,
  consultationFor = "Skin care",
  date = "20 January 2023",
  review = "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
  rating = 5,
  profileImage = myImage2 // Replace with actual image URL

},




) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white max-w-md mx-auto">
      <div className="flex items-center">
        <img
          src={profileImage}
          alt={name}
          className="w-12 h-12 rounded-full border mr-4"
        />
        <div className=" flex flex-rows justify-between ">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">Consulted for {consultationFor}</p>

        </div>
        <p className="text-xs text-gray-400 mt-2 ml-8">{date}</p>
        
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          {[...Array(rating)].map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
          {[...Array(5 - rating)].map((_, index) => (
            <span key={index} className="text-gray-300">★</span>
          ))}
        </div>
        <p className="text-gray-600 text-sm">{review}</p>
        
      </div>
    </div>
  );
};

export default ReviewCard;
