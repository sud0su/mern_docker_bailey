import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";

export function NavbarMiniMenu() {
  const miniRef = useRef();

  const [isMiniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // Jika menu open dan klik diluar menu
      // maka menu akan diclose
      if (
        isMiniOpen &&
        miniRef.current &&
        !miniRef.current.contains(e.target)
      ) {
        setMiniOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMiniOpen]);

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      ref={miniRef}
    >
      <button
        type="button"
        aria-haspopup="true"
        className="transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
        onClick={() => setMiniOpen(!isMiniOpen)}
      >
        <span className="sr-only">User menu</span>
        <img
          className="w-10 h-10 rounded-full"
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png"
          alt="Ahmed Kamel"
        />
      </button>

      <Transition
        show={isMiniOpen}
        enter="transition-all transform ease-out"
        enterFrom="translate-y-1/2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all transform ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-1/2 opacity-0"
        tabIndex={-1}
        className="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
        aria-orientation="vertical"
        aria-label="User menu"
      >
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Your Profile
        </a>
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Settings
        </a>
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Logout
        </a>
      </Transition>
    </div>
  );
}

export function NavbarMiniMenuMobile() {
  const miniRef = useRef();
  const [isMiniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // Jika menu open dan klik diluar menu
      // maka menu akan diclose
      if (
        isMiniOpen &&
        miniRef.current &&
        !miniRef.current.contains(e.target)
      ) {
        setMiniOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMiniOpen]);

  return (
    <div className="relative ml-auto" ref={miniRef}>
      {/* @click="open = !open" */}
      {/* :aria-expanded="open ? 'true' : 'false'" */}
      <button
        type="button"
        aria-haspopup="true"
        onClick={() => setMiniOpen(!isMiniOpen)}
        className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
      >
        <span className="sr-only">User menu</span>
        <img
          className="w-10 h-10 rounded-full"
          src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png"
          alt="Ahmed Kamel"
        />
      </button>

      {/*  User dropdown menu */}
      <Transition
        show={isMiniOpen}
        enter="transition-all transform ease-out"
        enterFrom="translate-y-1/2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all transform ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-1/2 opacity-0"
        tabIndex={-1}
        className="absolute right-0 w-48 py-1 origin-top-right bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5 dark:bg-dark"
        role="menu"
        aria-orientation="vertical"
        aria-label="User menu"
      >
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Your Profile
        </a>
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Settings
        </a>
        <a
          href="/"
          role="menuitem"
          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
        >
          Logout
        </a>
      </Transition>
    </div>
  );
}

export function NavbarSidebarMiniMenu() {
  const miniRef = useRef();

  const [isMiniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // Jika menu open dan klik diluar menu
      // maka menu akan diclose
      if (
        isMiniOpen &&
        miniRef.current &&
        !miniRef.current.contains(e.target)
      ) {
        setMiniOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMiniOpen]);

  return (
    <div className="relative flex items-center justify-center flex-shrink-0">
      {/*  User avatar button */}
      <div className="" ref={miniRef}>
        <button
          type="button"
          className="block transition-opacity duration-200 rounded-full dark:opacity-75 dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100"
          onClick={() => setMiniOpen(!isMiniOpen)}
        >
          <span className="sr-only">User menu</span>
          <img
            className="w-10 h-10 rounded-full"
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-128.png"
            alt="Ahmed Kamel"
          />
        </button>

        <Transition
          show={isMiniOpen}
          enter="transition-all transform ease-out"
          enterFrom="-translate-y-1/2 opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition-all transform ease-in"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-1/2 opacity-0"
          className="absolute w-56 py-1 mb-4 bg-white rounded-md shadow-lg min-w-max left-5 bottom-full ring-1 ring-black ring-opacity-5 dark:bg-dark focus:outline-none"
          tabIndex={-1}
        >
          <a
            href="/"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
          >
            Your Profile
          </a>
          <a
            href="/"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
          >
            Settings
          </a>
          <a
            href="/"
            role="menuitem"
            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-light dark:hover:bg-primary"
          >
            Logout
          </a>
        </Transition>
      </div>
    </div>
  );
}
