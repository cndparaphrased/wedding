import cindy from "../images/polaroids/cindy.jpg";
import jarek from "../images/polaroids/jarek.jpg";
import us01 from "../images/polaroids/us01.jpg";
import us02 from "../images/polaroids/us02.jpg";
import us03 from "../images/polaroids/us03.jpg";
import cindyRing from "../images/polaroids/cindy-ring.jpg";
import jarekNY from "../images/polaroids/jarek-ny.jpg";
import usCheers from "../images/polaroids/us-cheers.jpg";
import wedding01 from "../images/polaroids/wedding01.jpeg";
import wedding02 from "../images/polaroids/wedding02.jpeg";
import weddingjarek from "../images/polaroids/weddingjarek.jpeg";
import weddingcindy from "../images/polaroids/weddingcindy.jpeg";

const Stories = () => {
  return (
    <section className="polaroids">
      <div className="wrapper">
        <h2 className="h2">
          <span className="h2__subheading">love is the coal</span>
          <span className="h2__heading">that makes this train roll</span>
        </h2>

        <div className="polaroids--wrapper">
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
              <p>They invited everybody to celebrate all the love.</p>
            </div>
          </div>

          {/* WEDDING*/}
          <div className="polaroid">
            <div className="polaroid__img">
              <img src={wedding01} alt="" />
            </div>

            <div className="polaroid__text">
              <p>On July 2, 2022 at The Gardiner Museum in Toronto...</p>
            </div>
          </div>

          <div className="polaroid">
            <div className="polaroid__img">
              <img src={weddingjarek} alt="" />
            </div>

            <div className="polaroid__text">
              <p>(With Jarek looking like a Hugo Boss model)</p>
            </div>
          </div>

          <div className="polaroid">
            <div className="polaroid__img">
              <img src={weddingcindy} alt="" />
            </div>

            <div className="polaroid__text">
              <p>(And Cindy with flowers in her hair)</p>
            </div>
          </div>

          <div className="polaroid">
            <div className="polaroid__img">
              <img src={wedding02} alt="" />
            </div>

            <div className="polaroid__text">
              <p>...they signed some official documents and stuff. Yay, love!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;