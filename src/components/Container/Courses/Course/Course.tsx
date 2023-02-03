import {
  StyledButton,
  StyledCoach,
  StyledCourse,
  StyledDuration,
  StyledFeedbacks,
  StyledImage,
  StyledInfoBlock,
  StyledLink,
  StyledRating,
  StyledStar,
  StyledStars,
  StyledTitle,
} from './styled';

import starIcon from '../../../../images/grade.png';
import { useEffect, useRef } from 'react';

interface Props {
  course: any,
}

export const Course: React.FC<Props> = ({ course }) => {
  /* const stars: number[] = [];

  const starsFill = () => {
    for (let i = 0; i <= course.stars; i++) {
      stars.push(i);
    }
  } */
    /* const containerRef: any = useRef();

    const color = '#fff';
  
    useEffect(() => {
      function mouseMoveEvent(e: any) {
        const { x } = containerRef.current.getBoundingClientRect();
        containerRef.current.style.setProperty('--px', e.clientX - x);
        color && containerRef.current.style.setProperty('--color', color);
      }
      containerRef.current.addEventListener('mousemove', mouseMoveEvent);
  
      return () => {
        containerRef.current.removeEventListener('mousemove', mouseMoveEvent);
      };
    }, []); */

  const stars = [1, 2, 3, 4, 5]
  return (
    <StyledCourse /* ref={containerRef} */>
      <StyledImage src={course.photo} />
      <StyledInfoBlock>
        <StyledCoach>{course.coach}</StyledCoach>
        <StyledDuration>{course.duration}</StyledDuration>
      </StyledInfoBlock>
      <StyledTitle>{course.title}</StyledTitle>
      <StyledRating>
        <StyledStars>
          {stars.map((star) => (
            <StyledStar src={starIcon} />
          ))}
        </StyledStars>
        <StyledFeedbacks>({course.rating})</StyledFeedbacks>
      </StyledRating>
      <StyledButton>
        <StyledLink href='#' >Start the course</StyledLink>
      </StyledButton>
    </StyledCourse>
  )
}