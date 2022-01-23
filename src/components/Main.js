import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Social from './Social';
import Hero from './Hero';

const Main = () => {
  return (
    <main>
      <Parallax 
        pages={2} 
        innerStyle={{ 
          border: '45px solid white', 
      }}>

        {/* SOCIAL MEDIA SIDEBAR */}
        <ParallaxLayer sticky={{ start: 0, end: 2 }}>
          <Social />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.5}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}>
          <p>Scroll up</p>
        </ParallaxLayer>
      </Parallax>

    </main>
  );
};

export default Main;
