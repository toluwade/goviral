import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex-1 flex items-end bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-end justify-between w-full">
          <div>
            <p className="text-sm text-muted-foreground mb-6">
              ⚡ GoViral is Live. Your Smarter SMM Panel. <a href="/services" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1">Explore Services <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></a>
            </p>
            <h1 className="text-6xl font-bold text-foreground leading-none font-oswald" style={{fontSize: '68px'}}>
              The <span className="text-primary">Viral Growth</span><br />Engine Powered by<br />Smart Aggregation
            </h1>
          </div>
          <div className="flex flex-col items-start gap-6">
            <p className="text-xl text-muted-foreground max-w-lg">
              GoViral helps brands, creators and businesses skyrocket visibility. Our system automatically finds the fastest, cheapest and highest quality services, so you always get the best results without stress.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg h-14">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-background px-12 py-6 text-lg border-2 h-14">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
