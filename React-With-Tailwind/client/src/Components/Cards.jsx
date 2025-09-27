import { useState } from "react";

function Cards({ CardData, onDelete , onUpdate }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="h-[180px] p-2">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
        <div className="p-4 flex flex-col h-full justify-between relative w-[350px]">

          {/* Menu Icon with hover dropdown */}
          <div className="absolute top-2 right-3">
            <img
              src="/menu.png"
              alt="menu"
              className="h-6 w-6 cursor-pointer rounded-full  bg-gray-600 hover:bg-gray-800"
              onMouseEnter={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <div
                className="absolute right-0 mt-2 w-28 bg-white    shadow-lg z-10"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button
                  onClick={() => onDelete(CardData?.id)}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 bg-gray-100 hover:bg-gray-200"
                >
                  Delete
                </button>
                <button
                  onClick={() => onUpdate(CardData)}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 bg-gray-100 hover:bg-gray-200"
                >
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          <blockquote className="text-gray-700 dark:text-slate-300 text-sm mb-4 max-w-[200px]">
            <p className="line-clamp-3">
              {CardData?.description || "No description available."}
            </p>
          </blockquote>

          {/* Footer: Avatar + Info */}
          <figcaption className="flex items-center space-x-4 mt-auto">
            <div className="object-cover rounded-full">
              <img
                src={`http://localhost:3000/uploads/${CardData?.img}`}
                alt="User profile"
                className="w-14 h-14 rounded-full"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {CardData?.name || "Unknown Name"}
              </span>
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {CardData?.role || "Unknown Role"}
              </span>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default Cards;
