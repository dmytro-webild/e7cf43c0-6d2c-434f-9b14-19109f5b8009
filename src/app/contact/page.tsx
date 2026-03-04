"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactText from "@/components/sections/contact/ContactText";
import TextAbout from "@/components/sections/about/TextAbout";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="largeSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      {/* Navbar */}
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="MediShare"
          navItems={[
            { name: "Home", id: "/" },
            { name: "How It Works", id: "/" },
            { name: "Browse", id: "/" },
            { name: "Impact", id: "/" },
            { name: "Contact", id: "/" },
          ]}
          button={{ text: "Join Now", href: "/donate" }}
        />
      </div>

      {/* Main Contact CTA */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to be part of a healthcare revolution? Join our community of donors and recipients making medicine accessible to everyone."
          animationType="entrance-slide"
          background={{ variant: "circleGradient" }}
          buttons={[
            { text: "Join Now", href: "/donate" },
            { text: "Browse Medicines", href: "/order" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Support Section */}
      <div id="about" data-section="about">
        <TextAbout
          tag="Get In Touch"
          tagIcon={MessageSquare}
          tagAnimation="slide-up"
          title="Have questions about donating, ordering, or our platform? Our dedicated support team is here to help. Whether you're new to MediShare or a long-time community member, we're committed to making your experience smooth and meaningful."
          useInvertedBackground={false}
          buttons={[
            { text: "Email Us", href: "#" },
            { text: "FAQ & Resources", href: "/faq" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Secondary CTA */}
      <div id="cta" data-section="cta">
        <ContactText
          text="Connect with us today and discover how you can make a real difference in your community's healthcare access and sustainability."
          animationType="entrance-slide"
          background={{ variant: "circleGradient" }}
          buttons={[
            { text: "Start Your Journey", href: "/" },
            { text: "Learn More", href: "/about" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      {/* Footer */}
      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Platform",
              items: [
                { label: "Home", href: "/" },
                { label: "Donate Medicine", href: "/donate" },
                { label: "Order Medicine", href: "/order" },
                { label: "Browse Catalog", href: "/order" },
              ],
            },
            {
              title: "Community",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Our Impact", href: "/" },
                { label: "Testimonials", href: "/" },
                { label: "Partner Organizations", href: "#" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "/faq" },
                { label: "Medicine Guide", href: "#" },
                { label: "Safety Standards", href: "/" },
                { label: "Blog", href: "#" },
              ],
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact Us", href: "/contact" },
                { label: "Accessibility", href: "#" },
              ],
            },
          ]}
          bottomLeftText="© 2025 MediShare Community. All rights reserved. Building healthcare equity together."
          bottomRightText="Made with compassion for community health"
        />
      </div>
    </ThemeProvider>
  );
}