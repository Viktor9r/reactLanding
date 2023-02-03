import {
  StyledCompanies,
  StyledLogo,
  StyledLogos,
  StyledTitle,
} from './styled';
import SoftServe from '../../../images/SoftServe.png';
import Dell from '../../../images/Dell.png';
import PlayGen from '../../../images/PlayGen.png';
import Samsung from '../../../images/Samsung.png';

export const Companies = () => {
  const companies = [
    {
      id: 1,
      logo: PlayGen,
    },
    {
      id: 2,
      logo: PlayGen,
    },
    {
      id: 3,
      logo: PlayGen,
    },
    {
      id: 4,
      logo: PlayGen,
    },
  ]
  return (
    <StyledCompanies>
      <StyledTitle>Companies in which <b>students work</b> after the courses</StyledTitle>
      <StyledLogos>
        {/* <StyledLogo sx={{
          background: `url(${PlayGen})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
        <StyledLogo sx={{
          background: `url(${PlayGen})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
        <StyledLogo sx={{
          background: `url(${PlayGen})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
        <StyledLogo sx={{
          background: `url(${PlayGen})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
      </StyledLogos> */}
        {companies.map((c) => 
          <StyledLogo key={c.id} sx={{
              background: `url(${c.logo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        )}
      </StyledLogos>
    </StyledCompanies>
  )
}