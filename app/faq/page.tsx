"use client";

import { useState } from "react";

type FAQItemType = {
  q: string;
  a: string;
};

type SectionType = {
  title: string;
  items: FAQItemType[];
};

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  const faqData: SectionType[] = [
    {
      title: "Connecting With Us",
      items: [
        {
          q: "What services does Goodgig Consultancy provide?",
          a: "Goodgig Consultancy provides services related to impact assessment and policy research. We have conducted need assessments, baseline and endline studies with emphasis on quantitative and qualitative data analysis. We have written policy briefs, technical papers, landscape studies, and case studies. We also provide strategic programmatic services and content-generation support for training and capacity-building.",
        },
        {
          q: "How do we initiate a partnership with Goodgig Consultancy?",
          a: "We would love to get in touch with you. The simplest way is to fill out our Inquiry Form or email us at info@goodgig.in. We schedule an initial 30-minute call within two business days to discuss your project requirements.",
        },
      ],
    },
    {
      title: "Project Scope & Timelines",
      items: [
        {
          q: "How long does a typical project last?",
          a: "Timelines vary by complexity: focused assessments usually take 6–8 weeks, while larger strategic implementations and policy research can span 4–10 months.",
        },
        {
          q: "Can you accommodate urgent or short-term deadlines?",
          a: "We often facilitate high-intensity projects for organizations facing immediate challenges. Please flag any urgent timelines in your initial outreach.",
        },
      ],
    },
    {
      title: "Our Versatility",
      items: [
        {
          q: "Which sectors or thematic areas do you specialize in?",
          a: "We work across Education, Health and Well-being, Nutrition, Water, Sanitation and Hygiene (WASH), Gender Equity, Child Rights and Development, Livelihoods, Skill Development, and Urban Poverty and Inclusive Cities. Our cross-sector experience helps inform strategic programmatic decisions.",
        },
        {
          q: "Does Goodgig Consultancy work with only NGOs?",
          a: "We partner with NGOs, CSR foundations, government bodies, social enterprises, and research organisations of all scales—from grassroots organisations to multinational agencies.",
        },
        {
          q: "Do you conduct field-based research in rural areas?",
          a: "Yes, we have extensive experience conducting data collection and field-based research across multiple states in India.",
        },
        {
          q: "Are you able to work across different geographic regions?",
          a: "Yes, we work globally and are experienced in navigating cultural and regulatory contexts across Asia and Africa.",
        },
      ],
    },
    {
      title: "Data, Privacy & Safeguarding",
      items: [
        {
          q: "How do you handle sensitive or proprietary organizational data?",
          a: "We sign NDAs as standard practice. Our data policies cover secure collection, storage, transfer, and deletion after project completion as per agreed timelines.",
        },
        {
          q: "What are your protocols for handling personal data and safeguarding?",
          a: "We follow data minimization and informed consent principles. We only collect essential data, limit sensitive content, and apply safeguarding frameworks for vulnerable groups. Data is securely transferred and deleted after completion.",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gray-50">
      <h1 className="text-4xl font-montserrat font-bold text-gray-900 text-center mb-16">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-15">
        {faqData.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-montserrat font-semibold text-gray-500 mb-6">
              {section.title}
            </h2>

            <div className="space-y-4">
              {section.items.map((item) => {
                const key = item.q;
                const isOpen = openKey === key;

                return (
                  <div
                    key={key}
                    className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full cursor-pointer text-left flex justify-between items-center"
                    >
                      <span className="font-montserrat font-semibold text-sm text-gray-900">
                        {item.q}
                      </span>
                      <span className="text-xl text-gray-900">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-3 font-montserrat tracking-wider font-regular text-sm text-gray-700 leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
