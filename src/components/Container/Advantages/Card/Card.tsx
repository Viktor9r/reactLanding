import {
  StyledButton,
  StyledCard,
  StyledIcon,
  StyledText,
  StyledTitle,
} from './styled';

interface Props {
  card: any
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <StyledCard>
      <StyledIcon src={card.icon} />
      <StyledTitle>Quality Design Maker</StyledTitle>
      <StyledText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      </StyledText>
      <StyledButton />
    </StyledCard>
  )
}