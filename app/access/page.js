import { redirect } from "next/navigation";

// The access/OTP gate has been removed. Redirect anyone who visits this
// URL directly back to the homepage.
export default function AccessPage() {
  redirect("/");
}
