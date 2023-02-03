import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(() => ({
  gridColumn: '1/13',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  height: '40px',
  marginTop: '50px',
}));

export const StyledLogo = styled('img')(() => ({
  gridColumn: '1/3',
}));

export const StyledLinks = styled('nav')(() => ({
  gridColumn: '4/9',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledLink = styled('a')(() => ({
  outline: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  transition: '0.3s',
  color: '#000',
  lineHeight: '16px',
  /* fontWeight: 400, */
  ['&:hover']: {
    color: '#2948FF',
    /* display: 'inline', */
    transform: 'scale(1.15) translateY(1px)',
  },
  ['&:focus']: {
    color: '#2948FF',
    /* fontWeight: 'bold', */
    /* display: 'inline', */
    transform: 'scale(1.15) translateY(1px)',
  },
}));

export const StyledContact = styled('div')(() => ({
  gridColumn: '10/13',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledJoin = styled(Button)(() => ({
  border: '1px solid #2948FF',
  color: '#2948FF',
  textTransform: 'none',
  fontWeight: 'bold',
  padding: '10px 14px',
  transition: '0.3s',
  flex: '1',
  ['&:hover']: {
    background: '#2948FF',
    color: '#fff',
  },
  /* width: '100%', */
}));

export const StyledDivider = styled('div')(() => ({
  width: '1px',
  height: '30%',
  background: '#000'
}))
