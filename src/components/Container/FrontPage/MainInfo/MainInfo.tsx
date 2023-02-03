import { StyledGrid } from '../../styled';
import {
  StyledButtons,
  StyledDivider,
  StyledExtra,
  StyledMainInfo,
  StyledOffer,
  StyledRate,
  StyledRateCell,
  StyledRateIcon,
  StyledRateIcons,
  StyledRateLink,
  StyledRateNumber,
  StyledRateTitle,
  StyledRatings,
  StyledSignUp,
  StyledSignUpLink,
  StyledSlogan,
  StyledVideo,
  StyledVideoImage,
} from './styled';
import divider from '../../../../images/Union.png';
import video from '../../../../images/Video.png';

import favorite from '../../../../images/favorite.png';
import grade from '../../../../images/grade.png';

export const MainInfo = () => {
  return (
    <StyledGrid sx={{maxWidth: 'none'}}>
      <StyledMainInfo>
        <StyledOffer><b>offer</b> is going on till friday $1.99/mo.</StyledOffer>
        <StyledSlogan>
          We Bring The Good Education To Life
        </StyledSlogan>
        <StyledDivider src={divider} />
        <StyledExtra>
          Agency work with top rated talented people provide quality courses.
        </StyledExtra>
        <StyledButtons>
          <StyledSignUp>
            <StyledSignUpLink href='#'>
              Sign up for a course
            </StyledSignUpLink>
          </StyledSignUp>
          <StyledVideo href='#'>
            <StyledVideoImage src={video} />
          </StyledVideo>
        </StyledButtons>
        <StyledRatings>
          <StyledRate>
            <StyledRateCell sx={{paddingTop: '6px'}}>
              <StyledRateNumber>12k</StyledRateNumber>
              <StyledRateIcons>
                <StyledRateIcon src={favorite} />
                <StyledRateIcon src={favorite} />
                <StyledRateIcon src={favorite} />
                <StyledRateIcon src={favorite} />
                <StyledRateIcon src={favorite} />
              </StyledRateIcons>
            </StyledRateCell>
            <StyledRateCell sx={{justifyContent: 'space-between'}}>
              <StyledRateTitle>Active Students</StyledRateTitle>
              <StyledRateLink href='#' >Go to Feedback</StyledRateLink>
            </StyledRateCell>
          </StyledRate>
          <StyledRate>
            <StyledRateCell sx={{paddingTop: '6px'}}>
              <StyledRateNumber>5.6</StyledRateNumber>
              <StyledRateIcons>
                <StyledRateIcon src={grade} />
                <StyledRateIcon src={grade} />
                <StyledRateIcon src={grade} />
                <StyledRateIcon src={grade} />
                <StyledRateIcon src={grade} />
              </StyledRateIcons>
            </StyledRateCell>
            <StyledRateCell sx={{justifyContent: 'space-between'}}>
              <StyledRateTitle>2.150 Rating</StyledRateTitle>
              <StyledRateLink href='#' >Go to Feedback</StyledRateLink>
            </StyledRateCell>
          </StyledRate>
        </StyledRatings>
      </StyledMainInfo>
    </StyledGrid>
  )
}