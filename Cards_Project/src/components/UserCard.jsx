import React from "react";
import "remixicon/fonts/remixicon.css";
import Button from "../../../../components/Button";
const UserCard = (props) => {
  return (
    <>
      <div className="shadow-2xl h-140  rounded-2xl overflow-hidden">
        <div className="bg-blue-500 h-1/3 w-full relative ">
          <img
            src={props.Image}
            className="h-[110px] w-[110px] rounded-full left-[50%] -translate-x-[50%] top-[50%] absolute object-cover p-0.5 bg-white border border-blue-500"
            alt="Error Image "
          />
        </div>
        <div className=" flex flex-col justify-center items-center py-10">
          <h1 className="text-2xl  font-bold mb-2">{props.Name} </h1>
          <p>{props.role} </p>
        </div>
        <div className="flex justify-center items-center gap-3.5 ">
          <i className="ri-instagram-line  text-pink-700 text-4xl"></i>
          <i className="ri-whatsapp-line  text-green-500 text-4xl"></i>
          <i className="ri-facebook-line  text-blue-500 text-4xl"></i>
          <i className="ri-twitter-line  text-blue-700 text-4xl"></i>
        </div>
        <div className="flex gap-3.5 m-8  justify-between">
          <Button text="Message" />
          <Button text="Subscribe" />
        </div>
        <div className="flex gap-3 p-3 justify-center items-center">
          <i className="ri-heart-3-line m-0"></i>
          <span>60.4K</span>
          <Line />
          <i className="ri-chat-ai-3-line m-0"></i>
          <span>80.1K</span>
          <Line />
          <i className="ri-user-follow-fill m-0"></i>
          <span>50K</span>
        </div>
      </div>
    </>
  );
};

const Line = () => {
  return <div className="w-0.5 h-3.5 bg-black "></div>;
};

export default UserCard;
