import { PortfolioHero } from "@/components/hero";
import { PortfolioAbout } from "@/components/about";
import PortfolioExperience from "@/components/experience";
import PortfolioProjects from "@/components/projects";
import { PortfolioSkills } from "@/components/skills";
import PortfolioContact from "@/components/contact";

const page = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioAbout />
      <PortfolioExperience />
      <PortfolioProjects />
      <PortfolioSkills />
      <PortfolioContact />
    </>
  );
};

export default page;
