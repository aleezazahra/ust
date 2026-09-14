import Features from '@/components/landing/Features';
import Hero from "@/components/landing/Hero";
import Footer from '@/components/landing/Footer';
import Navbar from "@/components/landing/Navbar";


export default function HomePage(){
  return(
    <main className='min-h-screen'>
      <Navbar />
      <Hero />
      <Features />
      <Footer />

    </main>
  )
} 

