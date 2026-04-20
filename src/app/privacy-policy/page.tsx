import ServiceTemplate from "@/components/ServiceTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Abhi.ai",
  description: "Read the privacy policy of Abhi.ai to understand how we handle your data.",
};

export default function Page() {
  return (
    <ServiceTemplate
      title="Our"
      gradientText="Privacy Policy"
      subtitle="Your data privacy is our top priority."
      description="At Abhi.ai, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information when you use our services or visit our website. We ensure that your business data remains secure and confidential at all times."
      features={[
        "Secure Data Handling",
        "Transparent Collection",
        "No Third-Party Sharing",
        "Data Encryption",
        "Compliance with Standards",
        "User Control Over Data"
      ]}
    />
  );
}
