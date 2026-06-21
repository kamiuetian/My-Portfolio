import Banner from "@/website-components/Banner";
import PortfolioInfo from "@/website-components/PortfolioInfo";
import Skills from "@/website-components/Skills";
import Portfolio from "@/website-components/Portfolio";
import ContactForm from "@/website-components/ContactForm";
import ContactInfo from "@/website-components/ContactInfo";
import WebsiteMainLayout from "@/website-components/layout/WebsiteMainLayout";
import { readProjectsFile } from "@/lib/projects";

export default async function Index() {
  const projects = await readProjectsFile();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 8);

  return (
    <WebsiteMainLayout>
      <Banner />
      <PortfolioInfo />
      <Skills />
      <Portfolio projects={featuredProjects.length ? featuredProjects : projects.slice(0, 8)} />
      <ContactForm />
      <ContactInfo />
      <hr className="mt-12 mb-12 block"/>
    </WebsiteMainLayout>
  );
}
