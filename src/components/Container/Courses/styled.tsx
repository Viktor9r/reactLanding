import { styled } from '@mui/material/styles';

export const StyledCourses = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1/13',
  marginBottom: '140px'
}));

export const StyledSecondTitle = styled('h3')(() => ({
  padding: '0',
  margin: '0',
  fontSize: '16px',
  letterSpacing: '2px',
  marginBottom: '22px',
  fontWeight: '400',
  textTransform: 'uppercase'
}));

export const StyledMainTitle = styled('h1')(() => ({
  padding: '0',
  margin: '0',
  fontSize: '38px',
  fontWeight: '700',
  marginBottom: '100px'
}));

export const StyledCoursesBlock = styled('div')(() => ({
  display: 'flex',
  gap: '30px',
  justifyContent: 'space-between',
}));