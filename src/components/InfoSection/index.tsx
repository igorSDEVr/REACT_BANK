import * as C from './styled';
import { Button } from '../ButtonElement';

type Props = {
  id: string;
  lightBg: boolean,
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headLine: string;
  description: string;
  buttonLabel: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText:boolean;
};

export const InfoSection = ({...props}: Props) => {
  return (
    <C.Container id={props.id} lightBg={props.lightBg}>
      <C.InfoWrapper>
        <C.InfoRow imgStart={props.imgStart}>
          <C.Column1>
            <C.TextWrapper>
              <C.TopLine >{props.topLine}</C.TopLine>
              <C.Heading lightText={props.lightText}>{props.headLine}</C.Heading>
              <C.SubTitle darkText={props.darkText}>{props.description}</C.SubTitle>
              <C.BtnWrap>
                <Button
                  to='home'
                  smooth={true}
                  duration='500'
                  spy={true}
                  offset={-80}
                  primary={props.primary ? true : false}
                  dark={props.dark ? true : false}
                >
                  {props.buttonLabel}
                </Button>
              </C.BtnWrap>
            </C.TextWrapper>
          </C.Column1>
          <C.Column2>
            <C.ImgWrap>
              <C.Img src={props.img} alt={props.alt}/>
            </C.ImgWrap>
          </C.Column2>
        </C.InfoRow>
      </C.InfoWrapper>
    </C.Container>
  );
};