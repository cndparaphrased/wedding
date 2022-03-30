import linkIcon from "../images/icons/link.png";
import busIcon from "../images/icons/bus.png";

const Details = () => {

  const toggleDropdown = (e) => {
    const thisBtn = e.target;
    const ariaExpand = thisBtn.getAttribute('aria-expanded');
    const thisDropdown = thisBtn.parentNode.nextElementSibling;
    
    if (ariaExpand === 'true') {
      thisBtn.setAttribute('aria-expanded', 'false');
      thisDropdown.setAttribute('aria-hidden', 'true');
      thisBtn.classList.remove('detail__btn--active');
      thisDropdown.classList.remove('detail__dropdown--active');
    } 
    else if (ariaExpand === 'false') {
      thisBtn.setAttribute('aria-expanded', 'true');
      thisDropdown.setAttribute('aria-hidden', 'false');
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

      <div className="wrapper wrapper__details">
        <div className="detail">
          <div className="detail__left">
            <h3 className="detail__date">
              <span className="detail__date--before">before</span>
              <span className="detail__date--date">June</span>
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
                R.S.V.P.
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
                  <p className="dropdown__topMargin">Please head upstairs to the Terrace Room on the second floor.</p>
                </div>

                <div className="dropdown__box">
                  <h4 className="dropdown__heading">
                    <img src={busIcon} className="dropdown__icon" alt="" aria-hidden="true" />
                    <span>Parking + Transportation</span>
                  </h4>

                  <p className="dropdown__paragraph"><strong>Museum</strong> is the closest TTC subway station (50 metres from the venue!)</p>

                  <p>Unfortunately, there is no parking on site. The closest Green P parking is on Bedford Road or Yorkville Avenue.</p>
                </div>
              </div>
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
                Ceremony + Reception
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
                  <p className="dropdown__topMargin">Please head upstairs to the Terrace Room on the second floor.</p>
                </div>

                <div className="dropdown__box">
                  <h4 className="dropdown__heading">
                    <img src={busIcon} className="dropdown__icon" alt="" aria-hidden="true" />
                    <span>Parking + Transportation</span>
                  </h4>

                  <p className="dropdown__paragraph"><strong>Museum</strong> is the closest TTC subway station (50 metres from the venue!)</p>

                  <p>Unfortunately, there is no parking on site. The closest Green P parking is on Bedford Road or Yorkville Avenue.</p>
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