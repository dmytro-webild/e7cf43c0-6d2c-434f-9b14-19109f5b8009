"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Leaf, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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

      {/* About Mission Section */}
      <div id="about" data-section="about">
        <TextAbout
          tag="Our Mission"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          title="We believe every person deserves access to affordable, safe medications. By creating a community-driven redistribution system, we reduce medication waste, address affordability barriers, and ensure responsible disposal—all while building trust through verification and transparency."
          useInvertedBackground={false}
          buttons={[
            { text: "Donate Medicine", href: "/donate" },
            { text: "Browse Available", href: "/order" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Impact Metrics Section */}
      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Our Impact: Building a Healthier, More Sustainable Community"
          tag="Safety Standards"
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",
              value: "100%",
              description:
                "All donations verified by licensed healthcare professionals for safety, authenticity, and regulatory compliance",
            },
            {
              id: "2",
              value: "50,000+",
              description:
                "Medications redistributed to underserved communities, reducing healthcare costs and waste",
            },
            {
              id: "3",
              value: "Zero",
              description:
                "Expired or compromised medications ever distributed. Every item includes manufacturing and expiry dates",
            },
            {
              id: "4",
              value: "24/7",
              description:
                "Medicine guidance chat available with FAQs, usage instructions, and side effect information",
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      {/* Community Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Stories from Our Community"
          description="Real people sharing how MediShare has made a difference in their lives"
          tag="Testimonials"
          tagIcon={Users}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_healthcare",
              testimonial:
                "I was able to donate unused prescriptions from a failed treatment, knowing they'd help someone in need. The verification process gave me peace of mind.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/portrait-smiling-nurse-looking-camera-while-standing-clinic_637285-5031.jpg?_wi=2",
              imageAlt: "Sarah Johnson",
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mikehealth",
              testimonial:
                "Couldn't afford my regular medications. MediShare helped me get the vitamins and supplements I need at prices I can manage. The chat feature explained interactions perfectly.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-joyful-male-doctor_171337-1489.jpg?_wi=2",
              imageAlt: "Michael Chen",
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emilycare",
              testimonial:
                "As an NGO worker, I needed affordable medications for our community clinic. MediShare's bulk donation program has been transformative for our healthcare initiatives.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg?_wi=2",
              imageAlt: "Emily Rodriguez",
            },
          ]}
          showRating={true}
          carouselMode="buttons"
          animationType="slide-up"
          textboxLayout="default"
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
                { label: "Our Impact", href: "#metrics" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Partner Organizations", href: "#" },
              ],
            },
            {
              title: "Resources",
              items: [
                { label: "FAQ", href: "/faq" },
                { label: "Medicine Guide", href: "#" },
                { label: "Safety Standards", href: "#metrics" },
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