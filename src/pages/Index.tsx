
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import VarietiesSection from '@/components/home/VarietiesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import BlogSection from '@/components/home/BlogSection';
import ContactForm from '@/components/home/ContactForm';
import PartnersSection from '@/components/home/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <VarietiesSection />
        <div className="py-20 bg-brand-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need FoxNuts (Makhana)?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We're a leading makhana supplier offering premium quality products at competitive prices, along with excellent customer service.
            </p>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center bg-white text-brand-600 hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-semibold text-lg"
            >
              Contact us for prices
            </a>
          </div>
        </div>
        <WhyChooseUs />
        <PartnersSection />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
