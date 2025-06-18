
import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { IntroSection } from '@/components/sections/intro-section';
import { CorePhilosophySection } from '@/components/sections/core-philosophy-section';
import { RealitiesGridSection } from '@/components/sections/realities-grid-section';
import { Mod36EngineSection } from '@/components/sections/mod36-engine-section';
import { UseCasesSection } from '@/components/sections/use-cases-section';
import { OpenModelSection } from '@/components/sections/open-model-section';
import { RoadmapSection } from '@/components/sections/roadmap-section';
import { FooterSectionV2 } from '@/components/sections/footer-section-v2';

import { PageWrapper } from '@/components/layout/page-wrapper';
import { siteContent } from '@/data/site-content';

export default function Home() {
  if (!siteContent || !siteContent.home) {
    return <PageWrapper><div className="min-h-screen flex items-center justify-center">Site content is unavailable.</div></PageWrapper>;
  }
  const homeContent = siteContent.home;

  return (
    <PageWrapper>
      <HeroSectionV2 content={homeContent.heroSection} />
      <IntroSection content={homeContent.introSection} />
      <CorePhilosophySection content={homeContent.corePhilosophySection} />
      <RealitiesGridSection content={homeContent.realitiesGridSection} />
      <Mod36EngineSection content={homeContent.mod36EngineSection} />
      <UseCasesSection content={homeContent.useCasesSection} />
      <OpenModelSection content={homeContent.openModelSection} />
      <RoadmapSection content={homeContent.roadmapSection} />
      <FooterSectionV2 content={homeContent.footerSection} />
    </PageWrapper>
  );
}

    