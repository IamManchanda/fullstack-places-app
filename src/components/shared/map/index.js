import React, { useRef, useEffect } from "react";

const Shared_Map = ({ className, children, center, zoom }) => {
  const mapRef = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
    });
    new window.google.maps.Marker({ position: center, map });
  }, [center, zoom]);
  return (
    <div ref={mapRef} className={`map ${className}`}>
      {children}
    </div>
  );
};

export default Shared_Map;
