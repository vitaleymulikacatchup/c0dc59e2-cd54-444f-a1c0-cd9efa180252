"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function Page() {
  return (
    <ThemeProvider defaultButtonVariant="icon-arrow" defaultTextAnimation="entrance-slide" borderRadius="rounded">
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingOverlay navItems={[{name:"Home", id:"home"},{name:"Features", id:"features"},{name:"Pricing", id:"pricing"},{name:"Contact", id:"contact"}]} brandName="SaaS Landing" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard 
            title="Welcome to Our Platform"
            description="Create beautiful, responsive web experiences"
            imageSrc="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="A woman with digital code projections on her face, representing technology and future concepts."
            buttons={[{text: "Get Started", href: "https://example.com"}, {text: "Learn More", href: "about"}]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout 
            title="About Us"
            description={["We're a team passionate about creating exceptional digital experiences.","Our mission is to empower designers and developers."]}
            buttons={[{text: "Learn More", href: "about"}]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree 
            features={[
              {id: "01", title: "Advanced Analytics", description: "Get detailed insights into your business performance", imageSrc: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
              {id: "02", title: "Secure Storage", description: "Keep your data safe with our top-notch security protocols", imageSrc: "https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of a modern server unit in a blue-lit data center environment."},
              {id: "03", title: "Collaborate Efficiently", description: "Work together seamlessly in real-time", imageSrc: "https://images.pexels.com/photos/34263353/pexels-photo-34263353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Free stock photo of competitive, event photography, high vis"}
            ]}
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne 
            title="Choose Your Plan"
            description="Select the perfect plan for your needs"
            plans={[
              {id: "1", badge: "Most Popular", price: "$29/mo", subtitle: "Perfect for small teams", features: ["Up to 10 team members", "100GB storage", "Priority support"]},
              {id: "2", badge: "Best Value", price: "$49/mo", subtitle: "Ideal for growing businesses", features: ["Unlimited team members", "1TB storage", "24/7 dedicated support"]}
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit 
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            imageSrc="https://images.pexels.com/photos/8145336/pexels-photo-8145336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Happy colleagues high-fiving in a meeting, showcasing teamwork and success."
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase 
            columns={[
              {title: "Product", items: [{label: "Features", href: "features"}, {label: "Pricing", href: "pricing"}]},
              {title: "Company", items: [{label: "About", href: "about"}, {label: "Contact", href: "contact"}]}
            ]}
            copyrightText="© 2025 | SaaS Landing"
          />
        </div>
      </div>

    </ThemeProvider>
  );
}
