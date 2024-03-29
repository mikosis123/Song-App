// SideMenu.tsx

import React from "react";

type MenuChild = {
  Text: string;
  PageComponent: React.ReactElement<{ isActive: boolean }>;
  link: string;
  OnClick: () => void;
};

const SideMenu = ({ Text, PageComponent, link, OnClick }: MenuChild) => {
  return (
    <a
      href={link}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div
        onClick={() => {
          OnClick();
          PageComponent.props.isActive && OnClick();
        }}
        className={`${
          PageComponent.props.isActive ? "bg-[#279EFF] " : "bg-[#E9E9E9]"
        } cursor-pointer hoverEffect w-[240px] h-[80px]  mt-6 flex items-center justify-center rounded-[18px] space-x-3`}
      >
        {PageComponent}
        <span
          className={`${
            PageComponent.props.isActive ? "text-white " : ""
          } font-medium text-xl text-black xl:inline`}
        >
          {Text}
        </span>
      </div>
    </a>
  );
};

export default SideMenu;
