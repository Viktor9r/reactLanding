import {
  StyledAbout,
  StyledButton,
  StyledExtra,
  StyledLink,
  StyledSocial,
  StyledSocialBlock,
  StyledText,
  StyledTextBlock,
  StyledTitle,
} from './styled';

import Facebook from '../../../images/Facebook.png';
import Linkedin from '../../../images/LinkedIn.png';
import Twitter from '../../../images/Twitter.png';
import Instagram from '../../../images/Instagram.png';

export const About = () => {
  return (
    <StyledAbout>
      <StyledTextBlock>
        <StyledTitle>About us</StyledTitle>
        <StyledText>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        </StyledText>
        <StyledButton>
          <StyledLink href='#' >Order a consultation</StyledLink>
        </StyledButton>
        <StyledSocialBlock>
          <StyledSocial href='#' sx={{
            background: `url(${Facebook})`
          }} />
          <StyledSocial href='#' sx={{
            background: `url(${Linkedin})`
          }}/>
          <StyledSocial href='#' sx={{
            background: `url(${Twitter})`
          }}/>
          <StyledSocial href='#' sx={{
            background: `url(${Instagram})`
          }}/>
        </StyledSocialBlock>
        <StyledExtra>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan
        </StyledExtra>
      </StyledTextBlock>
    </StyledAbout>
  )
}