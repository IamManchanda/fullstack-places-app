/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState } from "react";
import Shared_Card from "../../shared/card";
import Shared_Modal from "../../shared/modal";

const PlacesList_PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creator,
  location,
}) => {
  const [showMap, setShowMap] = useState(false);
  const handleOpenMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);
  return (
    <Fragment>
      <Shared_Modal
        show={showMap}
        handleCancel={handleCloseMap}
        header={address}
        footer={<button onClick={handleCloseMap}>Close</button>}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Shared_Modal>
      <li className="place-item">
        <Shared_Card className="place-item__content">
          <div className="place-item__image">
            <img src={image} alt={title} title={title} />
          </div>
          <div className="place-item__info">
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className="place-item__actions">
            <button onClick={handleOpenMap}>View on Map</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </Shared_Card>
      </li>
    </Fragment>
  );
};

export default PlacesList_PlaceItem;
