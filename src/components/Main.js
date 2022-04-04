import wreath from "../images/bg/wreath9.svg";
import pen from "../images/icons/pen.png";
import top from "../images/icons/arrowUp.png";

const Main = () => {
  const handleRsvpLink = (e) => {
    const btn = e.currentTarget;
    const topBtn = e.currentTarget.parentNode.querySelector('.btnTop');
    const formDropdown = document.querySelector('#rsvpForm').querySelector('.detail__btn');

    if (formDropdown.getAttribute('aria-expanded') === 'false') {
      formDropdown.click();
    };

    btn.style.display = "none";
    topBtn.style.display = "flex";
  };

  const handleToTopLink = (e) => {
    const btn = e.currentTarget;
    const rsvpBtn = e.currentTarget.parentNode.querySelector('.btnRsvp');

    btn.style.display = "none";
    rsvpBtn.style.display = "flex";
  }

  return (
    <section className="mainContainer" id="top">
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
        <a href="#rsvpForm" className="rsvpBtn btnRsvp" onClick={handleRsvpLink}>
          <img src={pen} alt="" className="pen" aria-hidden="true" />
          <span className="btnText">RSVP</span>
        </a>
        <a href="#top" className="rsvpBtn btnTop" onClick={handleToTopLink}>
          <span className="btnText"><span className="btnText--hideMobile">TO</span> TOP</span>
          <img src={top} alt="" className="top" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Main;
