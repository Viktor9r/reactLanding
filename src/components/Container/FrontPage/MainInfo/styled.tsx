import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledMainInfo = styled('section')(() => ({
  gridColumn: '1/8',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledOffer = styled('h3')(() => ({
  margin: '0',
  marginBottom: '30px',
  textTransform: 'uppercase',
  fontSize: '16px',
  fontWeight: '400',
  padding: '10px',
  borderRadius: '30px',
  background: '#fff',
  width: 'fit-content',
}));

export const StyledSlogan = styled('h1')(() => ({
  fontSize: '70px',
  lineHeight: '140%',
  fontWeight: '600',
  marginBottom: '10px',
  marginTop: '0',
}));

export const StyledDivider = styled('img')(() => ({
  marginBottom: '30px',
  width: '60%'
}));

export const StyledExtra = styled('h3')(() => ({
  margin: '0',
  marginBottom: '30px',
  fontSize: '16px',
  fontWeight: '400',
}));

export const StyledButtons = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '60%',
  marginBottom: '78px'
}));

export const StyledSignUp = styled(Button)(() => ({
  background: 'linear-gradient(90deg, #396AFC 0%, #2948FF 100%)',
  color: '#fff',
  borderRadius: '12px',
  textTransform: 'none',
  boxSizing: 'border-box',
  padding: '0',
}));

export const StyledSignUpLink = styled('a')(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  lineHeight: '100%',
  fontSize: '16px',
  fontWeight: '550',
  color: '#fff',
  textDecoration: 'none',
  padding: '0 34px',
  borderRadius: '12px',
  transition: '0.3s',
  ['&:hover']: {
    color: '#2948FF',
    background: '#fff',
    outline: '1px solid #2948FF'
  },
  ['&:focus']: {
    color: '#2948FF',
    background: '#fff',
    outline: '1px solid #2948FF'
  },
}));

export const StyledVideo = styled('a')(() => ({
  height: '100%',
  padding: '0',
}));

export const StyledVideoImage = styled('img')(() => ({
  height: '100%',
}));

export const StyledRatings = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '50px',
}));

export const StyledRate = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
}));

export const StyledRateCell = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  /* gap: '4px', */
}));

export const StyledRateNumber = styled('h2')(() => ({
  fontSize: '38px',
  fontWeight: '600',
  lineHeight: '36px',
  padding: '0',
  margin: '0'
}));

export const StyledRateIcons = styled('div')(() => ({
  display: 'flex',
  /* gap: '4px', */
  width: '100%',
}));

export const StyledRateIcon = styled('img')(() => ({
  /* width: '10px', */
  flex: '1'
}));

export const StyledRateTitle = styled('h2')(() => ({
  padding: '0',
  margin: '0',
  fontSize: '24px',
  fontWeight: '600',
}));

export const StyledRateLink = styled('a')(() => ({
  fontSize: '16px',
  color: '#2948FF',
  textDecoration: 'none',
}))

