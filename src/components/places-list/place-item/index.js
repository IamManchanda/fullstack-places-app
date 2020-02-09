/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState } from "react";
import Shared_Card from "../../shared/card";
import Shared_Button from "../../shared/button";
import Shared_Modal from "../../shared/modal";
import Shared_Map from "../../shared/map";

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
  const [showConfirm, setShowConfirm] = useState(false);
  const handleOpenMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);
  const handleDeleteWarning = () => setShowConfirm(true);
  const handleDeleteCancel = () => setShowConfirm(false);
  const handleDeleteConfirmation = () => {
    console.log("Deleting");
    setShowConfirm(false);
  };
  return (
    <Fragment>
      <Shared_Modal
        show={showMap}
        handleCancel={handleCloseMap}
        header={address}
        footer={
          <Shared_Button handleClick={handleCloseMap}>Close</Shared_Button>
        }
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
      >
        <div className="map-container">
          <Shared_Map center={location} zoom={16} />
        </div>
      </Shared_Modal>
      <Shared_Modal
        show={showConfirm}
        handleCancel={handleDeleteCancel}
        header="Are you Sure?"
        footerClass="place-item__modal-actions"
        footer={
          <Fragment>
            <Shared_Button inverse handleClick={handleDeleteCancel}>
              Cancel
            </Shared_Button>
            <Shared_Button danger handleClick={handleDeleteConfirmation}>
              Delete
            </Shared_Button>
          </Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
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
            <Shared_Button handleClick={handleOpenMap} inverse>
              View on Map
            </Shared_Button>
            <Shared_Button to={`/places/${id}/edit`}>Edit</Shared_Button>
            <Shared_Button danger handleClick={handleDeleteWarning}>
              Delete
            </Shared_Button>
          </div>
        </Shared_Card>
      </li>
    </Fragment>
  );
};

export default PlacesList_PlaceItem;
