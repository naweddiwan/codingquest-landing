import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      {/* <SectionTitle>Flexible pricing for agile teams</SectionTitle> */}
      <AutofitGrid>
        <PricingCard
          title="Pre-Paid"
          description="Full fee refund if you don't get placed"
          benefits={['One time fee', 'Full refund guarantee', 'Lower fee', 'No cost EMI options', 'No hidden fees']}
        >
          ₹50,000<span></span>
        </PricingCard>
        <PricingCard
          title="Post-Paid"
          description="No initial investment"
          benefits={['Pay after getting placed', 'Pay 7.5% of Cash in hand salary', 'For 2 years', 'Max amount capped at 1 Lakh', 'No hidden fees']}
          isOutlined
        >
           ₹0<span></span>
        </PricingCard>
        <PricingCard
          title="Free | Trial"
          description="7 Days Free Trial Classes"
          benefits={[
            'Free classes for a week',
            'No commitment',
            '1 mentorship session',
            'Free career seminars'
          ]}
        >
         ₹0
          
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
