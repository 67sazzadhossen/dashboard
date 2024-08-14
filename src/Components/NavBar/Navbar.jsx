import logo from "../../assets/navlogo/logo.png";
// import overview from "../../assets/navlogo/overview.png";
// import mycourse from "../../assets/navlogo/mycourse.png";
// import completed from "../../assets/navlogo/completed.png";
// import financial from "../../assets/navlogo/financial.png";
// import transection from "../../assets/navlogo/transection.png";
// import reports from "../../assets/navlogo/reports.png";
// import statistics from "../../assets/navlogo/statistics.png";
// import support from "../../assets/navlogo/support.png";
// import settings from "../../assets/navlogo/settings.png";
import NavItem from "../NavItem";

const Navbar = () => {
  return (
    <div>
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
  );
};

export default Navbar;
