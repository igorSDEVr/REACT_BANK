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
        <C.HeroH1>Banco Digital</C.HeroH1>
        <C.HeroP>
          Cadastre-se e receba R$250 em créditos para seus próximos pagamentos.
        </C.HeroP>
        <C.HeroBtnWrapper>
          <Button
            to='/'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
          >
            Iniciar{hover ? <C.ArrowForward /> : <C.ArrowRight />}
          </Button>
        </C.HeroBtnWrapper>
      </C.HeroContent>
    </C.Container>
  );
};