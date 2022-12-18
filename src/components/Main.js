import heroMobile from "../images/bg/subwayMobile.jpeg";

const Main = () => {
  return (
    <section className="mainContainer">
      <div className="heroImg">
        <img src={heroMobile} alt="" className="heroImg--mobile" />
      </div>
      <div className="heroTextContainer">
        <div className="heroText">
          <h1>
            <span className="header">thank you</span>
            <span className="subheader">for celebrating with us</span>
          </h1>
        </div>

        <div className="mouseScroll">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="arrow arrow1"></span>
            <span className="arrow arrow2"></span>
            <span className="arrow arrow3"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main;
