import Image from "next/image";
import CountUp from "./components/CountUp";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d15]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0d0d15]/95 backdrop-blur-sm border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/dc-logo.png"
                alt="Design Custom Logo"
                width={60}
                height={60}
                className="logo-glow"
              />
              <span className="text-2xl font-bold text-white">Design Custom</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-[#c9a961] transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-[#c9a961] transition-colors">About</a>
              <a href="#results" className="text-gray-300 hover:text-[#c9a961] transition-colors">Results</a>
              <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-[#c9a961] to-[#2563eb] rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a961]/20">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-[#2563eb]/10 border border-[#60a5fa]/30 rounded-full">
              <span className="text-[#60a5fa] font-medium">Trusted by Growing Businesses</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business Into An{" "}
              <span className="gradient-text">Online Powerhouse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              We deliver niche growth services that give your business the traction it needs to dominate your market and build lasting customer loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#c9a961] to-[#2563eb] rounded-full text-white text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a961]/30">
                Start Your Growth Journey
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-[#c9a961] rounded-full text-[#e4c77d] text-lg font-semibold hover:bg-[#c9a961]/10 transition-colors">
                Explore Services
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <CountUp end={500} suffix="+" duration={2500} />
                <div className="text-gray-400 mt-1">Businesses Grown</div>
              </div>
              <div>
                <CountUp end={98} suffix="%" duration={2500} />
                <div className="text-gray-400 mt-1">Client Satisfaction</div>
              </div>
              <div>
                <CountUp end={5.2} suffix="x" duration={2500} decimals={1} />
                <div className="text-gray-400 mt-1">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#13131b]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Growth Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions designed to maximize your online presence and drive measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#c9a961]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Strategic SEO</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Dominate search results and attract high-intent customers actively searching for your services.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Keyword Research & Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Technical SEO Optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Monthly Performance Reports</span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#60a5fa]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#2563eb]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Conversion Optimization</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Turn visitors into loyal customers with data-driven conversion strategies that maximize your ROI.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Landing Page Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>A/B Testing & Analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>User Experience Audits</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#c9a961]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Social Growth</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Build a powerful social presence that engages your audience and drives consistent business growth.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Content Strategy & Creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Community Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Influencer Partnerships</span>
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#60a5fa]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#2563eb]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Analytics & Insights</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Make data-driven decisions with comprehensive tracking and actionable insights into your performance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Custom Dashboard Setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>ROI Tracking & Reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Competitor Analysis</span>
                </li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#c9a961]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Email Marketing</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Automated Drip Campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>List Segmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="card-hover bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#60a5fa]/20">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#2563eb]/20">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Brand Strategy</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Develop a cohesive brand identity that resonates with your audience and sets you apart from competitors.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Brand Positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Visual Identity Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Brand Guidelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="gradient-text">Design Custom</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                We don't just deliver services—we forge partnerships. Our mission is to transform businesses into market leaders through strategic, data-driven growth solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Proven Track Record</h3>
                    <p className="text-gray-400">Over 500 businesses transformed with measurable, sustainable growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2563eb]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Tailored Solutions</h3>
                    <p className="text-gray-400">Custom strategies designed specifically for your niche and market position.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a961]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Transparent Results</h3>
                    <p className="text-gray-400">Clear reporting and open communication every step of the journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/30">
                <div className="aspect-square flex items-center justify-center">
                  <Image
                    src="/dc-full-logo.png"
                    alt="Design Custom"
                    width={400}
                    height={400}
                    className="logo-glow"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-2xl opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#13131b]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real <span className="gradient-text">Results</span> For Real Businesses
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it—see the transformations we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/30 hover:border-[#c9a961]/50 transition-all">
              <div className="text-5xl mb-2">
                <CountUp end={250} prefix="+" suffix="%" duration={2500} />
              </div>
              <div className="text-xl font-semibold text-white mb-2">Organic Traffic</div>
              <p className="text-gray-400">E-commerce business saw massive growth in just 6 months</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#60a5fa]/30 hover:border-[#60a5fa]/50 transition-all">
              <div className="text-5xl mb-2">
                <CountUp end={5.2} suffix="x" duration={2500} decimals={1} />
              </div>
              <div className="text-xl font-semibold text-white mb-2">ROI Increase</div>
              <p className="text-gray-400">SaaS company multiplied their return on investment</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-8 rounded-2xl border border-[#c9a961]/30 hover:border-[#c9a961]/50 transition-all">
              <div className="text-5xl mb-2">
                <CountUp end={92} suffix="%" duration={2500} />
              </div>
              <div className="text-xl font-semibold text-white mb-2">Lead Quality</div>
              <p className="text-gray-400">B2B service provider improved lead qualification rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1a1a24] to-[#13131b] p-12 rounded-3xl border border-[#c9a961]/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-full opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready To <span className="gradient-text">Elevate</span> Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that trust Design Custom to drive their online growth. Let's build your success story together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:contact@designcustom.com" className="px-8 py-4 bg-gradient-to-r from-[#c9a961] to-[#2563eb] rounded-full text-white text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a961]/30">
                  Get Your Free Consultation
                </a>
                <a href="#services" className="px-8 py-4 border-2 border-[#c9a961] rounded-full text-[#e4c77d] text-lg font-semibold hover:bg-[#c9a961]/10 transition-colors">
                  Learn More
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#e4c77d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No long-term contracts
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#e4c77d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Results-driven approach
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#e4c77d]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free strategy session
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src="/dc-logo.png"
                alt="Design Custom Logo"
                width={40}
                height={40}
                className="logo-glow"
              />
              <span className="text-xl font-bold text-white">Design Custom</span>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-lg font-bold gradient-text mb-4">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="tel:7052297318" 
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#e4c77d] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#c9a961]/30 transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">705-229-7318</span>
                </a>
                
                <a 
                  href="mailto:daniel@designcustom.outlook.com" 
                  className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#e4c77d] transition-colors group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#2563eb]/30 transition-all">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">daniel@designcustom.outlook.com</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-right text-sm">
              © 2026 Design Custom<br/>
              Building trust and loyalty through proven growth strategies.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
