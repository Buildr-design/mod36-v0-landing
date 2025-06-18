
import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { WhatIsMod36Section } from '@/components/sections/what-is-mod36-section';
import { BuildrSection } from '@/components/sections/buildr-section';
import { WhyModularSection } from '@/components/sections/why-modular-section';
import { CommunityInvitationSection } from '@/components/sections/community-invitation-section';
import { RoadmapPreviewSection } from '@/components/sections/roadmap-preview-section';
import { FooterSectionV2 } from '@/components/sections/footer-section-v2';

import { PageWrapper } from '@/components/layout/page-wrapper';
import { siteContent } from '@/data/site-content';

export default function Home() {
  if (!siteContent || !siteContent.homeV001) {
    return <PageWrapper><div className="min-h-screen flex items-center justify-center">Site content is unavailable.</div></PageWrapper>;
  }
  const homeContent = siteContent.homeV001;

  return (
    <PageWrapper>
      <HeroSectionV2 content={homeContent.heroSection} />
      <WhatIsMod36Section content={homeContent.whatIsMod36Section} />
      <BuildrSection content={homeContent.buildrSection} />
      <WhyModularSection content={homeContent.whyModularSection} />
      <CommunityInvitationSection content={homeContent.communityInvitationSection} />
      <RoadmapPreviewSection content={homeContent.roadmapPreviewSection} />
      <FooterSectionV2 content={homeContent.footerSection} />
    </PageWrapper>
  );
}
