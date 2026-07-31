export const siteConfig = {
  name: "Jay Prajapati",
  shortName: "Jay",
  title: "Jay Prajapati | Full Stack Developer Portfolio",
  description:
    "Jay Prajapati is a full stack developer from Ahmedabad, India, building fast and scalable web applications using React, Next.js, Node.js, and MongoDB.",
  domain: "https://jayprajapati.techorbitra.com",
  keywords: [
    "Jay Prajapati",
    "Prajapati Jay",
    "Jay Prjapati",
    "Jey Prajapati",
    "Jay Prajapati portfolio",
    "Jay Prajapati developer",
    "Prajapati Jay portfolio",
    "Prajapati Jay developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Ahmedabad Web Developer",
    "Freelance Web Developer",
    "Portfolio",
  ],
  email: "jay1904prajapati@gmail.com",
  phone: "+91-9429468900",
  locale: "en_IN",
  sameAs: [
    "https://www.linkedin.com/in/jayprajapati-dev/",
    "https://www.instagram.com/j_a_y_1908/",
    "https://x.com/jayprajapa1908",
  ],
};

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain;
}

export function personJsonLd() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: ["Jay Prajapati", "Prajapati Jay"],
    url: baseUrl,
    image: `${baseUrl}/profile.jpg`,
    jobTitle: "Full Stack Developer",
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressCountry: "IN",
    },
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Full Stack Development",
    ],
    nationality: "Indian",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    sameAs: siteConfig.sameAs,
  };
}

export function websiteJsonLd() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: baseUrl,
    inLanguage: "en-IN",
  };
}

export function organizationJsonLd() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.title,
    alternateName: ["Jay Prajapati", "Prajapati Jay"],
    url: baseUrl,
    logo: `${baseUrl}/tab_logo.png`,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        availableLanguage: ["English"],
      },
    ],
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Jay Prajapati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jay Prajapati is a full stack developer from Ahmedabad, India, also known as Prajapati Jay.",
        },
      },
      {
        "@type": "Question",
        name: "What does Jay Prajapati build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jay Prajapati builds fast, SEO-friendly web applications with React, Next.js, Node.js, and MongoDB.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Jay Prajapati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Jay Prajapati through the Contact page, email, WhatsApp, LinkedIn, Instagram, or X profile links.",
        },
      },
    ],
  };
}
