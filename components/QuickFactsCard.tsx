import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import { media } from 'utils/media';

export interface QuickCardsCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

export default function QuickCardsCard({ title, imageUrl, description }: QuickCardsCardProps) {
  return (
    
      <ArticleCardWrapper className="article-card-wrapper">
         
        <HoverEffectContainer>
          <ImageContainer>
            <NextImage src={imageUrl} layout="fill" objectFit="cover" height={180} width={123} alt={title} />
          </ImageContainer>
          <Content>
            <Title>{title}</Title>
            {/* </center> */}
            <Description>{description}</Description>
          </Content>
        </HoverEffectContainer>
      </ArticleCardWrapper>
  );
}

const ArticleCardWrapper = styled.a`
  display: flex;
  flex-direction: none;
  height: 22rem;
  max-width: 18rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 0 1rem;

  & > * {
    margin-top: 0.5rem;
  }
`;

const Title = styled.h4`
  font-size: 1.2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Description = styled.p`
  font-size: 1.2rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;
