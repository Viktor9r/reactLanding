import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')(() => ({
  maxWidth: '1440px',
  overflow: 'hidden',
  margin: 'auto',
  padding: '0 20px'
}));

export const StyledGrid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '30px',
  margin: 'auto',
  width: '100%',
  /* maxWidth: '1170px', */
}));