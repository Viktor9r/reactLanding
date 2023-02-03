import Button from '@mui/material/Button';
import {styled } from '@mui/material/styles';
import arrow from '../../../../images/ArrowCard.png'

export const StyledCard = styled('div')(() => ({
  flexBasis: 'calc(100%/3)',
  display: 'flex',
  flexDirection: 'column',
  padding: '46px 46px 46px 34px',
  gap: '40px',
  borderRadius: '12px',
  transition: '0.3s',
  cursor: 'auto',
  ['&:hover']: {
    boxShadow: '0px 147px 59px rgba(0, 0, 0, 0.01), 0px 83px 50px rgba(0, 0, 0, 0.03), 0px 37px 37px rgba(0, 0, 0, 0.04), 0px 9px 20px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);'
  }
}));

export const StyledIcon = styled('img')(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '8px'
}));

export const StyledTitle = styled('div')(() => ({
  fontSize: '24px',
  fontWeight: '600',
}));

export const StyledText = styled('div')(() => ({
  fontSize: '16px'
}));

export const StyledButton = styled(Button)(() => ({
  width: '48px',
  height: '20px',
  background: `url(${arrow})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transition: '0.3s',
  ['&:hover']: {
    transform: 'scale(1.1)'
  }
}))