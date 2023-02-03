import { styled } from '@mui/material/styles';

export const StyledCompanies = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1/13',
  gap: '46px',
  alignItems: 'center',
  padding: '0 20px',
  marginBottom: '140px'
}));;

export const StyledTitle = styled('h2')(() => ({
  fontSize: '34px',
  padding: '0',
  margin: '0',
  fontWeight: '400',
}));

export const StyledLogos = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '20px',
  padding: '20px'
}));

export const StyledLogo = styled('div')(() => ({
  flex: '1',
  height: '36px',
}))