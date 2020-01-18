/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import UsersList from "../components/users-list";

const P_Index = () => {
  const [users] = useState([
    {
      id: "u1",
      name: "Shikhar Dhawan",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263700.20.jpg",
      places: 1,
    },
    {
      id: "u2",
      name: "Rohit Sharma",
      image: "http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg",
      places: 2,
    },
    {
      id: "u3",
      name: "Virat Kohli",
      image: "http://p.imgci.com/db/PICTURES/CMS/289000/289002.1.jpg",
      places: 3,
    },
    {
      id: "u4",
      name: "KL Rahul",
      image: "http://p.imgci.com/db/PICTURES/CMS/289000/289001.1.jpg",
      places: 4,
    },
    {
      id: "u5",
      name: "Rishabh Pant",
      image: "http://p.imgci.com/db/PICTURES/CMS/233200/233209.5.jpg",
      places: 5,
    },
  ]);

  return <UsersList users={users} />;
};

export default P_Index;
