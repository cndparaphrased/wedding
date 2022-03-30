import cindy from "../images/polaroids/cindy.jpg";
import jarek from "../images/polaroids/jarek.jpg";
import us01 from "../images/polaroids/us01.jpg";
import us02 from "../images/polaroids/us02.jpg";
import us03 from "../images/polaroids/us03.jpg";
import cindyRing from "../images/polaroids/cindy-ring.jpg";
import jarekNY from "../images/polaroids/jarek-ny.jpg";
import usCheers from "../images/polaroids/us-cheers.jpg";

const Stories = () => {
  return (
    <section className="section">
      <h2 className="h2">
        <span className="h2--regular">tell me a</span>
        <span className="h2--cursive">story</span>
      </h2>

      <div className="wrapper wrapper__polaroids">
        {/* CINDY */}
        <div className="polaroid"> 
          <div className="polaroid__img">
            <img src={cindy} alt="" />
          </div>
          
          <div className="polaroid__text">
            <p>This is Cindy. Cindy likes books, fleurs, coffee, polka dots, and colourful ribbons.</p>
          </div>
        </div>

        {/* JAREK */}
        <div className="polaroid">
          <div className="polaroid__img">
            <img src={jarek} alt="" />
          </div>

          <div className="polaroid__text">
            <p>This is Jarek. Jarek likes videogames, tech stuff, sneakers, beer, and the colour black.</p>
          </div>
        </div>

        {/* THEY SWIPED RIGHT */}
        <div className="polaroid">
          <div className="polaroid__img">
            <img src={us01} alt="" />
          </div>

          <div className="polaroid__text">
            <p>Six years ago, they both swiped right (thanks, Internet)!</p>
          </div>
        </div>

      {/* CINDY THINKS */}
      <div className="polaroid">
        <div className="polaroid__img">
          <img src={us02} alt="" />
        </div>

        <div className="polaroid__text">
          <p>Cindy thinks Jarek is a very cute nerd.</p>
        </div>
      </div>
      

      {/* JAREK THINKS */}
      <div className="polaroid">
        <div className="polaroid__img">
          <img src={us03} alt="" />
        </div>

        <div className="polaroid__text">
          <p>Jarek thinks Cindy is a silly, cute klutz.</p>
        </div>
      </div>

      {/* NYC */}
      <div className="polaroid">
        <div className="polaroid__img">
          <img src={jarekNY} alt="" />
        </div>

        <div className="polaroid__text">
          <p>Three years ago, they went to NYC...</p>
        </div>
      </div>

      <div className="polaroid">
        <div className="polaroid__img">
          <img src={cindyRing} alt="" />
        </div>

        <div className="polaroid__text">
          <p>...and Jarek gave Cindy a pretty ring.</p>
        </div>
      </div>

      {/* SEE YOU SOON */}
      <div className="polaroid">
        <div className="polaroid__img">
          <img src={usCheers} alt="" />
        </div>

        <div className="polaroid__text">
          <p>They hope to see you soon to celebrate all the love. It's (finally) party time!</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Stories;