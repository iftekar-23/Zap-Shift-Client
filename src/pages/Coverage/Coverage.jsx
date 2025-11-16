import React from 'react';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch =(e)=>{
        e.preventDefault()
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 12);
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
                We are available in 64 districts
            </h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-8">
                <form onSubmit={handleSearch} className="w-full max-w-lg">
                    <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3 shadow-md bg-white">
                        <svg className="h-[1.2em] opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            className="grow outline-none text-gray-700"
                            name="location"
                            placeholder="Search district..."
                        />
                    </label>
                </form>
            </div>

            {/* Map */}
            <div className="border rounded-2xl overflow-hidden shadow-xl w-full h-[800px]">
                <MapContainer
                    center={position}
                    zoom={8}
                    scrollWheelZoom={false}
                    className="h-[800px]"
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        serviceCenters.map((center, index) => (
                            <Marker
                                key={index}
                                position={[center.latitude, center.longitude]}
                            >
                                <Popup>
                                    <strong>{center.district}</strong> <br /> 
                                    Service Area: {center.covered_area.join(', ')}.
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
