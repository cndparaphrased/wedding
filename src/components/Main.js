import useScrollHandler from "./useScrollHandler";
import wreath from "../images/bg/wreath9.svg";
import pen from "../images/icons/pen.png";

const Main = () => {
  const scrollPosition = useScrollHandler();
  console.log(scrollPosition);

  return (
    <section className="mainContainer">
      <div className="hero">
        <div className="header">
          <h1>
            <span className="names">cindy</span>
            <span className="and">And</span>
            <span className="names">jarek</span>
          </h1>

          <p className="date">July 2, 2022</p>
        </div>

        <div className="heroContent">
          <div className="imgWrap">
            <div className="mainImg">
              <img src={wreath} alt="" className="wreath" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="rsvpBox">
        <button type="button" className="rsvpBtn">
          <img src={pen} alt="" className="pen" aria-hidden="true" />
          <span className="btnText">RSVP</span>
        </button>
      </div>
    </section>
  )
}

export default Main;
