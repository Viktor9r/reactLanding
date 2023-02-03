import {
  StyledCourses,
  StyledCoursesBlock,
  StyledMainTitle,
  StyledSecondTitle,
} from './styled';

import course1 from '../../../images/course1.png';
import course2 from '../../../images/course2.png';
import course3 from '../../../images/course3.png';
import course4 from '../../../images/course4.png'
import { Course } from './Course/Course';

export const Courses = () => {
  const courses = [
    {
      id: 1,
      coach: 'Ihor Kalinka - IT',
      duration: '2 months 1 week',
      title: 'Master in Design System in Figma & Sketch',
      stars: 5,
      rating: 333,
      photo: course1,
    },
    {
      id: 1,
      coach: 'Ihor Kalinka - IT',
      duration: '2 months 1 week',
      title: 'Master in Design System in Figma & Sketch',
      stars: 4,
      rating: 333,
      photo: course2,
    },
    {
      id: 1,
      coach: 'Ihor Kalinka - IT',
      duration: '2 months 1 week',
      title: 'Master in Design System in Figma & Sketch',
      stars: 5,
      rating: 333,
      photo: course3,
    },
    {
      id: 1,
      coach: 'Ihor Kalinka - IT',
      duration: '2 months 1 week',
      title: 'Master in Design System in Figma & Sketch',
      stars: 3,
      rating: 333,
      photo: course4,
    },
  ]
  return (
    <StyledCourses>
      <StyledSecondTitle>Second Title</StyledSecondTitle>
      <StyledMainTitle>Featured Courses</StyledMainTitle>
      <StyledCoursesBlock>
        {courses.map((c) => (
          <Course key={c.id} course={c} />
        ))}
      </StyledCoursesBlock>
    </StyledCourses>
  )
}