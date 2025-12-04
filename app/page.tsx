import { Header } from "@/components/ui/header-3";
import SectionWithMockup from "@/components/ui/section-with-mockup";
import { ServicesSection } from "@/components/ui/features-section";
import { ScalingSection } from "@/components/ui/scaling-section";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { AboutSection } from "@/components/ui/about-section";
import { Contact2 } from "@/components/ui/contact-2";
import { Footer } from "@/components/ui/footer-section";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <SectionWithMockup
        title={
          <>
            Advanced <span className="text-[#ff6b00]">Soot Blowing</span> & <br />
            Boiler Efficiency Solutions
          </>
        }
        description={
          <>
            To exceed our customers expectations in quality, delivery, and cost through continuous improvement and customer interaction.
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        secondaryImageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
      />
      <ServicesSection />
      <ScalingSection />
      <TestimonialsSection
        title="What Our Clients Say"
        description="See what our clients say about our soot blower and boiler efficiency services."
        testimonials={[
          {
            author: {
              name: "Rajesh Kumar",
              handle: "Plant Manager, Thermal Power Corp",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "Kessel Sauber's soot blower maintenance has significantly improved our boiler efficiency. Highly recommended!",
          },
          {
            author: {
              name: "Anita Desai",
              handle: "Operations Head, Steel Works Ltd",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "Their team is professional, prompt, and knowledgeable. Downtime has been drastically reduced.",
          },
          {
            author: {
              name: "Vikram Singh",
              handle: "Chief Engineer, Energy Solutions",
              avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            },
            text: "The best in the business for boiler efficiency services. Their insights are invaluable.",
          },
          {
            author: {
              name: "Suresh Patel",
              handle: "Maintenance Lead, Textile Mills",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            text: "Reliable spare parts and excellent consultation. Kessel Sauber is our go-to partner.",
          }
        ]}
      />
      <AboutSection />
      <Contact2
        title="Get in Touch"
        description="Ready to optimize your boiler efficiency? Contact us today for a consultation or quote."
        phone="+91 98765 43210"
        email="info@kesselsauber.com"
        web={{ label: "kesselsauber.com", url: "https://kesselsauber.com" }}
      />
      <Footer />
    </main>
  );
}
