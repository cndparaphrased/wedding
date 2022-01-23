import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="http://cpyeung.com" className="logo__link">
          <img src={logo} alt="C.P. Yeung logo" className="logo__img" />
        </a>
      </div>
    </header>
  );
};

export default Header;
