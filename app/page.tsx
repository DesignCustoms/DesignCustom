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
              <span className="text-[#60a5fa] font-medium">Get More Traffic • Convert More Customers</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              From Invisible to{" "}
              <span className="gradient-text">Unstoppable</span>{" "}
              Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              A complete online growth system that gets you found, builds trust, and turns visitors into customers, without the guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#c9a961] to-[#2563eb] rounded-full text-white text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a961]/30">
                Book Your Free Strategy Call
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-[#c9a961] rounded-full text-[#e4c77d] text-lg font-semibold hover:bg-[#c9a961]/10 transition-colors">
                See How It Works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 bg-[#1a1a24]/50 p-4 rounded-xl border border-[#c9a961]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Get Found</div>
                  <div className="text-sm text-gray-400">Show up first on Google</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1a24]/50 p-4 rounded-xl border border-[#60a5fa]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2563eb] to-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Build Trust</div>
                  <div className="text-sm text-gray-400">Look like the best choice</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1a24]/50 p-4 rounded-xl border border-[#c9a961]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#2563eb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">Grow Sales</div>
                  <div className="text-sm text-gray-400">Turn clicks into customers</div>
                </div>
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
              <h3 className="text-2xl font-bold mb-3 text-white">Advanced SEO</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Strategic search engine optimization to increase visibility, drive qualified traffic, and boost your online presence.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Comprehensive keyword strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Technical SEO & site optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Content optimization & link building</span>
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
              <h3 className="text-2xl font-bold mb-3 text-white">Social Media Growth</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Build a powerful social presence that keeps your brand top-of-mind and drives consistent engagement with your audience.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Content strategy & scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Community engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e4c77d] mt-1">✓</span>
                  <span>Performance tracking</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Ongoing Maintenance</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Continuous updates, monitoring, and optimization to keep your online presence fresh and performing at its best.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Regular content updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#60a5fa] mt-1">✓</span>
                  <span>Security & backup management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="gradient-text">Design Custom</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I bring fresh energy, modern strategies, and a genuine commitment to your success. When you work with me, you're not just another account. You're a valued partner.
            </p>
          </div>
          
          {/* Timeline-style layout */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#2563eb] flex items-center justify-center shadow-lg shadow-[#c9a961]/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">Personalized Attention</h3>
                <p className="text-lg text-gray-400">You'll work directly with me. No assistants, no outsourcing. Your project gets my full focus and expertise.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#c9a961] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">Modern Strategies</h3>
                <p className="text-lg text-gray-400">Up-to-date with the latest trends, tools, and techniques to give you a competitive edge in your market.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#2563eb] flex items-center justify-center shadow-lg shadow-[#c9a961]/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">Affordable & Flexible</h3>
                <p className="text-lg text-gray-400">Competitive pricing and flexible packages designed specifically for growing businesses like yours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="results" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#13131b]/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What You Can <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My commitment to delivering measurable results and exceptional service with every project.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Gradient line connecting items */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a961] via-[#2563eb] to-[#c9a961]"></div>
              
              {/* Items */}
              <div className="space-y-12">
                <div className="md:flex items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <div className="text-2xl font-bold text-white mb-2">Fast Turnaround</div>
                    <p className="text-gray-400">Quick response times and efficient project delivery without compromising quality</p>
                  </div>
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#2563eb] items-center justify-center shadow-lg shadow-[#c9a961]/40 z-10 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>

                <div className="md:flex items-center gap-8">
                  <div className="md:w-1/2 md:pr-8"></div>
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#2563eb] to-[#c9a961] items-center justify-center shadow-lg shadow-[#2563eb]/40 z-10 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="text-2xl font-bold text-white mb-2">Quality Work</div>
                    <p className="text-gray-400">Professional-grade solutions built with attention to detail and best practices</p>
                  </div>
                </div>

                <div className="md:flex items-center gap-8">
                  <div className="md:w-1/2 md:text-right md:pr-8">
                    <div className="text-2xl font-bold text-white mb-2">Clear Communication</div>
                    <p className="text-gray-400">Regular updates and transparent discussions about your project's progress</p>
                  </div>
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#c9a961] to-[#2563eb] items-center justify-center shadow-lg shadow-[#c9a961]/40 z-10 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div className="md:w-1/2 md:pl-8"></div>
                </div>
              </div>
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
                Ready To <span className="gradient-text">Grow</span> Together?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's partner up and build something amazing. I'm excited to help your business reach its full potential online.
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
