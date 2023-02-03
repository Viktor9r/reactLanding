import {
  StyledAdvantages,
  StyledAdvantagesTitle,
  StyledCardsBlock,
  StyledText,
  StyledTextBlock,
  StyledTitle,
} from './styled';

import Icon from '../../../images/QualityIcon.png'
import { Card } from './Card/Card';

export const Advantages = () => {
  const cards = [
    {
      id: 1,
      icon: Icon,
      title: 'Quality Design Maker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    },
    {
      id: 2,
      icon: Icon,
      title: 'Quality Design Maker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    },
    {
      id: 3,
      icon: Icon,
      title: 'Quality Design Maker',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    }
  ]
  return (
    <StyledAdvantages>
      <StyledAdvantagesTitle>Advantages</StyledAdvantagesTitle>
      <StyledTextBlock>
        <StyledTitle>
          Provide Quality Services.
        </StyledTitle>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </StyledText>
      </StyledTextBlock>
      <StyledCardsBlock>
        {cards.map((c) =>
          <Card card={c} key={c.id} />
        )}
      </StyledCardsBlock>
    </StyledAdvantages>
  )
}