import cardImg from "../../../assets/service.png";

export default function OurServices() {
  const services = [
    {
      title: "Express & Standard Delivery",
      img: cardImg,
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours.",
    },
    {
      title: "Nationwide Delivery",
      img: cardImg,
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      img: cardImg,
      desc: "Customized service with inventory management support, order processing, packaging, and after-sales support.",
    },
    {
      title: "Cash on Home Delivery",
      img: cardImg,
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      img: cardImg,
      desc: "Customized corporate services including warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      img: cardImg,
      desc: "Reverse logistics allows customers to return or exchange products with online merchants.",
    },
  ];

  return (
    <section className="w-full py-16 bg-secondary flex justify-center rounded-2xl">
      <div className="w-full max-w-7xl rounded-3xl p-10 sm:p-16">

        <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
        <p className="text-center text-white/80 mt-2 mb-12 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl shadow bg-white transition-all
                hover:bg-primary
              "
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img src={item.img} alt={item.title} className="w-16 h-16" />
              </div>

              <h3 className="text-lg font-semibold text-center mb-2 text-black">
                {item.title}
              </h3>

              <p className="text-sm text-center text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
