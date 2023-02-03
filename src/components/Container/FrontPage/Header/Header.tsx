import {
  StyledContact,
  StyledDivider,
  StyledHeader,
  StyledJoin,
  StyledLink,
  StyledLinks,
  StyledLogo,
} from './styled';
import logo from '../../../../images/Logo.png';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo
        src={logo}
        alt='Maple Leaf Tech Academy Logo'
      />
      <StyledLinks>
        <StyledLink href='#' target="_self">Home</StyledLink>
        <StyledLink href='#' target="_self">Advantages</StyledLink>
        <StyledLink href='#' target="_self">Courses</StyledLink>
        <StyledLink href='#' target="_self">About us</StyledLink>
        <StyledLink href='#' target="_self">Feedback</StyledLink>
        <StyledLink href='#' target="_self">Contacts</StyledLink>
      </StyledLinks>
      <StyledContact>
        <StyledLink href='mailto: info@mapleleaf.com' sx={{
          /* paddingRight: '18px',
          borderRight: '1px solid #000', */
          marginRight: '18px'
        }} >
          info@mapleleaf.com
        </StyledLink>
        <StyledDivider sx={{marginRight: '18px'}} />
        <StyledJoin>
          Join for free
        </StyledJoin>
      </StyledContact>
    </StyledHeader>
  )
}