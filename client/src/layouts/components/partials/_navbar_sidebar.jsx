import { NavbarSidebarButton } from "./_navbar_button";
import { LogoSidebar } from "./_logo";

function NavbarSidebar() {
  return (
    <>
      {/*  Brand */}
      <LogoSidebar />
      <NavbarSidebarButton />
    </>
  );
}

export default NavbarSidebar;
