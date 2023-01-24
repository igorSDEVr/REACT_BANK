import * as C from './styled';
import car from '../../images/car.svg';
import investing from '../../images/investing.svg';
import mobilePay from '../../images/mobilePay.svg';

export const Services = () => {
  return (
    <C.Container id='services'>
      <C.ServicesH1>Our Services</C.ServicesH1>
      <C.ServicesWrapper>
        <C.ServicesCard>
          <C.ServicesIcon src={car}/>
          <C.ServicesH2>Reduce expenses</C.ServicesH2>
          <C.ServicesP>We help reduce your fess and increase your overall revenue</C.ServicesP>
        </C.ServicesCard>
        <C.ServicesCard>
          <C.ServicesIcon src={investing}/>
          <C.ServicesH2>Virtual Offices</C.ServicesH2>
          <C.ServicesP>You can acess our platform online anywhere in the world.</C.ServicesP>
        </C.ServicesCard>
        <C.ServicesCard>
          <C.ServicesIcon src={mobilePay}/>
          <C.ServicesH2>Premiun Benefits</C.ServicesH2>
          <C.ServicesP>Unlock our special membership card that return 5% cash back.</C.ServicesP>
        </C.ServicesCard>
      </C.ServicesWrapper>
    </C.Container>
  );
};