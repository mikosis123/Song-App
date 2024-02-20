import React from "react";
type Props = {
  isActive: boolean;
};
export const Dashboardsvg = ({ isActive }: Props) => {
  return (
    <div className="h-7 w-7">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 11.125C1 10.504 1.504 10 2.125 10H4.375C4.996 10 5.5 10.504 5.5 11.125V17.875C5.5 18.496 4.996 19 4.375 19H2.125C1.82663 19 1.54048 18.8815 1.3295 18.6705C1.11853 18.4595 1 18.1734 1 17.875V11.125ZM7.75 6.625C7.75 6.004 8.254 5.5 8.875 5.5H11.125C11.746 5.5 12.25 6.004 12.25 6.625V17.875C12.25 18.496 11.746 19 11.125 19H8.875C8.57663 19 8.29048 18.8815 8.0795 18.6705C7.86853 18.4595 7.75 18.1734 7.75 17.875V6.625ZM14.5 2.125C14.5 1.504 15.004 1 15.625 1H17.875C18.496 1 19 1.504 19 2.125V17.875C19 18.496 18.496 19 17.875 19H15.625C15.3266 19 15.0405 18.8815 14.8295 18.6705C14.6185 18.4595 14.5 18.1734 14.5 17.875V2.125Z"
          stroke={`${isActive ? "white" : "black"}`}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
