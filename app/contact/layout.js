import { getBaseUrl } from "../seo";

export const metadata = {
  title: "Contact Jay Prajapati",
  description:
    "Contact Jay Prajapati for freelance full stack development projects, collaborations, and consulting.",
  alternates: {
    canonical: `${getBaseUrl()}/contact`,
  },
  openGraph: {
    title: "Contact Jay Prajapati",
    description:
      "Reach out to Jay Prajapati for full stack web development work.",
    url: `${getBaseUrl()}/contact`,
    type: "website",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
