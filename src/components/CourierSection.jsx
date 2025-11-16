import React from "react";
import rightImg from "../assets/location-merchant.png"; 

const CourierSection = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-[#013840] rounded-3xl text-white overflow-hidden relative">
      {/* Decorative Top Wave (Optional - remove if not needed) */}
      <div className="absolute top-0 left-0 w-full h-24 opacity-40 pointer-events-none bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h2>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-md">
            We offer the lowest delivery charge with the highest value along with
            100% safety of your product. Pattao courier delivers your parcel in
            every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 font-semibold rounded-full bg-primary text-gray-900 shadow-lg hover:opacity-90 transition-all duration-300">
              Become a Merchant
            </button>

            <button className="px-6 py-3 font-semibold rounded-full border border-primary text-primary hover:bg-primary hover:text-gray-900 transition-all duration-300">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={rightImg}
            alt="Courier Illustration"
            className="w-[260px] md:w-[340px] lg:w-[420px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default CourierSection;
