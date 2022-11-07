import { Logo } from "./partials/_logo";
import {
  NavbarToggleSidebarMenuOff,
  NavbarTopButton,
  NavbarTopButtonMobile,
} from "./partials/_navbar_button";

function Navbar() {
  return (
    <header className="relative bg-white dark:bg-darker">
      <div className="flex items-center justify-between p-2 border-b dark:border-primary-darker">
        <NavbarToggleSidebarMenuOff />

        {/*  Brand */}
        <Logo />

        {/*  Mobile sub menu button */}
        <NavbarTopButtonMobile />

        {/*  Desktop Right buttons */}
        <NavbarTopButton />
      </div>
    </header>
  );
}

export default Navbar;
