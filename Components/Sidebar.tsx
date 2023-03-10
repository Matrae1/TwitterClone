import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { IconButton } from "@mui/material";

function Sidebar() {
  return ( 
  <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
    <IconButton>
    <TwitterIcon className="m-3 h-10 w-10 text-cyan-500" />
    </IconButton>


    <SidebarRow Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={HashtagIcon} title="Explore" />
    <SidebarRow Icon={BellIcon} title="Notifications" />
    <SidebarRow Icon={MailIcon} title="Messages" />
    <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
    <SidebarRow Icon={CollectionIcon} title="Lists" />
    <SidebarRow Icon={UserIcon} title="Sign In" />

    <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
  </div>
  )
}

export default Sidebar;
