import React, { useEffect } from "react";
import { uselayoutConfig } from "../../stores/layoutStore";
import { NavbarToggleSidebarMenuOn } from "./partials/_navbar_button";
import { TransitionSidebarMenu } from "./partials/_transtition_layout";

function Sidebar() {
  const isSidebarOpen = uselayoutConfig((state) => state.isSidebarOpen);
  const setSidebarOpen = uselayoutConfig((state) => state.setSidebarOpen);

  useEffect(() => {
    function handleEscape(event) {
      if (!isSidebarOpen) return;

      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isSidebarOpen, setSidebarOpen]);

  const windowsScreenSize = () => {
    if (window.innerWidth <= 1024) {
      setSidebarOpen(false);
    } else if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowsScreenSize);
    return () => window.removeEventListener("resize", windowsScreenSize);
  });

  return (
    <React.Fragment>
      <TransitionSidebarMenu />
      {/* Sidebars button */}
      <NavbarToggleSidebarMenuOn />
    </React.Fragment>
  );
}

export default Sidebar;
