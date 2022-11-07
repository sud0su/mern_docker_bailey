import { Content, Loading, Navbar, Sidebar } from "./components";
import { uselayoutConfig } from "../stores/layoutStore";

import "../styles/mainlayout.css";
import { example } from "../services/_example_json";
import {
  TransitionSideLeft,
  TransitionSideRight,
} from "./components/partials/_transtition_layout";
// import {
//   TransitionNotification,
//   TransitionSearch,
//   TransitionSetting,
//   TransitionSideRight,
// } from "./components/partials/_transtition_layout";
// import SearchComponent from "./components/nav_pages/_search";

function MainLayout() {
  const darkMode = uselayoutConfig((state) => state.dark);

  const nav = example.map((item, index) =>
    item.position === "left" ? (
      <TransitionSideLeft key={index}>{item.componentName}</TransitionSideLeft>
    ) : (
      <TransitionSideRight key={index}>{item.componentName}</TransitionSideRight>
    )
  );

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
        <Loading />
        <Sidebar />
        <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
          <Navbar />
          <Content />
        </div>
        {nav}
        {/* <TransitionNotification />
        <TransitionSearch />
        <TransitionSetting />

        <TransitionSideRight>
          <SearchComponent />
        </TransitionSideRight> */}
      </div>
    </div>
  );
}

export default MainLayout;
