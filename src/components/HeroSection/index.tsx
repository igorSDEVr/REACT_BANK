import { useState } from 'react';
import * as C from './styled';
import { Button } from '../ButtonElement';
import video from '../../videos/video.mp4';


export const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <C.Container id='home'>
      <C.HeroBg>
        <C.VideoBg autoPlay loop muted src={video} />
      </C.HeroBg>
      <C.HeroContent>
        <C.HeroH1>Virtual Banking Made Easy</C.HeroH1>
        <C.HeroP>
          Sign Up for a new account and receive $250 in credits towards your next payments.
        </C.HeroP>
        <C.HeroBtnWrapper>
          <Button
            to='/'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
          >
            Get started{hover ? <C.ArrowForward /> : <C.ArrowRight />}
          </Button>
        </C.HeroBtnWrapper>
      </C.HeroContent>
    </C.Container>
  );
};