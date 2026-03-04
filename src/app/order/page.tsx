"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TextAbout from "@/components/sections/about/TextAbout";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function OrderPage() {
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
                "http://img.b2bpic.net/free-photo/white-tablets-from-blue-pill-bottle_181624-899.jpg?_wi=2",
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
                "http://img.b2bpic.net/free-photo/happy-young-fit-girl-doing-sports-home-shows-dietary-supplements-taking-vitamins-healthy-body_1258-189563.jpg?_wi=2",
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
                "http://img.b2bpic.net/free-photo/old-man-having-pills-hand-healthcare-treatment-aging-concept_1157-39274.jpg?_wi=2",
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
                "http://img.b2bpic.net/free-photo/young-cute-female-posing-indoor_344912-967.jpg?_wi=2",
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
                "http://img.b2bpic.net/free-photo/coronavirus-child-mother-with-daughter-child-lying-bed-woman-medical-mask_1157-43343.jpg?_wi=2",
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
                "http://img.b2bpic.net/free-photo/person-with-disease-infection-analyzing-package-leaflet_482257-17729.jpg?_wi=2",
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

      {/* Affordability Section */}
      <div id="about" data-section="about">
        <TextAbout
          tag="Affordable Healthcare"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="Every person deserves access to affordable medications. Our verified medicines are priced 50-80% below retail, making healthcare accessible to those who need it most. All medicines are professionally verified and dated for your safety."
          useInvertedBackground={false}
          buttons={[
            { text: "Order Now", href: "/" },
            { text: "View Guidelines", href: "/faq" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      {/* CTA Section */}
      <div id="contact" data-section="contact">
        <ContactText
          text="Access affordable, verified medicines from our community healthcare network. Join thousands of people who have found relief and wellness through MediShare."
          animationType="entrance-slide"
          background={{ variant: "circleGradient" }}
          buttons={[
            { text: "Browse Medicines", href: "#products" },
            { text: "Get Help", href: "/faq" },
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