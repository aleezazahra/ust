import Features from '@/components/landing/Features';
import Hero from "@/components/landing/Hero";
import Footer from '@/components/landing/Footer';
import Navbar from "@/components/landing/Navbar";
import FinalCta from "@/components/landing/FinalCta"
import FAQS from "@/components/landing/FAQS";

export default function HomePage(){
  return(
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Features />
      <FinalCta />
      <FAQS />
      <Footer />

    </main>
  )
} 

