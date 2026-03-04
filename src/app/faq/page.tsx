"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function FaqPage() {
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

      {/* FAQ Section */}
      <div id="faq" data-section="faq">
        <FaqDouble
          faqs={[
            {
              id: "1",
              title: "What medicines can I donate?",
              content:
                "You can donate over-the-counter medications, prescription medications (with proper verification), and supplements that are: unopened/sealed, within expiry date, stored properly, and approved by our verification team. All donations require manufacturing and expiry dates.",
            },
            {
              id: "2",
              title: "How is safety ensured?",
              content:
                "Every donation is verified by licensed healthcare professionals. We check authenticity, confirm expiry dates, verify manufacturing dates, inspect packaging, and ensure regulatory compliance. No expired or compromised medications ever reach our community.",
            },
            {
              id: "3",
              title: "How do I order medicines?",
              content:
                "Browse our verified medicine catalog, check manufacturing/expiry dates, add items to your cart, and choose pickup or delivery. Real-time tracking provided for all orders. The floating chat feature helps with any questions about medications.",
            },
            {
              id: "4",
              title: "What's the floating chat feature?",
              content:
                "Our medicine guidance chat appears as a non-intrusive corner feature with FAQs about medication usage, side effects, interactions, and proper handling. It stays accessible without interrupting your browsing or donation process.",
            },
            {
              id: "5",
              title: "Is my information private and secure?",
              content:
                "Yes. We use bank-level encryption, comply with healthcare privacy regulations, never share personal health information, and maintain secure identity verification. Your medical history remains confidential.",
            },
            {
              id: "6",
              title: "What if I have questions about a specific medicine?",
              content:
                "Use our 24/7 floating medicine guidance chat for immediate answers about any medication. You'll find information about usage instructions, potential side effects, interactions, and safe handling practices.",
            },
            {
              id: "7",
              title: "Can I donate expired medications?",
              content:
                "No. We accept only medications within their expiry date. Expired medications must be disposed of through proper pharmacy disposal programs. You must enter the exact expiry date during donation.",
            },
            {
              id: "8",
              title: "How are delivery and pickup managed?",
              content:
                "After ordering, you can select pickup at verified community locations or arrange safe delivery. All medicines are packaged securely with proper documentation of manufacturing and expiry dates included.",
            },
            {
              id: "9",
              title: "What happens to my donation?",
              content:
                "Your donation goes through our verification process, is matched with community members who need affordable medicines, and gets delivered safely. You receive updates on the impact of your donation through our impact dashboard.",
            },
            {
              id: "10",
              title: "Is there a cost to donate or order?",
              content:
                "Donations are free. Ordering is at deeply reduced prices (50-80% below retail). We sustain through community donations, NGO partnerships, and healthcare advocacy grants—never through excessive markups.",
            },
          ]}
          title="Frequently Asked Questions"
          description="Find answers about donating, ordering, safety, and using our medicine guidance chat"
          tag="Help & Support"
          tagAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="smooth"
        />
      </div>

      {/* CTA Section */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Still have questions? Reach out to our support team or contact us directly. We're here to help you navigate your donation or ordering journey."
          animationType="entrance-slide"
          background={{ variant: "circleGradient" }}
          buttons={[
            { text: "Contact Support", href: "/contact" },
            { text: "Browse Medicines", href: "/order" },
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