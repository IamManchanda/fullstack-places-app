import React, { useState } from "react";
import PlacesList from "../../../components/places-list";

const P_Users_UserId_Places = () => {
  const [places] = useState([
    {
      id: "p1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world.",
      address: "20 W 34th St, New York, NY 10001, United States",
      creator: "u1",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
    },
    {
      id: "p1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world.",
      address: "20 W 34th St, New York, NY 10001, United States",
      creator: "u2",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
    },
  ]);

  return <PlacesList places={places} />;
};

export default P_Users_UserId_Places;
