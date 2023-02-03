import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const StyledCourse = styled('div')(() => ({
  flex: 'calc(100%/4)',
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  borderRadius: '8px',
  transition: '0.3s',
  /* backgroundImage: '-webkit-linear-gradient(left, black 25%, #fde071 37.5%, #ef9671, #996a6e 62.5%, black 75%)',
  background: 'linear-gradient(90deg, black 25%, #fde071 37.5%, #ef9671, #996a6e 62.5%, black 75%)',
  backgroundPosition: 'right center',
  backgroundSize: '400% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent', */

  ['&:hover']: {
    backgroundPosition: 'left center',
    color: '#000',
    transform: 'scale(1.05)',
    boxShadow: '0px 147px 59px rgba(0, 0, 0, 0.01), 0px 83px 50px rgba(0, 0, 0, 0.03), 0px 37px 37px rgba(0, 0, 0, 0.04), 0px 9px 20px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);'
  },
  ['&::after']: {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '0',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
	  transition: 'none',
  },
  ['&:hover::after']: {
    width: '120%',
    backgroundColor: 'rgba(255,255,255,0)',
	  transition: 'all 0.8s ease-in-out',
  }
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  marginBottom: '14px',
  borderRadius: '8px'
}));

export const StyledInfoBlock = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
  alignItems: 'center',
  marginBottom: '18px'
}));

export const StyledCoach = styled('div')(() => ({
  color: '#CBC1C1',
  fontSize: '14px',
}));

export const StyledDuration = styled('div')(() => ({
  fontSize: '14px',
  fontWeight: '500'
}));

export const StyledTitle = styled('div')(() => ({
  fontSize: '18px',
  marginBottom: '4px'
}));

export const StyledRating = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  marginBottom: '30px',
}));

export const StyledStars = styled('div')(() => ({
  display: 'flex',
  gap: '4px',
  /* height: '14px', */
}));

export const StyledStar = styled('img')(() => ({
  width: '14px',
  height: '14px',
}));

export const StyledFeedbacks = styled('div')(() => ({
  fontSize: '14px',
}));

export const StyledButton = styled(Button)(() => ({
  width: '60%',
  padding: '0',
  textTransform: 'none',
  borderRadius: '4px',
  overflow: 'hidden',
  outline: '1px solid #0083FF',
}));

export const StyledLink = styled('a')(() => ({
  width: '100%',
  lineHeight: '100%',
  padding: '12px 20px',
  color: '#fff',
  background: '#0083FF',
  textDecoration: 'none',
  fontSize: '16px',
  transition: '0.3s',
  ['&:hover']: {
    background: '#fff',
    color: '#0083FF'
  }
}))
