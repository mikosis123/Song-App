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
      <div className="bg-white my-auto ml-10 w-[346px] h-[100vh] rounded-md flex align-center justify-center drop-shadow-2xl">
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
                <Platformssvg isActive={activeMenu === "/platforms"} />
              }
              OnClick={() => handleMenuClick("/platforms")}
            />
          </div>

          <SideMenu
            link={"/Genres"}
            Text="Albums"
            PageComponent={<Profilesvg isActive={activeMenu === "/profile"} />}
            OnClick={() => handleMenuClick("/profile")}
          />
          <SideMenu
            link={"/referal-link"}
            Text="Referal-link"
            PageComponent={
              <Referalssvg isActive={activeMenu === "/referal-link"} />
            }
            OnClick={() => handleMenuClick("/referal-link")}
          />
          <SideMenu
            link={"/logout"}
            Text="Logout"
            PageComponent={<Logoutsvg />}
            OnClick={() => handleMenuClick("/logout")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
