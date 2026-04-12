import { getBaseUrl } from "../seo";

export const metadata = {
  title: "About Jay Prajapati",
  description:
    "Learn about Jay Prajapati's journey, experience, and skills as a full stack developer.",
  keywords: [
    "Jay Prajapati",
    "Prajapati Jay",
    "About Jay Prajapati",
    "Jay Prajapati profile",
  ],
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
  openGraph: {
    title: "About Jay Prajapati",
    description:
      "Learn about Jay Prajapati's journey, experience, and skills as a full stack developer.",
    url: `${getBaseUrl()}/about`,
    type: "profile",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
