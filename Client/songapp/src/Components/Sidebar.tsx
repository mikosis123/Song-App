import React from "react";
import { useState } from "react";
import SideMenu from "./Sidemenu";
import { Dashboardsvg } from "./Icons/Dashboardsvg";
import { Platformssvg } from "./Icons//Platformssvg";
import { Employeessvg } from "./Icons//Employeessvg";
import { Referalssvg } from "./Icons//Referalssvg";
import { Logoutsvg } from "./Icons//Logoutsvg";
import { Profilesvg } from "./Icons/Profilesvg";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menuLink: any) => {
    setActiveMenu(menuLink);
  };
  return (
    <div>
      <div className="bg-white my-auto ml-10 w-[346px] h-[100vh] rounded-md flex align-center justify-center drop-shadow-2xl">
        <div className="flex flex-col align-center justify-center">
          <div>
            <SideMenu
              link={"/dashboard"}
              Text="songs"
              PageComponent={
                <Dashboardsvg isActive={activeMenu === "/dashboard"} />
              }
              OnClick={() => handleMenuClick("/dashboard")}
            />
          </div>
          <div>
            <SideMenu
              link={"/platforms"}
              Text="Artists"
              PageComponent={
                <Platformssvg isActive={activeMenu === "/platforms"} />
              }
              OnClick={() => handleMenuClick("/platforms")}
            />
          </div>

          <SideMenu
            link={"/profile"}
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
