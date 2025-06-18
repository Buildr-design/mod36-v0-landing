import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ModulesSection } from '@/components/sections/modules-section';
import { ManifestoSection } from '@/components/sections/manifesto-section';
import { FooterSection } from '@/components/sections/footer-section';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { siteContent } from '@/data/site-content';

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection content={siteContent.home.heroSection} />
      <AboutSection content={siteContent.home.aboutSection} />
      <ModulesSection content={siteContent.home.modulesSection} />
      <ManifestoSection content={siteContent.home.manifestoSection} />
      <FooterSection content={siteContent.home.footerSection} />
    </PageWrapper>
  );
}
