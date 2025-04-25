import React, { useState } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const UserInfo = () => {
  const iconStyle = "text-white text-2xl cursor-pointer";
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setMenuOpen(false);
    }, 300); 
    setTimeoutId(id);
  };

  return (
    <div className="flex items-center gap-4">
      <CiSearch className={iconStyle} />
      <p>Children</p>
      <CiBellOn className={iconStyle} />


      <div
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-4">
          <img
            src="/netflix-profile-picture.jpg"
            className="w-10 rounded-sm cursor-pointer"
            alt=""
          />
          <IoMdArrowDropdown className={iconStyle} />
        </div>

        {menuOpen && (
          <button
            className="
              absolute
              top-full
              -right-6
              mt-1
              bg-zinc-800
              p-2
              rounded-sm
              hover:text-red-600
              whitespace-nowrap
              text-white
            "
            onClick={() => console.log("Sign out clicked")}
          >
            Sign out of Netflix
          </button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;