export const siteConfig = {
  name: "Jay Prajapati",
  shortName: "Jay",
  title: "Jay Prajapati | Full Stack Developer Portfolio",
  description:
    "Jay Prajapati is a full stack developer from Ahmedabad, India, building fast and scalable web applications using React, Next.js, Node.js, and MongoDB.",
  domain: "https://prajapatijay-dev.vercel.app",
  keywords: [
    "Jay Prajapati",
    "Prajapati Jay",
    "Jay Prajapati portfolio",
    "Jay Prajapati developer",
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
    alternateName: "Jay Prajapati",
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
