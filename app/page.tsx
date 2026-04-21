import { PortfolioHero } from "@/components/hero";
import { PortfolioAbout } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { PortfolioSkills } from "@/components/skills";
import { Contact } from "@/components/contact";

const page = () => {
  return (
    <>
      <PortfolioHero />
      <PortfolioAbout />
      <Experience />
      <Projects />
      <PortfolioSkills />
      <Contact />
    </>
  );
};

export default page;
