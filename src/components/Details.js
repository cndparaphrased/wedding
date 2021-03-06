import { useEffect, useRef } from "react";
import Rsvp from "./Rsvp";
import linkIcon from "../images/icons/link.png";
import busIcon from "../images/icons/bus.png";
import contact from "../images/icons/contact.png";

const Details = () => {

  const hiddenRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const scrollHandler = () => {
    const topBtn = document.querySelector('.btnTop');
    const rsvpBtn = document.querySelector('.btnRsvp');

    if (window.scrollY + window.innerHeight >= hiddenRef.current.offsetTop) {
      rsvpBtn.style.display = "none";
      topBtn.style.display = "flex";
    } 
    else {
      rsvpBtn.style.display = "flex";
      topBtn.style.display = "none";
    }
  };

  const toggleDropdown = (e) => {
    const thisBtn = e.target;
    const ariaExpand = thisBtn.getAttribute('aria-expanded');
    const thisDropdown = thisBtn.parentNode.nextElementSibling;
    
    if (ariaExpand === 'true') {
      thisBtn.setAttribute('aria-expanded', 'false');
      thisDropdown.setAttribute('aria-hidden', 'true');
      thisDropdown.querySelector('.dropdown').style.display = 'none';
      thisBtn.classList.remove('detail__btn--active');
      thisDropdown.classList.remove('detail__dropdown--active');
    } 
    else if (ariaExpand === 'false') {
      thisBtn.setAttribute('aria-expanded', 'true');
      thisDropdown.setAttribute('aria-hidden', 'false');
      thisDropdown.querySelector('.dropdown').style.display = 'block';
      thisBtn.classList.add('detail__btn--active');
      thisDropdown.classList.add('detail__dropdown--active');
    };
  };

  return (
    <section className="section">
      <h2 className="h2">
        <span className="h2--regular">details</span>
        <span className="h2--cursive">etc.</span>
      </h2>

      <div className="wrapper wrapper__details" id="rsvpForm" ref={hiddenRef} >
        <div className="detail">
          <div className="detail__left">
            <h3 className="detail__date">
              <span className="detail__date--before">before</span>
              <span className="detail__date--date detail__date--dateSpacing">June</span>
              <span className="detail__date--time">10th</span>
            </h3>
          </div>

          <div className="detail__right">
            <h3 className="detail__trigger">
              <button
                type="button"
                className="detail__btn"
                aria-expanded="false"
                onClick={toggleDropdown}>
                <span>R. S. V. P.</span>
              </button>
            </h3>

            <div className="detail__dropdown" aria-hidden="true">
              <Rsvp />
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper wrapper__details">
        <div className="detail">
          <div className="detail__left">
            <h3 className="detail__date">
              <span className="detail__date--weekday">Sat</span>
              <span className="detail__date--date">July 2</span>
              <span className="detail__date--time">4:30 PM</span>
            </h3>
          </div>
          
          <div className="detail__right">
            <h3 className="detail__trigger">
              <button 
              type="button" 
              className="detail__btn" 
              aria-expanded="false" 
              onClick={toggleDropdown}>
                <span>Ceremony + Reception</span>
              </button>
            </h3>

            <div className="detail__dropdown" aria-hidden="true">
              <div className="dropdown">
                <div className="dropdown__box">
                  <p>Gardiner Museum</p>
                  <p>Terrace Room</p>
                  <p>111 Queen's Park</p>
                  <p>Toronto, Ontario M5S 2C7</p>

                  <div className="dropdown__site">
                    <img src={linkIcon} className="dropdown__icon" alt="" aria-hidden="true" />
                    <a href='http://gardinermuseum.on.ca' target="_blank">gardinermuseum.on.ca</a>
                  </div>
                </div>

                <div className="dropdown__box" aria-hidden="true">
                  <div className="dropdown__gardiner">
                  </div>
                </div>

                <div className="dropdown__box">
                  <p className="dropdown__topMargin">Please head upstairs to the Terrace Room on the third floor.</p>
                </div>

                <div className="dropdown__box">
                  <h4 className="dropdown__heading dropdown__topMargin">
                    <img src={busIcon} className="dropdown__icon" alt="" aria-hidden="true" />
                    <span>Parking + Transportation</span>
                  </h4>

                  <p className="dropdown__paragraph"><strong>Museum</strong> is the closest TTC subway station (50 metres from the venue!)</p>

                  <p>Unfortunately, there is no parking on site. The closest municipal (Green P) parking is on Bedford Road or Yorkville Avenue.</p>
                </div>

                <div className="dropdown__box">
                  <h4 className="dropdown__heading dropdown__topMargin dropdown__heading--center">
                    <img src={contact} className="dropdown__icon--larger" alt="" aria-hidden="true" />
                    <span>Contact Info</span>
                  </h4>

                  <p>cindyandjarek@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;