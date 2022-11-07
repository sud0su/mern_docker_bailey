import { useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import { uselayoutConfig } from "../../../stores/layoutStore";
import NavbarSidebar from "./_navbar_sidebar";
import {
  NavbarSidebarMiniMenu,
  NavbarMiniMenuMobile,
} from "./_navbar_minimenu";
import SidebarMainMenu from "./_sidebar_mainmenu";
import CloseButtonTransition from "./_close_buttontransition";

export function TransitionMobileButton() {
  const topNav = useRef();

  const {
    setMobileMainMenuOpen,
    isMobileMainMenuOpen,
    setDarkToggle,
    darkMode,
    openNotificationsPanel,
    openSearchPanel,
    openSettingPanel,
  } = uselayoutConfig((state) => state);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // Jika menu open dan klik diluar menu
      // maka menu akan diclose
      if (
        isMobileMainMenuOpen &&
        topNav.current &&
        !topNav.current.contains(e.target)
      ) {
        setMobileMainMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMobileMainMenuOpen, setMobileMainMenuOpen]);

  return (
    <Transition
      show={isMobileMainMenuOpen}
      enter="transition duration-200 ease-in-out transform sm:duration-500"
      enterFrom="translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition duration-300 ease-in-out transform sm:duration-500"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-full opacity-0"
      tabIndex={-1}
      className="absolute flex items-center p-4 bg-white rounded-md shadow-lg dark:bg-darker top-16 inset-x-4 md:hidden"
      aria-label="Secondary"
      ref={topNav}
    >
      <div className="space-x-2">
        {/*  Toggle dark theme button */}
        <button
          onClick={setDarkToggle}
          aria-hidden="true"
          className="relative focus:outline-none"
        >
          <div className="w-12 h-6 transition rounded-full outline-none bg-primary-100 dark:bg-primary-lighter"></div>
          <div
            className={`absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-200 transform scale-110 rounded-full shadow-sm ${
              darkMode
                ? `translate-x-6 text-primary-100 bg-primary-darker`
                : `translate-x-0 -translate-y-px  bg-white text-primary-dark: ${!darkMode}`
            }`}
          >
            {!darkMode ? (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            )}
          </div>
        </button>

        {/*  Notification button */}
        <button
          onClick={openNotificationsPanel}
          className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
        >
          <span className="sr-only">Open notifications panel</span>
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/*  Search button */}
        <button
          onClick={openSearchPanel}
          className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
        >
          <span className="sr-only">Open search panel</span>
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/*  Settings button */}
        <button
          onClick={openSettingPanel}
          className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker"
        >
          <span className="sr-only">Open settings panel</span>
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <NavbarMiniMenuMobile />
    </Transition>
  );
}

export function TransitionSidebarMenu() {
  const { isSidebarOpen, setSidebarOpen } = uselayoutConfig((state) => state);

  return (
    <>
      {/* Sidebar & Backdrop*/}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-primary-darker lg:hidden"
          style={{ opacity: "0.5" }}
          aria-hidden="true"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <Transition
        show={isSidebarOpen}
        enter="transition-all transform duration-300 ease-in-out"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition-all transform duration-300 ease-in-out"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
        tabIndex={-1}
        className="fixed inset-y-0 z-10 flex flex-shrink-0 overflow-hidden bg-white border-r lg:static dark:border-primary-darker dark:bg-darker focus:outline-none"
      >
        <CloseButtonTransition />
        {/* Mini column */}
        <div className="flex flex-col flex-shrink-0 h-full px-2 py-4 border-r dark:border-primary-darker">
          <NavbarSidebar />
          {/* Mini column footer */}
          <NavbarSidebarMiniMenu />
        </div>
        {/* Main Menu */}
        <SidebarMainMenu />
      </Transition>
    </>
  );
}

