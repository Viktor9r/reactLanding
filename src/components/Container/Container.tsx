import { About } from './About/About';
import { Advantages } from './Advantages/Advantages';
import { Companies } from './Companies/Companies';
import { Courses } from './Courses/Courses';
import { FrontPage } from './FrontPage/FrontPage';
import {
  StyledContainer,
  StyledGrid,
} from './styled';

export const Container = () => {
  return (
    <StyledContainer>
      <FrontPage />
      <StyledGrid>
        <Companies />
        <Advantages />
        <Courses />
        <About />
      </StyledGrid>
    </StyledContainer>
  )
}