import * as C from './styled';

export const Footer = () => {
  return (
    <C.Container>
      <C.FooterWrap>
        <C.FooterLinksContainer>
          <C.FooterLinksWrapper>
            <C.FooterLinkItems>
              <C.FooterLinksTitle>About Us</C.FooterLinksTitle>
                <C.FooterLink to='/signin'>How it Works</C.FooterLink>
                <C.FooterLink to='/signin'>Testimonials</C.FooterLink>
                <C.FooterLink to='/signin'>Careers</C.FooterLink>
                <C.FooterLink to='/signin'>Inverstors</C.FooterLink>
                <C.FooterLink to='/signin'>Terms of Service</C.FooterLink>
            </C.FooterLinkItems>
            <C.FooterLinkItems>
              <C.FooterLinksTitle>Contact Us</C.FooterLinksTitle>
                <C.FooterLink to='/signin'>Contact</C.FooterLink>
                <C.FooterLink to='/signin'>Support</C.FooterLink>
                <C.FooterLink to='/signin'>Destinations</C.FooterLink>
                <C.FooterLink to='/signin'>SponsorsShips</C.FooterLink>
            </C.FooterLinkItems>
            <C.FooterLinkItems>
              <C.FooterLinksTitle>Videos</C.FooterLinksTitle>
                <C.FooterLink to='/signin'>Submit Video</C.FooterLink>
                <C.FooterLink to='/signin'>Ambassadors</C.FooterLink>
                <C.FooterLink to='/signin'>Agency</C.FooterLink>
                <C.FooterLink to='/signin'>Influencer</C.FooterLink>
            </C.FooterLinkItems>
            <C.FooterLinkItems>
              <C.FooterLinksTitle>Social Media</C.FooterLinksTitle>
                <C.FooterLink to='/signin'>Instagram</C.FooterLink>
                <C.FooterLink to='/signin'>Facebook</C.FooterLink>
                <C.FooterLink to='/signin'>Youtube</C.FooterLink>
                <C.FooterLink to='/signin'>Twitter</C.FooterLink>
            </C.FooterLinkItems>
          </C.FooterLinksWrapper>
        </C.FooterLinksContainer>        
      </C.FooterWrap>
    </C.Container>
  );
};