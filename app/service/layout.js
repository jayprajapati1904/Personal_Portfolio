import { getBaseUrl } from "../seo";

export const metadata = {
  title: "Services",
  description:
    "Service plans from Jay Prajapati for static websites, full stack apps, and custom builds.",
  alternates: {
    canonical: `${getBaseUrl()}/service`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ServiceLayout({ children }) {
  return children;
}
