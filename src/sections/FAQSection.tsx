'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How to begin with the project?',
    answer:
      'To embark on a collaborative project, simply visit our website and access our contact form to get in touch. Where we collaborate with you to outline the project scope and determine how we can assist you with our services. We will provide you with a cost estimate, prepare a comprehensive statement of work, and schedule kickoff calls with our respective teams. Once all the necessary paperwork is completed and the deposit payment is settled, we dive right into the project, ready to deliver exceptional results!',
  },
  {
    question: 'How do you charge for the project?',
    answer:
      'Our pricing is tailored to each project\'s unique requirements. We offer flexible pricing models including fixed-price contracts for well-defined projects, hourly rates for ongoing work, and retainer agreements for long-term partnerships. During our initial consultation, we\'ll discuss your project needs and provide a transparent cost estimate that fits your budget.',
  },
  {
    question: 'What are the services you offer?',
    answer:
      'We offer a comprehensive range of design and development services including UI/UX design, web development, mobile app development, branding and identity design, product design, and design system creation. Our team specializes in transforming ideas into dev-ready designs and scalable digital products.',
  },
  {
    question: 'Where is Zyntrex Agency Located?',
    answer:
      'Zyntrex Agency operates as a distributed team with members across multiple locations. We work with clients globally and are available for both remote collaboration and on-site meetings when needed. Contact us to discuss how we can best serve your location-specific needs.',
  },
  {
    question: 'What\'s included in the Test Task?',
    answer:
      'The test task is designed to showcase our design process and capabilities. It typically includes initial research and discovery, wireframing, visual design concepts, and a presentation of the design rationale. The scope and deliverables will be clearly outlined before we begin, ensuring transparency and alignment with your expectations.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize all answer heights
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === 0) {
          // First item is open by default
          gsap.set(ref, { height: 'auto', opacity: 1 });
        } else {
          gsap.set(ref, { height: 0, opacity: 0 });
        }
      }
    });

    // Initialize icon rotations
    iconRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === 0) {
          gsap.set(ref, { rotation: 45 }); // Rotate to show "-"
        } else {
          gsap.set(ref, { rotation: 0 }); // Show "+"
        }
      }
    });
  }, []);

  const toggleFAQ = (index: number) => {
    const answerRef = answerRefs.current[index];
    const iconRef = iconRefs.current[index];
    const isCurrentlyOpen = openIndex === index;

    if (!answerRef || !iconRef) return;

    if (isCurrentlyOpen) {
      // Close animation - quick out
      gsap.to(answerRef, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          setOpenIndex(null);
        },
      });
      gsap.to(iconRef, {
        rotation: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    } else {
      // Close previously open item if any
      if (openIndex !== null) {
        const prevAnswerRef = answerRefs.current[openIndex];
        const prevIconRef = iconRefs.current[openIndex];
        if (prevAnswerRef && prevIconRef) {
          gsap.to(prevAnswerRef, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
          });
          gsap.to(prevIconRef, {
            rotation: 0,
            duration: 0.3,
            ease: 'power2.in',
          });
        }
      }

      // Open animation - quick in
      gsap.set(answerRef, { height: 'auto' });
      const height = answerRef.scrollHeight;
      gsap.set(answerRef, { height: 0 });

      gsap.to(answerRef, {
        height: height,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(answerRef, { height: 'auto' });
          setOpenIndex(index);
        },
      });
      gsap.to(iconRef, {
        rotation: 45,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  return (
    <section className="relative w-full bg-white py-0" style={{ height: '632px' }}>
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-black pr-4 leading-[1.3]">
                  {faq.question}
                </h3>
                <div
                  ref={(el) => { iconRefs.current[index] = el; }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  <span className="text-2xl font-light text-black">+</span>
                </div>
              </button>

              {/* Answer */}
              <div
                ref={(el) => { answerRefs.current[index] = el; }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-[15px] text-gray-700 leading-[1.6]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

