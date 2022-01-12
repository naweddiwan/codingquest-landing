import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Question</SectionTitle>
      <Accordion title="What is the admission process?">
       It is a 4-step process. 
       <ul>
         <li>
          You apply for the course.
         </li>
         <li>
           Your profile gets shorlisted
         </li>
         <li>
           We take a screening interview.
         </li>
         <li>
           Get started with the course.
         </li>
         </ul> 
      </Accordion>
      <Accordion title="What can I expect in the screecing interview?">
        We beilieve that at its core programming is nothing but problem solving. If you are a good problem solver and have a knack for problem solving, you will be able to pass this round.
        We will be looking out for analytical, logical and problem solving skills.
        If you have prior experience in coding we can test that too. But that is not mandatory.
      </Accordion>
      <Accordion title="Who can take this course?">
        Students in their final year or passed out of their Bachelors Course can take this course. Working professionals who wish to accelerate their careers can also take this course.
      </Accordion>
      <Accordion title="When will I get placed?">
        After we have done our Data Structure and Algorithms part, we will take mock interviews and tests regularly. 
        During this time only we will try to get your profile to as many good companies as possible.
      </Accordion>
      <Accordion title="Do I need to have a CS degree?">
        No, we believe if you have the skills that is required to be a good software engineer then you can get placed at any top tech company. 
        In the current times most of the companies are willing to interview if you have the right skills.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
