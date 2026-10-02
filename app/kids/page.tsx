import type { Metadata } from "next";
import KidsHome from "../components/kids-home";
import { kidsHomeContent } from "../content/kids-home";

export const metadata: Metadata = {
  title: "Lightway Kids | Growing with Jesus",
  description:
    "A growing Lightway experience for children, families, Bible learning, worship, and discovery.",
};

export default function KidsPage() {
  return <KidsHome content={kidsHomeContent} />;
}