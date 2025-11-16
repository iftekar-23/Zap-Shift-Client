import React from "react";
import trackImg from "../assets/live-tracking.png";
import deliveryImg from "../assets/safe-delivery.png";

const features = [
  {
    img: trackImg,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    img: deliveryImg,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: deliveryImg,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-5 space-y-6">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start shadow-sm border border-gray-100"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 md:w-28 object-contain mx-auto md:mx-0"
          />

          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