export function TransitionNotification() {
  const { isNotificationsPanelOpen, openNotificationsPanel } = uselayoutConfig(
    (state) => state
  );

  useEffect(() => {
    function handleEscape(event) {
      if (!isNotificationsPanelOpen) return;

      if (event.key === "Escape") {
        openNotificationsPanel(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isNotificationsPanelOpen, openNotificationsPanel]);

  return (
    <>
      {isNotificationsPanelOpen && (
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 z-10 bg-primary-darker"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
          onClick={openNotificationsPanel}
          show={isNotificationsPanelOpen}
        />
      )}

      <Transition
        show={isNotificationsPanelOpen}
        enter="transition duration-300 ease-in-out transform sm:duration-500"
        enterFrom="-translate-x-full"
        enterTo="ranslate-x-0"
        leave="transition duration-300 ease-in-out transform sm:duration-500"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        tabIndex={-1}
        aria-labelledby="notificationPanelLabel"
        className="fixed inset-y-0 z-20 w-full max-w-xs bg-white dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
      >
        <div className="absolute right-0 p-2 transform translate-x-full">
          {/* <!-- Close button --> */}
          <button
            onClick={() => openNotificationsPanel()}
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* x-data="{ activeTabe: 'action' }" */}
        <div className="flex flex-col h-screen">
          {/* <!-- Panel header --> */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-between px-4 pt-4 border-b dark:border-primary-darker">
              <h2 id="notificationPanelLabel" className="pb-4 font-semibold">
                Notifications
              </h2>
              <div className="space-x-2">
                {/* @click.prevent="activeTabe = 'action'" */}
                <button className="px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none">
                  {/* :className="{'border-primary-dark dark:border-primary': activeTabe == 'action', 'border-transparent': activeTabe != 'action'}" */}
                  Action
                </button>
                {/* @click.prevent="activeTabe = 'user'" */}
                <button className="px-px pb-4 transition-all duration-200 transform translate-y-px border-b focus:outline-none">
                  {/* :className="{'border-primary-dark dark:border-primary': activeTabe == 'user', 'border-transparent': activeTabe != 'user'}" */}
                  User
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Panel content (tabs) --> */}
          <div className="flex-1 pt-4 overflow-y-hidden hover:overflow-y-auto">
            {/* <!-- Action tab --> */}
            {/* x-show.transition.in="activeTabe == 'action'" */}
            <div className="space-y-4">
              <a href="/" className="block">
                <div className="flex px-4 space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="z-10 inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light dark:bg-primary-darker">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      New project "KWD Dashboard" created
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Looks like there might be a new theme soon
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                      {" "}
                      9h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
              <a href="/" className="block">
                <div className="flex px-4 space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light dark:bg-primary-darker">
                      <svg
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      KWD Dashboard v0.0.2 was released
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Successful new version was released
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                      {" "}
                      2d ago{" "}
                    </span>
                  </div>
                </div>
              </a>
              <template x-for="i in 20" x-key="i">
                <a href="/" className="block">
                  <div className="flex px-4 space-x-4">
                    <div className="relative flex-shrink-0">
                      <span className="inline-block p-2 overflow-visible rounded-full bg-primary-50 text-primary-light dark:bg-primary-darker">
                        <svg
                          className="w-7 h-7"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </span>
                      <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                        New project "KWD Dashboard" created
                      </h5>
                      <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                        Looks like there might be a new theme soon
                      </p>
                      <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                        {" "}
                        9h ago{" "}
                      </span>
                    </div>
                  </div>
                </a>
              </template>
            </div>

            {/* <!-- User tab --> */}
            {/* x-show.transition.in="activeTabe == 'user'" */}
            {/* <div className="space-y-4">
              <a href="/" className="block">
                <div className="flex px-4 space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="relative z-10 inline-block overflow-visible rounded-ful">
                      <img
                        className="object-cover rounded-full w-9 h-9"
                        src="build/images/avatar.jpg"
                        alt="Ahmed kamel"
                      />
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      Ahmed Kamel
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Shared new project "K-WD Dashboard"
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                      {" "}
                      1d ago{" "}
                    </span>
                  </div>
                </div>
              </a>
              <a href="/" className="block">
                <div className="flex px-4 space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="relative z-10 inline-block overflow-visible rounded-ful">
                      <img
                        className="object-cover rounded-full w-9 h-9"
                        src="build/images/avatar-1.jpg"
                        alt="Ahmed kamel"
                      />
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      John
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Commit new changes to K-WD Dashboard project.
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                      {" "}
                      10h ago{" "}
                    </span>
                  </div>
                </div>
              </a>
              <a href="/" className="block">
                <div className="flex px-4 space-x-4">
                  <div className="relative flex-shrink-0">
                    <span className="relative z-10 inline-block overflow-visible rounded-ful">
                      <img
                        className="object-cover rounded-full w-9 h-9"
                        src="build/images/avatar.jpg"
                        alt="Ahmed kamel"
                      />
                    </span>
                    <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                      Ahmed Kamel
                    </h5>
                    <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                      Release new version "K-WD Dashboard"
                    </p>
                    <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                      {" "}
                      20d ago{" "}
                    </span>
                  </div>
                </div>
              </a>
              <template x-for="i in 10" x-key="i">
                <a href="/" className="block">
                  <div className="flex px-4 space-x-4">
                    <div className="relative flex-shrink-0">
                      <span className="relative z-10 inline-block overflow-visible rounded-ful">
                        <img
                          className="object-cover rounded-full w-9 h-9"
                          src="build/images/avatar.jpg"
                          alt="Ahmed kamel"
                        />
                      </span>
                      <div className="absolute h-24 p-px -mt-3 -ml-px bg-primary-50 left-1/2 dark:bg-primary-darker"></div>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h5 className="text-sm font-semibold text-gray-600 dark:text-light">
                        Ahmed Kamel
                      </h5>
                      <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                        Release new version "K-WD Dashboard"
                      </p>
                      <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                        {" "}
                        20d ago{" "}
                      </span>
                    </div>
                  </div>
                </a>
              </template>
            </div> */}
          </div>
        </div>
      </Transition>
    </>
  );
}

export function TransitionSearch() {
  const { isSearchPanelOpen, openSearchPanel } = uselayoutConfig(
    (state) => state
  );

  useEffect(() => {
    function handleEscape(event) {
      if (!isSearchPanelOpen) return;

      if (event.key === "Escape") {
        openSearchPanel(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isSearchPanelOpen, openSearchPanel]);

  return (
    <>
      {isSearchPanelOpen && (
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 z-10 bg-primary-darker"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
          onClick={openSearchPanel}
          show={isSearchPanelOpen}
        />
      )}

      <Transition
        show={isSearchPanelOpen}
        enter="transition duration-300 ease-in-out transform sm:duration-500"
        enterFrom="-translate-x-full"
        enterTo="ranslate-x-0"
        leave="transition duration-300 ease-in-out transform sm:duration-500"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        tabIndex={-1}
        aria-labelledby="notificationPanelLabel"
        className="fixed inset-y-0 z-20 w-full max-w-xs bg-white dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
      >
        <div className="absolute right-0 p-2 transform translate-x-full">
          {/* <!-- Close button --> */}
          <button
            onClick={() => openSearchPanel()}
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <h2 className="sr-only">Search panel</h2>
        {/* <!-- Panel content --> */}
        <div className="flex flex-col h-screen">
          {/* <!-- Panel header (Search input) --> */}
          <div className="relative flex-shrink-0 px-4 py-8 text-gray-400 border-b dark:border-primary-darker dark:focus-within:text-light focus-within:text-gray-700">
            <span className="absolute inset-y-0 inline-flex items-center px-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              x-ref="searchInput"
              type="text"
              className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
              placeholder="Search..."
            />
          </div>

          {/* <!-- Panel content (Search result) --> */}
          <div className="flex-1 px-4 pb-4 space-y-4 overflow-y-hidden h hover:overflow-y-auto">
            <h3 className="py-2 text-sm font-semibold text-gray-600 dark:text-light">
              History
            </h3>
            <a href="/" className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-lg"
                  src="build/images/cover.jpg"
                  alt="Post cover"
                />
              </div>
              <div className="flex-1 max-w-xs overflow-hidden">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-light">
                  Header
                </h4>
                <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                  Lorem ipsum dolor, sit amet consectetur.
                </p>
                <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                  {" "}
                  Post{" "}
                </span>
              </div>
            </a>
            <a href="/" className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-lg"
                  src="build/images/avatar.jpg"
                  alt="Ahmed Kamel"
                />
              </div>
              <div className="flex-1 max-w-xs overflow-hidden">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-light">
                  Ahmed Kamel
                </h4>
                <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                  Last activity 3h ago.
                </p>
                <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                  {" "}
                  Offline{" "}
                </span>
              </div>
            </a>
            <a href="/" className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-lg"
                  src="build/images/cover-2.jpg"
                  alt="K-WD Dashboard"
                />
              </div>
              <div className="flex-1 max-w-xs overflow-hidden">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-light">
                  K-WD Dashboard
                </h4>
                <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                  {" "}
                  Updated 3h ago.{" "}
                </span>
              </div>
            </a>
            <template x-for="i in 10" x-key="i">
              <a href="/" className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-lg"
                    src="build/images/cover-3.jpg"
                    alt="K-WD Dashboard"
                  />
                </div>
                <div className="flex-1 max-w-xs overflow-hidden">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-light">
                    K-WD Dashboard
                  </h4>
                  <p className="text-sm font-normal text-gray-400 truncate dark:text-primary-lighter">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <span className="text-sm font-normal text-gray-400 dark:text-primary-light">
                    {" "}
                    Updated 3h ago.{" "}
                  </span>
                </div>
              </a>
            </template>
          </div>
        </div>
      </Transition>
    </>
  );
}

export function TransitionSetting() {
  const { isSettingPanelOpen, openSettingPanel } = uselayoutConfig(
    (state) => state
  );

  useEffect(() => {
    function handleEscape(event) {
      if (!isSettingPanelOpen) return;

      if (event.key === "Escape") {
        openSettingPanel(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isSettingPanelOpen, openSettingPanel]);

  return (
    <>
      {isSettingPanelOpen && (
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 z-10 bg-primary-darker"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
          onClick={openSettingPanel}
          show={isSettingPanelOpen}
        />
      )}

      <Transition
        show={isSettingPanelOpen}
        enter="transition duration-300 ease-in-out transform sm:duration-500"
        enterFrom="translate-x-full"
        enterTo="ranslate-x-0"
        leave="transition duration-300 ease-in-out transform sm:duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        tabIndex={-1}
        aria-labelledby="notificationPanelLabel"
        className="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
      >
        <div className="absolute left-0 p-2 transform -translate-x-full">
          {/* <!-- Close button --> */}
          <button
            onClick={() => openSettingPanel()}
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-screen">
          {/* <!-- Panel header --> */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 px-4 py-8 space-y-4 border-b dark:border-primary-dark">
            <span
              aria-hidden="true"
              className="text-gray-500 dark:text-primary"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>
            <h2
              id="settinsPanelLabel"
              className="text-xl font-medium text-gray-500 dark:text-light"
            >
              Settings
            </h2>
          </div>
          {/* <!-- Content --> */}
          <div className="flex-1 overflow-hidden hover:overflow-y-auto">
            {/* <!-- Theme --> */}
            <div className="p-4 space-y-4 md:p-8">
              <h6 className="text-lg font-medium text-gray-400 dark:text-light">
                Mode
              </h6>
              <div className="flex items-center space-x-8">
                {/* <!-- Light button --> */}
                {/* @click="setLightTheme" */}
                {/* :className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': !isDark, 'text-gray-500 dark:text-primary-light': isDark }" */}
                <button className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark">
                  <span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </span>
                  <span>Light</span>
                </button>

                {/* <!-- Dark button --> */}
                {/* @click="setDarkTheme"
                  :className="{ 'border-gray-900 text-gray-900 dark:border-primary-light dark:text-primary-100': isDark, 'text-gray-500 dark:text-primary-light': !isDark }" */}
                <button className="flex items-center justify-center px-4 py-2 space-x-4 transition-colors border rounded-md hover:text-gray-900 hover:border-gray-900 dark:border-primary dark:hover:text-primary-100 dark:hover:border-primary-light focus:outline-none focus:ring focus:ring-primary-lighter focus:ring-offset-2 dark:focus:ring-offset-dark dark:focus:ring-primary-dark">
                  <span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </span>
                  <span>Dark</span>
                </button>
              </div>
            </div>

            {/* <!-- Colors --> */}
            <div className="p-4 space-y-4 md:p-8">
              <h6 className="text-lg font-medium text-gray-400 dark:text-light">
                Colors
              </h6>
              <div>
                {/* @click="setColors('cyan')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-cyan)" }}
                ></button>
                {/* @click="setColors('teal')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-teal)" }}
                ></button>
                {/* @click="setColors('green')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-green)" }}
                ></button>
                {/* @click="setColors('fuchsia')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-fuchsia)" }}
                ></button>
                {/* @click="setColors('blue')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-blue)" }}
                ></button>
                {/* @click="setColors('violet')" */}
                <button
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: "var(--color-violet)" }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export function TransitionSideLeft() {}

export function TransitionSideRight(props) {
  const { isRightPanelOpen, openRightPanel } = uselayoutConfig(
    (state) => state
  );

  useEffect(() => {
    function handleEscape(event) {
      if (!isRightPanelOpen) return;

      if (event.key === "Escape") {
        openRightPanel(false);
      }
    }

    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isRightPanelOpen, openRightPanel]);

  return (
    <>
      {isRightPanelOpen && (
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 z-10 bg-primary-darker"
          style={{ opacity: 0.5 }}
          aria-hidden="true"
          onClick={openRightPanel}
          show={isRightPanelOpen}
        />
      )}

      <Transition
        show={isRightPanelOpen}
        enter="transition duration-300 ease-in-out transform sm:duration-500"
        enterFrom="translate-x-full"
        enterTo="ranslate-x-0"
        leave="transition duration-300 ease-in-out transform sm:duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        tabIndex={-1}
        aria-labelledby="notificationPanelLabel"
        className="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
      >
        <div className="absolute left-0 p-2 transform -translate-x-full">
          {/* <!-- Close button --> */}
          <button
            onClick={() => openRightPanel()}
            className="p-2 text-white rounded-md focus:outline-none focus:ring"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Component */}
        {props.children}
      </Transition>
    </>
  );
}
