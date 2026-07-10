import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Read our refund policy for AI automation and software development services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">
          Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#7c3aed]">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <h2 className="text-2xl font-semibold text-white mt-10">1. Custom Development Services</h2>
          <p>
            At Abhi.ai, our core focus is delivering custom AI agents, full-stack applications, and automation systems tailored to your unique business needs. Due to the highly customized nature of our development and engineering work, <strong>we do not offer refunds</strong> once development has commenced or milestones have been approved.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">2. Milestone-Based Payments</h2>
          <p>
            To ensure complete transparency and satisfaction, we operate on a milestone-based payment structure. 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Payments are only requested after you approve the deliverables for a specific milestone (e.g., UI/UX design, prototype, final deployment).</li>
            <li>If you decide to cancel the project prior to completion, you will not be billed for future milestones, but past milestone payments are non-refundable.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">3. Consultation & Audits</h2>
          <p>
            Fees paid for strategic AI audits, discovery calls, or architectural planning are strictly non-refundable, as these involve immediate time and intellectual property investment from our engineering team.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">4. Service Disruptions & SaaS Limits</h2>
          <p>
            If you are on a retainer or maintenance plan, and experience a significant service disruption caused directly by our infrastructure (excluding third-party LLM outages like OpenAI or Anthropic), we may offer service credits at our sole discretion. We do not issue cash refunds for downtime.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">5. Contact Us</h2>
          <p>
            If you have any questions regarding this Refund Policy, the practices of this site, or your dealings with this site, please contact us at:
          </p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Email:</strong> <a href="mailto:shabhishek055@gmail.com" className="text-[#00f0ff] hover:underline">shabhishek055@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919575676062" className="text-[#00f0ff] hover:underline">+91 95756 76062</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
