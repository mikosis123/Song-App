import React from "react";
import { useState } from "react";
import SideMenu from "./Sidemenu";
import { Dashboardsvg } from "./Icons/Dashboardsvg";
import { Platformssvg } from "./Icons//Platformssvg";
import { Employeessvg } from "./Icons//Employeessvg";
import { Referalssvg } from "./Icons//Referalssvg";
import { Logoutsvg } from "./Icons//Logoutsvg";
import { Profilesvg } from "./Icons/Profilesvg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const naviate = useNavigate();
  const handleMenuClick = (menuLink: any) => {
    setActiveMenu(menuLink);
    naviate(menuLink);
  };
  return (
    <div>
      <div className="bg-[#d6d3d1] my-auto  w-[346px] h-full  rounded-md flex align-center justify-center drop-shadow-2xl">
        <div className="flex flex-col align-center justify-center">
          <div>
            <SideMenu
              link={"/Songs"}
              Text="songs"
              PageComponent={
                <Dashboardsvg isActive={activeMenu === "/Songs"} />
              }
              OnClick={() => handleMenuClick("/Songs")}
            />
          </div>
          <div>
            <SideMenu
              link={"/Artists"}
              Text="Artists"
              PageComponent={
                <Platformssvg isActive={activeMenu === "/Artists"} />
              }
              OnClick={() => handleMenuClick("/Artists")}
            />
          </div>

          <SideMenu
            link={"/Albums"}
            Text="Albums"
            PageComponent={<Profilesvg isActive={activeMenu === "/Albums"} />}
            OnClick={() => handleMenuClick("/Albums")}
          />
          <SideMenu
            link={"/Geners"}
            Text="Geners"
            PageComponent={<Referalssvg isActive={activeMenu === "/Geners"} />}
            OnClick={() => handleMenuClick("/Geners")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
