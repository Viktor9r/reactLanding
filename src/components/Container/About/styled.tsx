import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAbout = styled('section')(() => ({
  gridColumn: '1/13',
  marginBottom: '280px',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '30px'
}));

export const StyledTextBlock = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1/6',
}));

export const StyledTitle = styled('h2')(() => ({
  padding: '0',
  margin: '0 0 26px',
  fontSize: '70px',
  fontWeight: '400'
}));

export const StyledText = styled('p')(() => ({
  fontSize: '16px',
  margin: '0 0 28px',
  padding: '0',
  lineHeight: '24px'
}));

export const StyledButton = styled(Button)(() => ({
  marginBottom: '64px',
  borderRadius: '12px',
  overflow: 'hidden',
  padding: '0',
  border: '1px solid #62B2FF',
  minWidth: '30%',
  maxWidth: '40%',
  textTransform: 'none',
}));

export const StyledLink = styled('a')(() => ({
  width: '100%',
  lineHeight: '100%',
  color: '#000',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '18px 30px',
  background: 'rgba(98, 178, 255, 0.1);',
  transition: '0.3s',
  ['&:hover']: {
    background: '#62B2FF',
    color: '#fff',
  }
}));

export const StyledSocialBlock = styled('div')(() => ({
  display: 'flex',
  gap: '28px',
  marginBottom: '18px',
}));

export const StyledSocial = styled('a')(() => ({
  width: '36px',
  height: '36px',
}));

export const StyledExtra = styled('p')(() => ({
  padding: '0',
  margin: '0',
  fontSize: '14px',
  fontWeight: '300',
  lineHeight: '180%',
}))