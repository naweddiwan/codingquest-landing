import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Abhishek Dawas | IIT Ropar',
    description:
      'Software Engineer | Goldman Sachs',
    logo: '/partners/logoipsum-logo-3.svg',
    linkedinURL: 'https://www.linkedin.com/in/abhishek-dawas-045145141/'
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Nawed Diwan | IIT Ropar',
    description:
      'Software Engineer | ',
    logo: '/partners/logoipsum-logo-4.svg',
    linkedinURL: 'https://www.linkedin.com/in/naweddiwan/'
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Ramakant Yadav | IIT Ropar',
    description:
      'Software Engineer | Zeotap',
    logo: '/partners/logoipsum-logo-5.svg',
    linkedinURL: 'https://www.linkedin.com/in/yadavaarkay/'
  },
  // {
  //   imageUrl: '/grid-icons/asset-5.svg',
  //   title: 'Shubham Mittal | IIT Ropar',
  //   description:
  //     'Software Engineer | Zeotap',
  //   logo: '/partners/logoipsum-logo-7.svg',
  //   linkedinURL: 'https://www.linkedin.com/in/99shubhammittal/'
  // },
  // {
  //   imageUrl: '/grid-icons/asset-4.svg',
  //   title: 'Nitin Gandhi | IIT Ropar',
  //   description:
  //     'Software Engineer | Zeotap',
  //   logo: '/partners/logoipsum-logo-2.svg',
  //   linkedinURL: 'https://www.linkedin.com/in/nitin-gandhi-iitrpr/'
  // },
  {
    imageUrl: '/grid-icons/asif.svg',
    title: 'Asif Khan | IIT Roorkee',
    description:
      'Software Engineer | Zeotap',
    logo: '/partners/logoipsum-logo-9.svg',
    linkedinURL: 'https://www.linkedin.com/in/mohammad-asif-707123168/'
  },
 
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          // <BasicCard key={singleFeature.title} {...singleFeature} />
          
          <ArticleCard    
            key={singleFeature.title}
            title={singleFeature.title}
            description={singleFeature.description}
            imageUrl={singleFeature.imageUrl}
            linkedinURL={singleFeature.linkedinURL} 
            logo={singleFeature.logo}
          />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 30rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 50%;
  }
`;
