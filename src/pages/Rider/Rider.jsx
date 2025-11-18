import React from "react";
import riderImg from "../../assets/agent-pending.png"; 
import { useForm } from "react-hook-form";

const Rider = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Rider Data:", data);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      {/* Main Container Box */}
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10">

        {/* Heading */}
        <div className="text-center md:text-left border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Be a Rider</h1>
          <p className="text-gray-600 max-w-2xl mt-2">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-50 border border-gray-200 shadow-inner rounded-lg p-6 md:p-8"
          >
            {/* Divider Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
              <span className="flex-1 border-t"></span>
              Tell us about yourself
              <span className="flex-1 border-t"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Your age</label>
                <input
                  type="number"
                  {...register("age")}
                  placeholder="Your age"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Your Region</label>
                <select {...register("region")} className="select select-bordered w-full mt-1">
                  <option value="">Select your region</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chattogram">Chattogram</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">NID No</label>
                <input
                  type="text"
                  {...register("nid")}
                  placeholder="NID"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Contact</label>
                <input
                  type="text"
                  {...register("contact")}
                  placeholder="Contact"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Which ware-house you want to work?
                </label>
                <select
                  {...register("warehouse")}
                  className="select select-bordered w-full mt-1"
                >
                  <option value="">Select ware-house</option>
                  <option value="Dhaka Hub">Dhaka Hub</option>
                  <option value="CTG Hub">CTG Hub</option>
                  <option value="Sylhet Hub">Sylhet Hub</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn bg-lime-500 hover:bg-lime-600 text-white w-full mt-6"
            >
              Submit
            </button>
          </form>

          {/* Rider Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={riderImg}
              alt="Rider"
              className="max-w-xs md:max-w-sm lg:max-w-md drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;
