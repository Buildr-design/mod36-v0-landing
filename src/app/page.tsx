
import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { WhatIsMod36Section } from '@/components/sections/what-is-mod36-section';
import { VisionSection } from '@/components/sections/vision-section'; // New
import { KeyFeaturesSection } from '@/components/sections/key-features-section'; // New
import { UseCasesWhoItIsForSection } from '@/components/sections/use-cases-who-it-is-for-section';
import { CommunityMovementSection } from '@/components/sections/community-movement-section';
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
      <WhatIsMod36Section content={homeContent.whatIsMod36Section} />
      <VisionSection content={homeContent.visionSection} />
      <KeyFeaturesSection content={homeContent.keyFeaturesSection} />
      <UseCasesWhoItIsForSection content={homeContent.whoItIsForSection} />
      <CommunityMovementSection content={homeContent.communitySection} />
      <FooterSectionV2 content={homeContent.footerSection} />
    </PageWrapper>
  );
}
    
