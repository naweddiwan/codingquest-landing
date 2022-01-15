import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Testimonials from 'views/HomePage/Testimonials';


export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Complete Your Coding Quest and Land a Guaranteed Job of Rs. 5-30 LPA!"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Course Description" overTitle="sit amet gogo">
          <p>
            The Full Stack Development course at CodingQuest enables you to reach your maximum potential and achieve your goal of becoming a Software Engineer who can build complex applications that scale.</p>
            <p>Along with the job preparation we also impart the required skills to excel in your coding journey. Keeping all of that in mind the course is desgined in such a way that we build from the fundamentals and 
            make our way to advance topics while having hands on practice. </p>
            <p>To ensure continous and comprehensive learning regular tests, quizzes, assignments and hackathons will also be organized.
            {/* list items */}
            <ul>
                <li>Fundamentals of Computer Science</li>
               <li>Data Structures And Algorithms</li>
               <li>System Design</li>
               <li>Building blocks of Web Development</li>
               <li>Backend with Node.js</li>
               <li>MongoDB</li>
               <li>Frontend with React.js</li>
               <li>Capstone Project</li>
            </ul>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Why choose us?" overTitle="lorem ipsum" reversed>
            <p>
              We are a team of working professionals from IITs and other top colleges having proven skills in the software industry with reputed companies. 
            </p>
            <ul>
              <li>Live online classes</li>
              <li>Doubt Support</li>
              <li>Personal Mentoring</li>
              <li>Soft Skills Training</li>
              <li>Resume Building</li>
              <li>Mock Interviews</li>
              <li>Referrals to Top Companies</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          
          <FeaturesGallery />

          <Container>
                <Content>
                  <SectionTitle>Pricing</SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Content>
                  <SectionTitle></SectionTitle>
                </Content>
                <Wrapper>
            <PricingTablesSection />
         </Wrapper>
                
          </Container>
         
         


          <Container>
              <Content>
                <SectionTitle>Our Tutors and Mentors</SectionTitle>
              </Content>
          </Container>
          <Features />
        
          {/* <Testimonials /> */}
          {/* <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}


const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;


const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;


export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
