import Features from '@/components/landing/Features';
import Hero from "@/components/landing/Hero";

export default function HomePage(){
  return(
    <main className='min-h-screen'>
      <Hero />
      <Features />
    </main>
  )
}