
import { HeroSectionV2 } from '@/components/sections/hero-section-v2';
import { KeyFeaturesSection } from '@/components/sections/key-features-section'; // Adapted for Core Features
import { CommunityMovementSection } from '@/components/sections/community-movement-section'; // Adapted for Call to Action
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
      <KeyFeaturesSection content={homeContent.keyFeaturesSection} /> 
      <CommunityMovementSection content={homeContent.communitySection} />
      <FooterSectionV2 content={homeContent.footerSection} />
    </PageWrapper>
  );
}
    
