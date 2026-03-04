"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import TextAbout from "@/components/sections/about/TextAbout";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { CheckCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function DonatePage() {
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

      {/* Donation Process Section */}
      <div id="features" data-section="features">
        <FeatureCardThree
          title="Donation Process"
          description="Your step-by-step guide to safely donating medicines and making a difference"
          tag="Process"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          features={[
            {
              id: "01",
              title: "Register & Verify",
              description:
                "Create a secure account and complete identity verification to ensure community safety and regulatory compliance",
              imageSrc:
                "http://img.b2bpic.net/free-vector/mobile-face-scan_24908-56399.jpg?_wi=2",
              imageAlt: "Verification process",
            },
            {
              id: "02",
              title: "Submit Medications",
              description:
                "Submit unused medications with expiry dates and manufacturing dates. Our system automatically verifies eligibility and safety requirements",
              imageSrc:
                "http://img.b2bpic.net/free-photo/pharmacist-holding-tablet-by-shelf-full-medicine-drug-store-checking-medication-availability-specification_342744-319.jpg?_wi=2",
              imageAlt: "Submit medicines",
            },
            {
              id: "03",
              title: "Professional Review",
              description:
                "Licensed healthcare professionals review each donation for authenticity, proper storage, and compliance with regulations",
              imageSrc:
                "http://img.b2bpic.net/free-photo/african-american-female-verifying-shipment-details-awb-labels-using-package-tracking-software_482257-132623.jpg?_wi=2",
              imageAlt: "Professional review",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Donation Impact Section */}
      <div id="about" data-section="about">
        <TextAbout
          tag="Your Impact"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="Every donation creates tangible impact. Your unused medications reach people who truly need them, reducing medication waste by up to 80%, lowering healthcare costs for underserved communities, and ensuring safe, responsible disposal that protects our environment."
          useInvertedBackground={false}
          buttons={[
            { text: "Start Donating", href: "#contact" },
            { text: "View Guidelines", href: "/faq" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* CTA Section */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to make a difference? Join thousands of donors who are reducing medication waste and improving healthcare accessibility. Your donations directly help people in need."
          animationType="entrance-slide"
          background={{ variant: "circleGradient" }}
          buttons={[
            { text: "Start Donating Now", href: "/" },
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
                { label: "Browse Catalog", href: "/" },
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