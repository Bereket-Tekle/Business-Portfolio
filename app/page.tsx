import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingParticle from "@/components/FloatingParticle";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import TechLogos from "@/components/TechLogos";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative cursor-none">
      <Navbar />
      <HeroSection />
      <TechLogos />
      <FloatingParticle />
      <CustomCursor/>
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}
