import logo from "../src/assets/logo.png";
import overview from "../src/assets/navlogo/overview.png";
import mycourse from "../src/assets/navlogo/mycourse.png";
import completed from "../src/assets/navlogo/completed.png";
import financial from "../src/assets/navlogo/financial.png";
import transection from "../src/assets/navlogo/transection.png";
import reports from "../src/assets/navlogo/reports.png";
import statistics from "../src/assets/navlogo/statistics.png";
import support from "../src/assets/navlogo/support.png";
import settings from "../src/assets/navlogo/settings.png";

import NavItem from "./Components/NavItem";
import DrawerContent from "./Components/DrawerContent/DrawerContent";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* ===== Drawer Content ====== */}
          <DrawerContent></DrawerContent>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#F7F7FF] text-base-content min-h-full w-80 p-8 flex">
            {/* Sidebar content here */}

            {/* ======= Logo ===== */}
            <div className="flex items-center gap-2 text-2xl font-semibold mx-auto my-9">
              <img src={logo} alt="" />
              <h1 className="font-poppin">
                <span className="text-[#6C72FF]">ON</span>
                Course
              </h1>
            </div>

            <div className="space-y-4">
              <li>
                <NavItem logo={overview} name="Overview"></NavItem>
              </li>
              <li>
                <NavItem logo={mycourse} name="My Course"></NavItem>
              </li>
              <li>
                <NavItem logo={completed} name="Completed"></NavItem>
              </li>
              <li>
                <NavItem logo={financial} name="Financial Aid"></NavItem>
              </li>
              <li>
                <NavItem logo={transection} name="Transections"></NavItem>
              </li>
              <li>
                <NavItem logo={reports} name="Reports"></NavItem>
              </li>
              <li>
                <NavItem logo={statistics} name="Statistics"></NavItem>
              </li>
            </div>
            <div className="space-y-4 absolute bottom-6">
              <li>
                <NavItem logo={support} name="Support"></NavItem>
              </li>
              <li>
                <NavItem logo={settings} name="Settings"></NavItem>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
