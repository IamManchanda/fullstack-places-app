import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../../../components/places-list";

const P_Users_UserId_Places = () => {
  const [places] = useState([
    {
      id: "p1",
      image:
        "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
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
      id: "p2",
      image:
        "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
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

  const { userId } = useParams();
  const placesByUserFilter = places.filter(place => place.creator === userId);
  return <PlacesList places={placesByUserFilter} />;
};

export default P_Users_UserId_Places;
