import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import { PropsWithChildren } from 'react';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Course Details', href: '/courseDetails' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'Apply Now', href: 'https://forms.gle/SQ1cYj7L1DpHcK6L6', outlined: true , link: 'https://forms.gle/SQ1cYj7L1DpHcK6L6'},
];

function MyApp({ Component, pageProps }: AppProps) {
  const standaloneMarkup = <Component {...pageProps} />;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Modals />
        <Navbar items={navItems} />
        {standaloneMarkup}
        {/* <WaveCta /> */}
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
