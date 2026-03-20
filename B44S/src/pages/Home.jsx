import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import StatsBar from '../components/landing/StatsBar';
import AboutSection from '../components/landing/AboutSection';
import ServicesSection from '../components/landing/ServicesSection';
import ReviewsSection from '../components/landing/ReviewsSection';
import CTASection from '../components/landing/CTASection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69bc28c4c6c6136426ceaee8/07a46d75d_generated_da0eeff5.png',
  about: 'https://media.base44.com/images/public/69bc28c4c6c6136426ceaee8/1eb0e6990_generated_363298be.png',
  recruitment: 'https://media.base44.com/images/public/69bc28c4c6c6136426ceaee8/901524bf3_generated_b24cdf9b.png',
  legal: 'https://media.base44.com/images/public/69bc28c4c6c6136426ceaee8/8f88065b0_generated_3b4eda1c.png',
  training: 'https://media.base44.com/images/public/69bc28c4c6c6136426ceaee8/47b754cd9_generated_4a54aa1f.png',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <HeroSection heroImage={IMAGES.hero} />
      <StatsBar />
      <AboutSection aboutImage={IMAGES.about} />
      <ServicesSection images={IMAGES} />
      <ReviewsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}