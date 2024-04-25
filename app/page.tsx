'use client'
import React, { useCallback } from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { Inter } from "next/font/google";
import FeedCard from "./components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const inter = Inter({subsets: ['latin']});

interface TwitterSidebarButton{
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: < BsBookmark/>,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];

export default function Home() {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {
    console.log(cred);
  }, []);

  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen p-2">
        <div className="col-span-3 flex flex-col justify-start p-1">
          <BsTwitter 
            className="text-4xl text-blue-400 hover:text-blue-500 cursor-pointer m-3" 
            />
          
          <div>
            {
             sidebarMenuItems.map((item) => (
              <div key={item.title}
               className="flex items-center font-semibold text-xl space-x-2 p-2 hover:bg-gray-800 rounded-md cursor-pointer">
                <div className="px-2">{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <div>
            <button
              className="bg-blue-500 text-white font-semibold rounded-full p-2 w-10/12 m-2 hover:bg-blue-600"
              >
              Tweet</button>
          </div>
        </div>
        <div className="col-span-6 h-screen  no-scrollbar overflow-y-auto  border-r-[0.1px] border-l-[0.1px] border-gray-400">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </div>
        <div className="col-span-3">
          <div
            className="flex justify-between items-center p-2 border-b-[0.1px] border-gray-400"
            >
            <GoogleLogin 
              onSuccess={(cred) => console.log(cred)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
