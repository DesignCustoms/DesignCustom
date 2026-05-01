import Image from "next/image";
import CountUp from "./components/CountUp";
import Ticker from "./components/Ticker";

const services = [
  {
    title: "Advanced SEO",
    desc: "Strategic search engine optimization to increase visibility, drive qualified traffic, and dominate your niche in search results.",
    items: ["Comprehensive keyword strategy", "Technical SEO & site optimization", "Content optimization & link building"],
  },
  {
    title: "Conversion Optimization",
    desc: "Turn visitors into loyal customers with data-driven conversion strategies that maximize your ROI on every channel.",
    items: ["Landing page design & testing", "A/B testing & analytics", "User experience audits"],
  },
  {
    title: "Social Media Growth",
    desc: "Build a powerful social presence that keeps your brand top-of-mind and drives consistent engagement with your audience.",
    items: ["Content strategy & scheduling", "Community engagement", "Performance tracking & reporting"],
  },
  {
    title: "Analytics & Insights",
    desc: "Make data-driven decisions with comprehensive tracking and actionable insights into every aspect of your performance.",
    items: ["Custom dashboard setup", "ROI tracking & reporting", "Competitor analysis"],
  },
  {
    title: "Email Marketing",
    desc: "Nurture leads and retain customers with personalized email campaigns that drive engagement and consistent sales.",
    items: ["Automated drip campaigns", "List segmentation & targeting", "Performance optimization"],
  },
  {
    title: "Ongoing Maintenance",
    desc: "Continuous updates, monitoring, and optimization to keep your online presence fresh and performing at its best.",
    items: ["Regular content updates", "Performance monitoring", "Security & backup management"],
  },
];

