import mainImg from "../images/us-main.png";

const Main = () => {
  return (
    <section className="sect sect--green">
      <div className="sectIcon">
        <img src={mainImg} alt="" className="mainImg" />
      </div>
      {/* <h1>Cindy & Jarek</h1> */}
      
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#rsvp" className="active">rsvp</a>
          </li>
          <li>
            <a href="#venue">venue</a>
          </li>
          <li>
            <a href="#covid">covid</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Main;
