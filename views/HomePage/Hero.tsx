import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import Container from 'components/Container';
import QuickCardsCard from 'components/QuickFactsCard';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

const QUICK_FACTS = [
  {
    imageUrl: '/quckfacts/asset-1.svg',
    title: 'Eligibility',
    description: 'Sound analytical skills',
  },
  {
    imageUrl: '/quckfacts/asset-2.svg',
    title: 'Duration of Course',
    description: '30 weeks',
  },
  {
    imageUrl: '/quckfacts/asset-3.svg',
    title: 'Class Timings',
    description: 'Weekends & Weekdays 9-11pm',
  },
  {
    imageUrl: '/quckfacts/asset-4.svg',
    title: 'Salary Commitment',
    description: '₹5 - 30 LPA',
  }
];

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        {/* <CustomOverTitle>the coolest, saas product you have ever seen</CustomOverTitle> */}
        <Heading>Complete Your Coding Quest and Land a Guaranteed Job of Rs. 5-30 LPA!</Heading>
        <Description>
          Pay ₹0 until you start earning

          <br/>
       <br/>
       <br/>
        <h2> Quick Glance </h2>
        <br/>
        </Description>



        <Container>

    
    </Container>

    <CustomAutofitGrid>
        {QUICK_FACTS.map((singleFeature, idx) => (
          // <BasicCard key={singleFeature.title} {...singleFeature} />
          
          <QuickCardsCard    
            key={singleFeature.title}
            title={singleFeature.title}
            description={singleFeature.description}
            imageUrl={singleFeature.imageUrl}
          />
        ))}
      </CustomAutofitGrid>

        {/* <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Subscribe to the newsletter <span>&rarr;</span>
          </Button>
          <NextLink href="#whitepaper" passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup> */}
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 80rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const AutofitGrid = styled.div`
  --autofit-grid-item-size: 12rem;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(var(--autofit-grid-item-size), 1fr));
  margin: 0 auto;
`;


const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 12rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;