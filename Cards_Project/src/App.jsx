import React from "react";
import UserCard from "./components/UserCard";
import Data from "./components/user.json";

const App = () => {
  return (
    <div className="grid grid-cols-3 gap-8 max-[1200px]:grid-cols-3  max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 p-2 ">
      {Data.map((item, index) => {
        return (
          <UserCard
            Name={item.Name}
            key={index}
            role={item.role}
            Image={item.Image}
          />
        );
      })}
    </div>
  );
};

export default App;
