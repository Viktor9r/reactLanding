import { styled } from '@mui/material/styles';

export const StyledAdvantages = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '1/13',
  marginBottom: '280px',
}));

export const StyledAdvantagesTitle = styled('h2')(() => ({
  padding: '0',
  margin: '0',
  textTransform: 'uppercase',
  fontSize: '16px',
  fontWeight: '600',
  letterSpacing: '2px',
  marginBottom: '22px'
}));

export const StyledTextBlock = styled('div')(() => ({
  display: 'flex',
  gap: '100px',
  justifyContent: 'space-between',
  marginBottom: '100px',
  width: '90%'
}));

export const StyledTitle = styled('h1')(() => ({
  padding: '0',
  margin: '0',
  fontSize: '60px',
  fontWeight: '600',
  lineHeight: '84px',
  flex: '0.44',
}));

export const StyledText = styled('div')(() => ({
  fontSize: '18px',
  flex: '0.56',
  alignSelf: 'flex-end'
}));

export const StyledCardsBlock = styled('div')(() => ({
  display: 'flex',
  gap: '30px',
  justifyContent: 'space-between'
}))