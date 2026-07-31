import { getBaseUrl } from "../seo";

export const metadata = {
  title: "Work",
  description:
    "Client projects by Jay Prajapati. Access detailed case studies and implementation highlights.",
  alternates: {
    canonical: `${getBaseUrl()}/work`,
  },
};

export default function WorkLayout({ children }) {
  return children;
}
