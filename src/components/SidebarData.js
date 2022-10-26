import React from "react";
import { FaHome, FaMailBulk, FaUser, FaUsers, FaImages } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/home",
  },
  {
    title: "Mailbox",
    icon: <FaMailBulk />,
    link: "/mail",
  },
  {
    title: "User",
    icon: <FaUser />,
    link: "/user",
  },
  {
    title: "Admin",
    icon: <FaUsers />,
    link: "/home",
  },
  {
    title: "Images",
    icon: <FaImages />,
    link: "/images",
  },
];
