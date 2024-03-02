import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download",
        
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download",
        tagColor: "green",
      },
    },
    
    
  ];
  useState();
  return (
    <div className="p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-7 flex-wrap">
      {data.map((item,index)=>(
        <Card data={item}/>
      ))}
    </div>
  );
}

export default Foreground;
