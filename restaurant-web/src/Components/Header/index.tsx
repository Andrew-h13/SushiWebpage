import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Order</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
