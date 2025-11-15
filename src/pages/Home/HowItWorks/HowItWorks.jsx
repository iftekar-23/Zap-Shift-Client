import { MapPin, Truck, PackageSearch } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Booking Pick & Drop",
      icon: <MapPin className="w-10 h-10 text-teal-600" />,
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      icon: <Truck className="w-10 h-10 text-teal-600" />,
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      icon: <PackageSearch className="w-10 h-10 text-teal-600" />,
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      icon: <MapPin className="w-10 h-10 text-teal-600" />,
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="w-full py-16 flex justify-center">
      {/* FULL ROUNDED SECTION */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl p-10 sm:p-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
