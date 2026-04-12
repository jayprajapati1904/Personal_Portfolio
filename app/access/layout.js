import { getBaseUrl } from "../seo";

export const metadata = {
  title: "Secure Access",
  description:
    "Secure access verification for Jay Prajapati's protected portfolio sections.",
  alternates: {
    canonical: `${getBaseUrl()}/access`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccessLayout({ children }) {
  return children;
}
