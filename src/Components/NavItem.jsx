import overview from "../assets/navlogo/overview.png";

const NavItem = ({ logo, name }) => {
  return (
    <div className="flex items-center gap-3 text-lg">
      <img src={logo} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default NavItem;
