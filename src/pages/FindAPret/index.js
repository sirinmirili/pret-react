import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl:
    "https://freepngimg.com/save/94717-angle-icons-sphere-pen-computer-location-marker/600x800",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const locations = [
  {
    id: 1,
    name: "Pret a Manger",
    address: "Broad Lane",
    city: "London, N15 4QT",
    lat: 51.5826,
    lon: -0.1046,
  },
  {
    id: 2,
    name: "Pret A Manger",
    address: "37 Shelton Street",
    city: "London, WC2H 9HN",
    status: "Closed now - Opens at 08:00",
    lat: 51.5138,
    lon: -0.1234,
  },
  {
    id: 3,
    name: "Pret A Manger",
    address: "14 Warren Street",
    city: "London, W1T 5LL",
    status: "Closed now - Opens at 06:00",
    lat: 51.5245,
    lon: -0.1389,
  },
  {
    id: 4,
    name: "Pret A Manger",
    address: "67 Tottenham Court Road",
    city: "London, W1T 2EY",
    status: "Closed now - Opens at 06:30",
    lat: 51.5175,
    lon: -0.1313,
  },
];

const FindAPret = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [showAll, setShowAll] = useState(false);
  
  const zoomLevel = selectedLocation ? 15 : 6;

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredLocations(locations);
      return;
    }
    
    const filtered = locations.filter(location => 
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredLocations(filtered);
    
    if (filtered.length > 0) {
      setSelectedLocation(filtered[0]);
    } else {
      setSelectedLocation(null);
    }
  };

  const handleShowAll = () => {
    setFilteredLocations(locations);
    setSearchTerm("");
    setShowAll(true);
    setSelectedLocation(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90%",
          maxWidth: "1200px",
          height: "90%",
          marginTop: "30px",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            width: "30%",
            padding: "20px",
            overflowY: "auto",
            borderRight: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              gap: "8px",
            }}
          >
            <input
              type="text"
              placeholder="Search locations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{
                flexGrow: 1,
                padding: "10px",
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "#900028",
                color: "white",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Search
            </button>
          </div>

          <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "10px" }}>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <div
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  style={{
                    padding: "15px 0",
                    borderBottom: "1px solid #f0f0f0",
                    cursor: "pointer",
                    backgroundColor:
                      selectedLocation?.id === location.id
                        ? "#f8f8f8"
                        : "transparent",
                  }}
                >
                  <h3
                    style={{
                      margin: "5px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color:
                        selectedLocation?.id === location.id
                          ? "#900028"
                          : "#333333",
                    }}
                  >
                    {location.name}
                  </h3>
                  <p
                    style={{
                      margin: " 5px ",
                      fontSize: "14px",
                      color: "#333333",
                    }}
                  >
                    {location.address}
                  </p>
                  <p
                    style={{
                      margin: " 5px ",
                      fontSize: "14px",
                      color: "#333333",
                    }}
                  >
                    {location.city}
                  </p>
                  {location.status && (
                    <p
                      style={{
                        margin: "5px ",
                        fontSize: "14px",
                        color: "#333333",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {location.status}
                      <span
                        style={{
                          display: "inline-block",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#900028",
                          marginLeft: "8px",
                        }}
                      ></span>
                    </p>
                  )}
                </div>
              ))
            ) : (
              <div style={{ padding: "15px 0", textAlign: "center" }}>
                No locations found
              </div>
            )}

            <div style={{ padding: "15px 0", textAlign: "center" }}>
              <button
                onClick={handleShowAll}
                style={{
                  background: "none",
                  border: "none",
                  color: "#696969",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Show all locations
              </button>
            </div>
          </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <MapContainer
            center={
              selectedLocation
                ? [selectedLocation.lat, selectedLocation.lon]
                : [51.505, -0.09]
            }
            zoom={zoomLevel}
            style={{ width: "100%", height: "100%" }}
            key={
              selectedLocation
                ? `${selectedLocation.lat}-${selectedLocation.lon}`
                : 'default-map-view'
            }
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {filteredLocations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lon]}
                icon={customIcon}
                eventHandlers={{
                  click: () => setSelectedLocation(location),
                }}
              >
                <Popup>
                  <div>
                    <strong>{location.name}</strong>
                    <br />
                    {location.address}
                    <br />
                    {location.city}
                    <br />
                    {location.status && (
                      <span style={{ color: "#ff0000" }}>
                        {location.status}
                      </span>
                    )}
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default FindAPret;