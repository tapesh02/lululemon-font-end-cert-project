import logo from "../../assets/littleLemonLogo2.png";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" width={150} />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
      </ul>
    </nav>
  );
};

export default NavBar;
