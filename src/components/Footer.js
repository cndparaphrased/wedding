import logo from "../images/logoSm.png";

const Footer = () => {

  return (
    <footer className="footer">
      <img aria-hidden="true" src={logo} alt="" className="footer__logo" />
      <p className="footer__copy">ⓒ Cindy Poon Yeung 2021</p>
    </footer>
  );
};

export default Footer;