import videoDrone from "../images/media/wedding.mp4";
import videoSloMo from "../images/media/sloMo.mp4";

const Media = () => {
  return (
    <section className="media">
      <div className="media__header">
        <h2 className="media--left">
          <span className="h2__subheading">photos and videos of us and you:</span>
          <span className="h2__heading">all the people we love</span>
        </h2>

        <div className="media--right">
          <p className="paragraph">All pictures can be found <a href="https://mangostudios.pic-time.com/gpBBQwo2KNn0j" target="_blank" className="link--inline">here</a>. There are some super cute pictures of everyone so if you want copies without the watermark, just <a href="mailto:cindyandjarek@gmail.com" target="_blank" className="link--inline">email us</a> and we can send you the originals. You can also check out all of the slow motion videos <a href="https://clients.posephotos.ca/Cindy-and-Jarek/n-S9MtLF/" target="_blank" className="link--inline">here</a> (pw: 070222)!</p>
        </div>
      </div>

      <div className="media__body">
        <div className="mediaWrapper">
          <div className="media--left videoWrapper">
            <video className="video" src={videoDrone} autoPlay muted controls />
          </div>

          <div className="media--right photosWrapper">
            <a href="https://mangostudios.pic-time.com/gpBBQwo2KNn0j" target="_blank" className="contentBox box1"></a>
            <a href="https://mangostudios.pic-time.com/gpBBQwo2KNn0j" target="_blank" className="contentBox box2"></a>
          </div>
        </div>

        <div className="mediaWrapper">
          <div className="media--left photosWrapper">
            <a href="https://mangostudios.pic-time.com/gpBBQwo2KNn0j" target="_blank" className="contentBox box3"></a>
            <a href="https://mangostudios.pic-time.com/gpBBQwo2KNn0j" target="_blank" className="contentBox box4"></a>
          </div>

          <div className="media--right videoWrapper videoWrapper">
            <video className="video video--contain" src={videoSloMo} autoPlay muted controls />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Media; 