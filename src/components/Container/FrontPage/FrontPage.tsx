import { Header } from './Header/Header';
import { MainInfo } from './MainInfo/MainInfo';
import {
  StyledFrontPage,
} from './styled';

export const FrontPage = () => {
  return (
    <StyledFrontPage>
      <Header />
      <MainInfo />
    </StyledFrontPage>
  )
}