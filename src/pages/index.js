/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import C_UsersList from "../components/users-list";
import uuidv4 from "uuid/v4";

const P_Index = () => {
  const [users] = useState([
    {
      id: uuidv4(),
      name: "Shikhar Dhawan",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263700.20.jpg",
      places: 1,
    },
    {
      id: uuidv4(),
      name: "Rohit Sharma",
      image: "http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg",
      places: 2,
    },
    {
      id: uuidv4(),
      name: "Virat Kohli",
      image: "http://p.imgci.com/db/PICTURES/CMS/289000/289002.1.jpg",
      places: 3,
    },
    {
      id: uuidv4(),
      name: "KL Rahul",
      image: "http://p.imgci.com/db/PICTURES/CMS/289000/289001.1.jpg",
      places: 4,
    },
    {
      id: uuidv4(),
      name: "Rishabh Pant",
      image: "http://p.imgci.com/db/PICTURES/CMS/233200/233209.5.jpg",
      places: 5,
    },
    {
      id: uuidv4(),
      name: "Ravindra Jadeja",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263701.21.jpg",
      places: 6,
    },
    {
      id: uuidv4(),
      name: "Hardik Pandya",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263702.1.jpg",
      places: 7,
    },
    {
      id: uuidv4(),
      name: "Kuldeep Yadav",
      image: "http://p.imgci.com/db/PICTURES/CMS/179400/179447.1.jpg",
      places: 8,
    },
    {
      id: uuidv4(),
      name: "Md. Shami",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263708.1.jpg",
      places: 9,
    },
    {
      id: uuidv4(),
      name: "Navdeep Saini",
      image:
        "https://www.cricbuzz.com/a/img/v1/152x152/i1/c178690/navdeep-saini.jpg",
      places: 10,
    },
    {
      id: uuidv4(),
      name: "Jasprit Bumrah",
      image: "http://p.imgci.com/db/PICTURES/CMS/263700/263704.1.jpg",
      places: 11,
    },
  ]);

  return <C_UsersList users={users} />;
};

export default P_Index;
