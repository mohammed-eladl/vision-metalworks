// import { Hammer } from 'lucide-react';

import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="flex items-center space-x-4">
      {/* <Hammer className="h-8 w-8 text-blue-500" /> */}
      <Link to="/home">
        <img
          src="https://res.cloudinary.com/dl0ivqknv/image/upload/v1733854207/logo_skwfjp.svg"
          className="h-10 w-40"
        />
      </Link>{" "}
      {/* Use relative path for logo image */}
      {/* <span className="text-white text-xl font-bold">Vision Metal</span> */}
    </div>
  );
}
