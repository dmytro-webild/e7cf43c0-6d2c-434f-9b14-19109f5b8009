"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TextAbout from "@/components/sections/about/TextAbout";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Heart, CheckCircle, Shield, Leaf, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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
            { name: "Home", id: "home" },
            { name: "How It Works", id: "features" },
            { name: "Browse", id: "products" },
            { name: "Impact", id: "metrics" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Join Now", href: "/donate" }}
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Share Medicine, Save Lives, Build Community"
          description="Donate your unused medications safely or order affordable donated medicines from verified community members. Together, we address medication waste, affordability barriers, and safe disposal."
          tag="Community Healthcare"
          tagIcon={Heart}
          tagAnimation="slide-up"
          background={{ variant: "circleGradient" }}
          mediaItems={[
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/friendly-charity-workers-aid-needy_482257-84843.jpg",
              imageAlt: "Medicine donation process",
            },
            {
              imageSrc:
                "http://img.b2bpic.net/free-photo/attenders-group-therapy-joining-hands-unity-meeting_637285-9993.jpg",
              imageAlt: "Community members supporting healthcare",
            },
          ]}
          rating={5}
          ratingText="Trusted by 10,000+ community members"
          buttons={[
            { text: "Join Now", href: "/donate" },
            { text: "Browse Medicines", href: "/order" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* How It Works Section */}
      <div id="features" data-section="features">
        <FeatureCardThree
          title="How It Works"
          description="A simple, secure three-step process to donate or receive medications responsibly"
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
                "http://img.b2bpic.net/free-vector/mobile-face-scan_24908-56399.jpg",
              imageAlt: "Verification process",
            },
            {
              id: "02",
              title: "Donate or Browse",
              description:
                "Submit unused medications with expiry dates and manufacturing dates for donation or browse verified donated medicines",
              imageSrc:
                "http://img.b2bpic.net/free-photo/pharmacist-holding-tablet-by-shelf-full-medicine-drug-store-checking-medication-availability-specification_342744-319.jpg",
              imageAlt: "Browse medicines",
            },
            {
              id: "03",
              title: "Order & Receive",
              description:
                "Place orders for affordable medicines with real-time tracking, safe pickup or delivery, and access to medicine guidance chat",
              imageSrc:
                "http://img.b2bpic.net/free-photo/african-american-female-verifying-shipment-details-awb-labels-using-package-tracking-software_482257-132623.jpg",
              imageAlt: "Delivery and tracking",
            },
            {
              id: "04",
              title: "Chat & Learn",
              description:
                "Access floating medicine information chat with FAQs about usage, side effects, and proper medication handling without interruption",
              imageSrc:
                "http://img.b2bpic.net/free-photo/call-center-agent-typing-pc-keyboard-assisting-customers-through-live-chat_482257-125755.jpg",
              imageAlt: "Medicine guidance chat",
            },
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Browse Medicines Section */}
      <div id="products" data-section="products">
        <ProductCardTwo
          title="Browse Verified Medicines"
          description="All medicines are verified, dated, and safely handled by our community healthcare partners"
          tag="Available Now"
          tagIcon={Shield}
          tagAnimation="slide-up"
          products={[
            {
              id: "1",
              brand: "Trusted Pharmacy Network",
              name: "Vitamin C 500mg",
              price: "$2.50",
              rating: 5,
              reviewCount: "234",
              imageSrc:
                "http://img.b2bpic.net/free-photo/white-tablets-from-blue-pill-bottle_181624-899.jpg",
              imageAlt: "Vitamin C supplement bottle",
            },
            {
              id: "2",
              brand: "Community Health",
              name: "Multivitamin Complex",
              price: "$4.00",
              rating: 5,
              reviewCount: "512",
              imageSrc:
                "http://img.b2bpic.net/free-photo/happy-young-fit-girl-doing-sports-home-shows-dietary-supplements-taking-vitamins-healthy-body_1258-189563.jpg",
              imageAlt: "Multivitamin supplement bottle",
            },
            {
              id: "3",
              brand: "Verified Donations",
              name: "Pain Relief Tablets",
              price: "$1.75",
              rating: 4,
              reviewCount: "189",
              imageSrc:
                "http://img.b2bpic.net/free-photo/old-man-having-pills-hand-healthcare-treatment-aging-concept_1157-39274.jpg",
              imageAlt: "Pain relief medication package",
            },
            {
              id: "4",
              brand: "Wellness Circle",
              name: "Digestive Aid",
              price: "$3.25",
              rating: 5,
              reviewCount: "156",
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-cute-female-posing-indoor_344912-967.jpg",
              imageAlt: "Digestive supplement bottle",
            },
            {
              id: "5",
              brand: "Health Partners",
              name: "Allergy Relief",
              price: "$2.00",
              rating: 5,
              reviewCount: "423",
              imageSrc:
                "http://img.b2bpic.net/free-photo/coronavirus-child-mother-with-daughter-child-lying-bed-woman-medical-mask_1157-43343.jpg",
              imageAlt: "Allergy relief medication",
            },
            {
              id: "6",
              brand: "Safe Medicine Hub",
              name: "Cold & Flu Remedy",
              price: "$3.50",
              rating: 4,
              reviewCount: "278",
              imageSrc:
                "http://img.b2bpic.net/free-photo/person-with-disease-infection-analyzing-package-leaflet_482257-17729.jpg",
              imageAlt: "Cold and flu medication package",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          carouselMode="buttons"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      {/* About Section */}
      <div id="about" data-section="about">
        <TextAbout
          tag="Our Mission"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          title="We believe every person deserves access to affordable, safe medications. By creating a community-driven redistribution system, we reduce medication waste, address affordability barriers, and ensure responsible disposal—all while building trust through verification and transparency."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "/about" },
            { text: "Safety Standards", href: "#metrics" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* Metrics Section */}
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

      {/* Testimonials Section */}
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
                "http://img.b2bpic.net/free-photo/portrait-smiling-nurse-looking-camera-while-standing-clinic_637285-5031.jpg",
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
                "http://img.b2bpic.net/free-photo/close-up-portrait-joyful-male-doctor_171337-1489.jpg",
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
                "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg",
              imageAlt: "Emily Rodriguez",
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidwellness",
              testimonial:
                "The environmental impact excited me most—reducing medication waste while helping others. The entire process from donation to seeing it help someone was deeply rewarding.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/businessman-portrait_93675-133109.jpg",
              imageAlt: "David Kim",
            },
            {
              id: "5",
              name: "Lisa Thompson",
              handle: "@lisamd",
              testimonial:
                "As a retired pharmacist, I appreciate the rigorous safety standards. Every medication verified, every date tracked. This is how responsible redistribution should work.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/female-pharmacist-posing-drugstore_651396-1217.jpg",
              imageAlt: "Lisa Thompson",
            },
            {
              id: "6",
              name: "James Wilson",
              handle: "@jamesbetter",
              testimonial:
                "The floating chat feature is genius—I got instant answers about my medication without disrupting my browsing. This platform truly thinks about user experience.",
              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2541.jpg",
              imageAlt: "James Wilson",
            },
          ]}
          showRating={true}
          carouselMode="buttons"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      {/* Contact Section */}
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
                { label: "Browse Catalog", href: "#products" },
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