const trustPoints = [
  {
    title: "Fast Turnaround",
    desc: "Get updates on your requests every 1–3 days on average. Speed without sacrificing quality.",
  },
  {
    title: "Unlimited Revisions",
    desc: "We revise until you're 100% satisfied. No extra charges, no limits.",
  },
  {
    title: "Direct Communication",
    desc: "Work directly with our team. Dedicated professionals focused on your success.",
  },
  {
    title: "Cancel Anytime",
    desc: "No long-term commitment. Pause or cancel whenever you need to.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 backdrop-blur-md bg-[#080810]/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/dc-logo.png" alt="DC" width={34} height={34} className="logo-glow" />
            <span className="text-base font-bold tracking-tight">Design Custom</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2.5 group">
            <span className="text-sm font-semibold text-white">Get Started</span>
            <div className="w-8 h-8 rounded-full bg-[#c9a961] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c9a961]/40 transition-all">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full">

          {/* Trust badge */}
          <div className="flex items-center gap-2.5 mb-12">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium tracking-wide">Trusted by growing businesses</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Editorial headline */}
            <div>
              <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-black leading-[0.88] tracking-tight mb-8">
                <span className="block text-white">From</span>
                <span className="block gradient-text italic">invisible</span>
                <span className="block text-white">to</span>
                <span className="block text-white">unstoppable.</span>
              </h1>
              <p className="text-sm text-gray-500 max-w-xs mb-1.5 leading-relaxed">
                A complete online growth system that gets you found, builds trust, and turns visitors into customers — without the guesswork.
              </p>
              <p className="text-xs text-[#c9a961]/60 uppercase tracking-[0.2em] font-semibold mb-10">
                * for businesses ready to scale
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <a href="#contact" className="flex items-center gap-3 group">
                  <span className="text-sm font-bold text-white">Book Free Strategy Call</span>
                  <div className="w-10 h-10 rounded-full bg-[#c9a961] flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c9a961]/40 transition-all flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
                <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4">
                  See how it works ↓
                </a>
              </div>
            </div>

            {/* Right: Full logo — featured prominently */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-[#c9a961]/15 via-[#2563eb]/10 to-transparent blur-3xl scale-150 rounded-full" />
                <Image
                  src="/dc-full-logo.png"
                  alt="Design Custom"
                  width={440}
                  height={440}
                  priority
                  className="relative z-10 logo-glow drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-10 border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <CountUp end={50} suffix="+" />
              <p className="text-xs text-gray-600 mt-1.5 uppercase tracking-widest">Clients served</p>
            </div>
            <div>
              <CountUp end={100} suffix="%" />
              <p className="text-xs text-gray-600 mt-1.5 uppercase tracking-widest">Satisfaction rate</p>
            </div>
            <div>
              <CountUp end={24} suffix="hr" />
              <p className="text-xs text-gray-600 mt-1.5 uppercase tracking-widest">Response time</p>
            </div>
            <div>
              <CountUp end={3} suffix="x" />
              <p className="text-xs text-gray-600 mt-1.5 uppercase tracking-widest">Avg. traffic growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Process Section */}
      <section id="process" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="text-xs text-[#c9a961] uppercase tracking-[0.2em] font-bold mb-5">HOW IT WORKS</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.9] tracking-tight">
              Get started<br />in one day.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {[
              {
                num: "01",
                title: "Subscribe",
                desc: "Select your plan and contact us. We can kick things off within 24 hours of hearing from you.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Add Your Goals",
                desc: "Tell us exactly what you want to achieve. Add as many growth goals as you need — we tackle them one at a time.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Receive Results",
                desc: "Get updates every 1–3 days. We revise until you're 100% satisfied with every deliverable.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-[#0d0d18] p-10 group hover:bg-[#10101e] transition-colors"
              >
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xs font-bold text-[#c9a961]/70 uppercase tracking-[0.2em]">{step.num}</span>
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-[#c9a961]/40 group-hover:text-[#c9a961] transition-all">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

            {/* Left: sticky label + tags */}
            <div className="lg:sticky lg:top-32">
              <p className="text-xs text-[#c9a961] uppercase tracking-[0.2em] font-bold mb-5">WHAT WE DO</p>
              <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-black leading-[0.9] tracking-tight mb-6">
                SEO,<br />conversion,<br />social<br />& more.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-10">
                We don&apos;t just run campaigns — we craft growth systems optimized for conversion and retention, tailored to your goals.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Advanced SEO", "Conversion CRO", "Social Media", "Email Marketing",
                  "Analytics", "A/B Testing", "Content Strategy", "Link Building",
                  "Landing Pages", "Maintenance", "Performance Audits", "Competitor Analysis",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium border border-white/[0.08] rounded-full text-gray-500 hover:border-[#c9a961]/40 hover:text-[#c9a961] transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: accordion cards */}
            <div className="space-y-3">
              {services.map((service) => (
                <details key={service.title} className="group border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0d0d18] hover:border-white/[0.14] transition-colors">
                  <summary className="flex items-center justify-between p-7 list-none">
                    <span className="font-bold text-white text-lg">{service.title}</span>
                    <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-gray-500 group-open:rotate-45 group-open:border-[#c9a961]/50 group-open:text-[#c9a961] transition-all flex-shrink-0 ml-4">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-7 pb-7 -mt-2">
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-400">
                          <span className="text-[#c9a961] text-xs flex-shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}
            <div>
              <p className="text-xs text-[#c9a961] uppercase tracking-[0.2em] font-bold mb-5">WHY DESIGN CUSTOM</p>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[0.9] tracking-tight mb-6">
                A studio<br />you can<br />trust.
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm max-w-sm mb-10">
                We bring fresh energy, modern strategies, and a genuine commitment to your success. When you work with us, you&apos;re not just another account — you&apos;re a valued partner.
              </p>
              <a href="#contact" className="inline-flex items-center gap-3 group">
                <span className="text-sm font-bold text-white">Get started today</span>
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c9a961] transition-all">
                  <svg className="w-4 h-4 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Right: 2x2 trust grid */}
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="bg-[#0d0d18] border border-white/[0.07] rounded-2xl p-6 hover:border-[#c9a961]/20 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#c9a961]/10 flex items-center justify-center mb-4 group-hover:bg-[#c9a961]/20 transition-colors">
                    <svg className="w-4 h-4 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1.5">{point.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-[#080810]">
        <div className="max-w-7xl mx-auto">
          <div className="relative border border-white/[0.08] rounded-3xl overflow-hidden p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/[0.04] via-transparent to-[#2563eb]/[0.04]" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#c9a961]/10 to-[#2563eb]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#2563eb]/8 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs text-[#c9a961] uppercase tracking-[0.2em] font-bold mb-6">LET&apos;S TALK</p>
              <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-tight mb-6">
                Let&apos;s grow<br />together.
              </h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-12 leading-relaxed">
                Ready to dominate your market online? We&apos;ll reply within 24 hours and can get started the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="mailto:info@designcustom.ca" className="flex items-center gap-3 group">
                  <span className="text-base font-bold text-white">Get Your Free Consultation</span>
                  <div className="w-11 h-11 rounded-full bg-[#c9a961] flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#c9a961]/40 transition-all flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-gray-600 uppercase tracking-widest">
                <span>✓ No long-term contracts</span>
                <span>✓ Results-driven approach</span>
                <span>✓ Free strategy session</span>
                <span>✓ Reply in 24 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/dc-logo.png" alt="DC" width={28} height={28} className="logo-glow" />
            <span className="font-bold text-sm text-white">Design Custom</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="tel:7052297318" className="hover:text-white transition-colors">705-229-7318</a>
            <a href="mailto:info@designcustom.ca" className="hover:text-white transition-colors">info@designcustom.ca</a>
          </div>
          <p className="text-xs text-gray-700">© 2026 Design Custom. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
