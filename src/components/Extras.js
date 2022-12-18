import icon01 from "../images/icons/icon01.png";
import icon02 from "../images/icons/icon02.png";
import icon03 from "../images/icons/icon03.png";
import icon04 from "../images/icons/icon04.png";

const Extras = () => {
  return (
    <section className="extras">
      <div className="wrapper extras--wrapper">
        <div className="extras--left"></div>

        <div className="extras--right">
          <h2>
            <span className="h2__subheading">oh hey, it's probably time to...</span>
            <span className="h2__heading">repot your succulent</span>
          </h2>

          <p className="paragraph">Assuming it's still alive (if it isn't or it wants friends, we have more succulent propagations that Jarek would really like Cindy to cull, so, do reach out), your little plant has probably outgrown its terrarium jar. Even though it was presented in an enclosed glass jar for aesthetic/transportation purposes, ideally:</p>

          <ul className="list">
            <li className="list__item">
              <div className="list__header">
                <img src={icon01} alt="" aria-hidden="true" className="list__icon" />
                <h3>Planter</h3>
              </div>
              <p className="paragraph">Transplant into a pot with drainage and a shallow depth. Succulents don't like to sit in wet soil for very long.</p>
            </li>

            <li className="list__item">
              <div className="list__header">
                <img src={icon04} alt="" aria-hidden="true" className="list__icon" />
                <h3>Water</h3>
              </div>
              <p className="paragraph">Do not overwater. The best technique (assuming your pot has drainage holes!) is the 'soak and dry' method.</p>
            </li>

            <li className="list__item">
              <div className="list__header">
                <img src={icon02} alt="" aria-hidden="true" className="list__icon" />
                <h3>Soil</h3>
              </div>
              <p className="paragraph">Use well-draining soil. If all you have is regular potting soil, mix it with at least 50% perlite/pumice. This will prevent root rot.</p>
            </li>

            <li className="list__item">
              <div className="list__header">
                <img src={icon03} alt="" aria-hidden="true" className="list__icon" />
                <h3>Light</h3>
              </div>
              <p className="paragraph">Give it a lot of sun. If your plant starts looking a bit too leggy (stretched out and tall), that means it's not getting enough light.</p>
            </li>
            
          </ul>

          <p className="paragraph"><a href="https://www.succulentsandsunshine.com/how-to-water-succulent-plants/" target="_blank" className="link--inline">Click here</a> for more succulent care resources. Also, do reuse the little mason jar if you can (we make chia pudding in ours) or, at least, recycle: the penguins will love you forever.</p>
        </div>
      </div>
    </section>
  )
}

export default Extras;
