'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-between bg-black relative overflow-hidden">
        {/* Black Fallback Background */}
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* YouTube Video Background */}
        <iframe
          className="absolute inset-0 w-full h-full object-cover z-5"
          src="https://www.youtube.com/embed/1d-vk39ADvk?autoplay=1&mute=1&loop=1&playlist=1d-vk39ADvk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=1&end=18&branding=0&autohide=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{
            pointerEvents: 'none',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: window.innerWidth >= 1024 ? '30%' : '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5
          }}
          onLoad={() => {
            // Adjust positioning after load for responsive behavior
            const iframe = document.querySelector('iframe[title="Background Video"]') as HTMLElement;
            if (iframe) {
              iframe.style.top = window.innerWidth >= 1024 ? '30%' : '45%';
            }
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Top Section - Titles (Mobile Only) */}
        <div className="relative z-20 lg:hidden">
          <div className="bg-black relative">
            <div className="absolute inset-0 bg-black" style={{left: '-100vw', right: '-100vw'}}></div>
            <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-16 text-center relative z-10">
              <p className="text-sm text-gray-200 mb-4 sm:mb-6 drop-shadow-lg">
                ⚡ GoViral is Live. Your Smarter SMM Panel. <a href="/services" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">Explore Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-none font-oswald drop-shadow-xl" style={{fontSize: 'clamp(2.5rem, 8vw, 68px)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                The <span className="text-primary drop-shadow-lg">Viral Growth</span><br />Engine Powered by<br />Smart Aggregation
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section - Description, CTA, and Titles (Desktop) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16 relative z-20 flex-1 flex items-end">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-8 lg:gap-0">
            {/* Desktop Titles - Left Side */}
            <div className="hidden lg:block lg:order-1">
              <p className="text-sm text-gray-200 mb-4 sm:mb-6 drop-shadow-lg">
                ⚡ GoViral is Live. Your Smarter SMM Panel. <a href="/services" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">Explore Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
              </p>
              <h1 className="text-6xl font-bold text-white leading-none font-oswald drop-shadow-xl" style={{fontSize: '68px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                The <span className="text-primary drop-shadow-lg">Viral Growth</span><br />Engine Powered by<br />Smart Aggregation
              </h1>
            </div>
            
            {/* Description and CTA - Right Side on Desktop, Bottom on Mobile */}
            <div className="lg:max-w-lg w-full lg:w-auto lg:order-2 lg:flex lg:flex-col lg:items-start lg:gap-6 lg:relative">
              {/* Mobile: Full Width Black Background Container */}
              <div className="bg-black relative lg:bg-transparent lg:relative w-full block lg:hidden">
                <div className="absolute inset-0 bg-black" style={{left: '-100vw', right: '-100vw'}}></div>
                <div className="flex flex-col items-center gap-4 sm:gap-6 relative z-10 py-4">
                  <p className="text-lg sm:text-xl text-gray-200 drop-shadow-lg text-center px-4 sm:px-6" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                    GoViral helps brands, creators and businesses skyrocket visibility. Our system automatically finds the fastest, cheapest and highest quality services, so you always get the best results without stress.
                  </p>
                  <div className="flex gap-3 sm:gap-4 flex-wrap w-full justify-center px-4 sm:px-6">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg h-12 sm:h-14 flex-1 sm:flex-initial max-w-48 sm:max-w-none"
                      onClick={() => setIsSignupModalOpen(true)}
                    >
                      Get Started
                    </Button>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg border-2 h-12 sm:h-14 backdrop-blur-sm flex-1 sm:flex-initial max-w-48 sm:max-w-none">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop: Original Layout */}
              <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-6 lg:relative lg:w-full">
                <div className="bg-black relative w-full">
                  <div className="absolute inset-0 bg-black" style={{right: '-100vw'}}></div>
                  <p className="text-lg sm:text-xl text-gray-200 drop-shadow-lg relative z-10 text-left" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
                    GoViral helps brands, creators and businesses skyrocket visibility. Our system automatically finds the fastest, cheapest and highest quality services, so you always get the best results without stress.
                  </p>
                </div>
                <div className="flex gap-3 sm:gap-4 flex-wrap w-full justify-start">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg h-12 sm:h-14 flex-1 sm:flex-initial max-w-48 sm:max-w-none"
                    onClick={() => setIsSignupModalOpen(true)}
                  >
                    Get Started
                  </Button>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg border-2 h-12 sm:h-14 backdrop-blur-sm flex-1 sm:flex-initial max-w-48 sm:max-w-none">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginModalOpen(false);
          setIsSignupModalOpen(true);
        }}
      />
      
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => {
          setIsSignupModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </Layout>
  );
}
