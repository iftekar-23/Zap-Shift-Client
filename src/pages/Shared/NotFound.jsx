import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="bg-white w-full max-w-2xl p-12 rounded-3xl shadow-lg text-center">

        {/* Image */}
        <img
          src="https://i.ibb.co.com/99sHWx8T/images-11.jpg"
          alt="404"
          className="w-72 mx-auto mb-8 drop-shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for does not exist or has been moved.
          Please go back to the homepage or contact support if the issue continues.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
