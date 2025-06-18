
import { HeroSectionV2 } from '@/components/sections/hero-section-v2'; // Re-using for new Hero content
import { ProblemSection } from '@/components/sections/problem-section';
import { WhatIsMod36Section } from '@/components/sections/what-is-mod36-section';
import { UseCasesWhoItIsForSection } from '@/components/sections/use-cases-who-it-is-for-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { CommunityMovementSection } from '@/components/sections/community-movement-section';
import { FooterSectionV2 } from '@/components/sections/footer-section-v2'; // Re-using for new Footer content

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
      <ProblemSection content={homeContent.problemSection} />
      <WhatIsMod36Section content={homeContent.whatIsMod36Section} />
      <UseCasesWhoItIsForSection content={homeContent.useCasesWhoItIsForSection} />
      <HowItWorksSection content={homeContent.howItWorksSection} />
      <CommunityMovementSection content={homeContent.communityMovementSection} />
      <FooterSectionV2 content={homeContent.footerSection} />
    </PageWrapper>
  );
}
    