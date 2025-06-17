import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ModulesSection } from '@/components/sections/modules-section';
import { ManifestoSection } from '@/components/sections/manifesto-section';
import { FooterSection } from '@/components/sections/footer-section';
import { PageWrapper } from '@/components/layout/page-wrapper';

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <ModulesSection />
      <ManifestoSection />
      <FooterSection />
    </PageWrapper>
  );
}
