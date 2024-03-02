import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

function Card({ data }) {
  return (
    <div className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-6 py-2">
          <h5 className="text-sm font-semibold">{data.filesize}</h5>
          <span className="w-5 h-5 ">
            {data.close ? (
              <IoIosCloseCircle size="1.25em" />
            ) : (
              <MdDownloadForOffline size="1.25em" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className="tag h-10 w-full px-2 py-1 bg-sky-900 flex items-center justify-center">
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
